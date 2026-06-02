import { z } from "zod";

const applySchema = z.object({
  jobId: z.string().min(1).max(100),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  linkedin: z.string().url().optional().or(z.literal("")),
  message: z.string().min(10).max(3000),
  _hp: z.string().max(0),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const result = applySchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { success: false, error: "Datos inválidos. Revisa los campos e intenta nuevamente." },
      { status: 422 }
    );
  }

  const { _hp: _honeypot, ...data } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "AlphaCargo Web <noreply@alphacargo.com.ec>",
        to: process.env.HR_EMAIL ?? "rrhh@alphacargo.com.ec",
        subject: `Nueva postulación — ${data.jobId} — ${data.name}`,
        text: [
          `Vacante: ${data.jobId}`,
          `Nombre: ${data.name}`,
          `Email: ${data.email}`,
          `Teléfono: ${data.phone}`,
          data.linkedin ? `LinkedIn: ${data.linkedin}` : null,
          `Mensaje:\n${data.message}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch {
      // Email sending is best-effort; don't fail the request
    }
  }

  return Response.json({ success: true });
}
