import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactConfirmationProps {
  name: string;
}

export function ContactConfirmation({ name }: ContactConfirmationProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Hemos recibido tu mensaje — AlphaCargo te contactará pronto</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>AlphaCargo</Heading>
            <Text style={headerSubtitle}>Logística Internacional</Text>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={greeting}>
              Hola, {name}
            </Heading>

            <Text style={paragraph}>
              Gracias por contactarnos. Hemos recibido tu mensaje y un miembro de nuestro equipo se comunicará
              contigo en un plazo de <strong>24 a 48 horas hábiles</strong>.
            </Text>

            <Text style={paragraph}>
              Si tu consulta es urgente, puedes comunicarte directamente con nosotros a través de WhatsApp o
              llamarnos a nuestras líneas de atención.
            </Text>

            <Section style={infoBox}>
              <Text style={infoTitle}>¿Qué puedes esperar?</Text>
              <Text style={infoItem}>• Revisión detallada de tus necesidades de importación</Text>
              <Text style={infoItem}>• Cotización personalizada sin costo</Text>
              <Text style={infoItem}>• Asesoría sobre el mejor servicio para tu carga</Text>
            </Section>
          </Section>

          <Hr style={divider} />

          <Section style={contactSection}>
            <Text style={contactTitle}>Nuestros canales de atención</Text>
            <Text style={contactItem}>
              <strong>WhatsApp:</strong> +593 99 999 9999
            </Text>
            <Text style={contactItem}>
              <strong>Email:</strong> info@alphacargo.com.ec
            </Text>
            <Text style={contactItem}>
              <strong>Web:</strong> alphacargo.com.ec
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} AlphaCargo. Todos los derechos reservados.
            </Text>
            <Text style={footerText}>Guayaquil, Ecuador</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactConfirmation;

const body: React.CSSProperties = {
  backgroundColor: "#f4f6f9",
  fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  margin: 0,
  padding: "32px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "0 auto",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

const header: React.CSSProperties = {
  backgroundColor: "#0a0f1e",
  padding: "32px 40px",
  textAlign: "center",
};

const headerTitle: React.CSSProperties = {
  color: "#ff5500",
  fontSize: "28px",
  fontWeight: "700",
  letterSpacing: "2px",
  margin: "0 0 4px",
  textTransform: "uppercase",
};

const headerSubtitle: React.CSSProperties = {
  color: "#a0aec0",
  fontSize: "14px",
  margin: 0,
};

const content: React.CSSProperties = {
  padding: "32px 40px",
};

const greeting: React.CSSProperties = {
  color: "#1a202c",
  fontSize: "22px",
  fontWeight: "600",
  margin: "0 0 20px",
};

const paragraph: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 0 16px",
};

const infoBox: React.CSSProperties = {
  backgroundColor: "#fff8f5",
  border: "1px solid #ffe0d0",
  borderLeft: "4px solid #ff5500",
  borderRadius: "0 6px 6px 0",
  marginTop: "24px",
  padding: "16px 20px",
};

const infoTitle: React.CSSProperties = {
  color: "#ff5500",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "0.5px",
  margin: "0 0 10px",
  textTransform: "uppercase",
};

const infoItem: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 4px",
};

const divider: React.CSSProperties = {
  borderColor: "#e2e8f0",
  margin: "0 40px",
};

const contactSection: React.CSSProperties = {
  padding: "24px 40px",
};

const contactTitle: React.CSSProperties = {
  color: "#718096",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.8px",
  margin: "0 0 12px",
  textTransform: "uppercase",
};

const contactItem: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 6px",
};

const footer: React.CSSProperties = {
  backgroundColor: "#f7fafc",
  borderTop: "1px solid #e2e8f0",
  padding: "20px 40px",
};

const footerText: React.CSSProperties = {
  color: "#a0aec0",
  fontSize: "12px",
  margin: "0 0 4px",
  textAlign: "center",
};
