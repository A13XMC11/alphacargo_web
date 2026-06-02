"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  service: z.enum(
    [
      "transporte-aereo",
      "transporte-maritimo",
      "transporte-terrestre",
      "consolidacion",
      "courier",
      "agencia-aduanas",
      "bodegaje",
      "seguro-carga",
      "otro",
    ],
    { error: "Selecciona un servicio" }
  ),
  message: z.string().min(10, "Escribe al menos 10 caracteres"),
  _hp: z.string().max(0),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  { value: "transporte-aereo", label: "Transporte Aéreo" },
  { value: "transporte-maritimo", label: "Transporte Marítimo" },
  { value: "transporte-terrestre", label: "Transporte Terrestre" },
  { value: "consolidacion", label: "Consolidación de Carga" },
  { value: "courier", label: "Courier Internacional" },
  { value: "agencia-aduanas", label: "Agencia de Aduanas" },
  { value: "bodegaje", label: "Bodegaje y Distribución" },
  { value: "seguro-carga", label: "Seguro de Carga" },
  { value: "otro", label: "Otro / No sé aún" },
];

const inputBase =
  "w-full rounded-lg border bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-colors duration-150 focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

const inputNormal = "border-[var(--border)]";
const inputError = "border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: "" },
  });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-16 text-center">
        <CheckCircle className="h-12 w-12 text-[var(--success)]" />
        <h3 className="font-[family-name:var(--font-jakarta-var)] text-xl font-bold text-[var(--text-primary)]">
          ¡Mensaje enviado!
        </h3>
        <p className="max-w-sm text-sm text-[var(--text-secondary)]">
          Gracias por contactarnos. Te responderemos en menos de 2 horas en días hábiles.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from real users */}
      <input
        {...register("_hp")}
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

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
            placeholder="tu@empresa.com"
            className={cn(inputBase, errors.email ? inputError : inputNormal)}
          />
        </Field>
      </div>

      {/* Phone + Service */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Teléfono / WhatsApp" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+593 99 999 9999"
            className={cn(inputBase, errors.phone ? inputError : inputNormal)}
          />
        </Field>
        <Field label="Servicio de interés" error={errors.service?.message}>
          <select
            {...register("service")}
            className={cn(inputBase, "appearance-none", errors.service ? inputError : inputNormal)}
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Mensaje" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Cuéntanos sobre tu carga: origen, destino, peso aproximado y cualquier detalle relevante."
          className={cn(inputBase, "resize-none", errors.message ? inputError : inputNormal)}
        />
      </Field>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-[var(--error)]/30 bg-[var(--error)]/10 px-4 py-3 text-sm text-[var(--error)]">
          <AlertCircle size={16} className="flex-shrink-0" />
          Ocurrió un error al enviar. Intenta nuevamente o escríbenos por WhatsApp.
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
          "Enviar mensaje"
        )}
      </Button>
    </form>
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
