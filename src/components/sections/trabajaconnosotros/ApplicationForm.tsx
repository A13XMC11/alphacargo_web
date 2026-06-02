"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { JobListing } from "@/content/jobs";

const schema = z.object({
  jobId: z.string().min(1),
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  linkedin: z
    .string()
    .url("Ingresa una URL válida")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Cuéntanos un poco más sobre ti (mínimo 10 caracteres)"),
  _hp: z.string().max(0),
});

type FormValues = z.infer<typeof schema>;

interface ApplicationFormProps {
  jobs: JobListing[];
  initialJobId?: string;
  onClose?: () => void;
}

const inputBase =
  "w-full rounded-lg border bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-colors duration-150 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

const inputNormal = "border-[var(--border)]";
const inputError =
  "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]";

export default function ApplicationForm({
  jobs,
  initialJobId = "",
  onClose,
}: ApplicationFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { jobId: initialJobId, _hp: "" },
  });

  useEffect(() => {
    if (initialJobId) setValue("jobId", initialJobId);
  }, [initialJobId, setValue]);

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server");
      setStatus("success");
      reset({ jobId: initialJobId, _hp: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="formulario-postulacion" className="rounded-2xl border border-[var(--border-accent)] bg-[var(--surface)] p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-[family-name:var(--font-jakarta-var)] text-xl font-bold text-[var(--text-primary)]">
            Formulario de postulación
          </h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            aria-label="Cerrar formulario"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {status === "success" ? (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <CheckCircle className="h-12 w-12 text-[var(--success)]" />
          <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-bold text-[var(--text-primary)]">
            ¡Postulación enviada!
          </h3>
          <p className="max-w-sm text-sm text-[var(--text-secondary)]">
            Gracias por tu interés. Revisaremos tu perfil y te contactaremos si hay un match.
          </p>
          <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
            Postularme a otra vacante
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          {/* Honeypot */}
          <input
            {...register("_hp")}
            type="text"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute h-0 w-0 overflow-hidden opacity-0"
          />

          {/* Job select */}
          <Field label="Vacante de interés" error={errors.jobId?.message}>
            <select
              {...register("jobId")}
              className={cn(inputBase, "appearance-none", errors.jobId ? inputError : inputNormal)}
            >
              <option value="">Selecciona una vacante</option>
              {jobs.map((j) => (
                <option key={j.id} value={j.id}>
                  {j.title}
                </option>
              ))}
            </select>
          </Field>

          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre completo" error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                placeholder="Juan Pérez"
                className={cn(inputBase, errors.name ? inputError : inputNormal)}
              />
            </Field>
            <Field label="Correo electrónico" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                placeholder="tu@correo.com"
                className={cn(inputBase, errors.email ? inputError : inputNormal)}
              />
            </Field>
          </div>

          {/* Phone + LinkedIn */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Teléfono / WhatsApp" error={errors.phone?.message}>
              <input
                {...register("phone")}
                type="tel"
                placeholder="+593 99 999 9999"
                className={cn(inputBase, errors.phone ? inputError : inputNormal)}
              />
            </Field>
            <Field label="LinkedIn (opcional)" error={errors.linkedin?.message}>
              <input
                {...register("linkedin")}
                type="url"
                placeholder="https://linkedin.com/in/tu-perfil"
                className={cn(inputBase, errors.linkedin ? inputError : inputNormal)}
              />
            </Field>
          </div>

          {/* Cover message */}
          <Field label="¿Por qué quieres unirte a AlphaCargo?" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Cuéntanos sobre tu experiencia, por qué te interesa esta vacante y qué valor aportarías al equipo."
              className={cn(inputBase, "resize-none", errors.message ? inputError : inputNormal)}
            />
          </Field>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-[var(--error)]/30 bg-[var(--error)]/10 px-4 py-3 text-sm text-[var(--error)]">
              <AlertCircle size={16} className="flex-shrink-0" />
              Ocurrió un error. Intenta nuevamente o envíanos un email directamente.
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "loading"}
            className="self-start"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar postulación"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[var(--text-primary)]">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-[var(--error)]">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}
