import { z } from "zod";
import { Resend } from "resend";
import { ContactEmail } from "../../../../emails/ContactEmail";
import { ContactConfirmation } from "../../../../emails/ContactConfirmation";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  service: z.enum([
    "transporte-aereo",
    "transporte-maritimo",
    "transporte-terrestre",
    "consolidacion",
    "courier",
    "agencia-aduanas",
    "bodegaje",
    "seguro-carga",
    "otro",
  ]),
  message: z.string().min(10).max(2000),
  _hp: z.string().max(0),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { success: false, error: "Datos inválidos. Revisa los campos e intenta nuevamente." },
      { status: 422 }
    );
  }

  const { _hp: _honeypot, ...data } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = "AlphaCargo <noreply@alphacargo.com.ec>";
    const teamEmail = process.env.CONTACT_EMAIL ?? "info@alphacargo.com.ec";

    await Promise.allSettled([
      resend.emails.send({
        from,
        to: teamEmail,
        replyTo: data.email,
        subject: `Nuevo mensaje de contacto — ${data.name}`,
        react: ContactEmail(data),
      }),
      resend.emails.send({
        from,
        to: data.email,
        subject: "Recibimos tu mensaje — AlphaCargo",
        react: ContactConfirmation({ name: data.name }),
      }),
    ]);
  }

  return Response.json({ success: true });
}
