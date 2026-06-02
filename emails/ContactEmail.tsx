import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";

const SERVICE_LABELS: Record<string, string> = {
  "transporte-aereo": "Transporte Aéreo",
  "transporte-maritimo": "Transporte Marítimo",
  "transporte-terrestre": "Transporte Terrestre",
  consolidacion: "Consolidación de Carga",
  courier: "Courier Internacional",
  "agencia-aduanas": "Agencia de Aduanas",
  bodegaje: "Bodegaje y Distribución",
  "seguro-carga": "Seguro de Carga",
  otro: "Otro",
};

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function ContactEmail({ name, email, phone, service, message }: ContactEmailProps) {
  const serviceLabel = SERVICE_LABELS[service] ?? service;

  return (
    <Html lang="es">
      <Head />
      <Preview>Nuevo mensaje de contacto de {name}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>AlphaCargo</Heading>
            <Text style={headerSubtitle}>Nuevo mensaje de contacto</Text>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>
              Datos del contacto
            </Heading>

            <Row style={fieldRow}>
              <Column style={fieldLabel}>Nombre</Column>
              <Column style={fieldValue}>{name}</Column>
            </Row>
            <Hr style={divider} />

            <Row style={fieldRow}>
              <Column style={fieldLabel}>Email</Column>
              <Column style={fieldValue}>{email}</Column>
            </Row>
            <Hr style={divider} />

            <Row style={fieldRow}>
              <Column style={fieldLabel}>Teléfono</Column>
              <Column style={fieldValue}>{phone}</Column>
            </Row>
            <Hr style={divider} />

            <Row style={fieldRow}>
              <Column style={fieldLabel}>Servicio</Column>
              <Column style={fieldValue}>{serviceLabel}</Column>
            </Row>

            <Section style={messageBox}>
              <Text style={messageLabel}>Mensaje</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Este correo fue generado automáticamente desde el formulario de contacto de alphacargo.com.ec
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactEmail;

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

const sectionTitle: React.CSSProperties = {
  color: "#1a202c",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 20px",
};

const fieldRow: React.CSSProperties = {
  padding: "10px 0",
};

const fieldLabel: React.CSSProperties = {
  color: "#718096",
  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  width: "120px",
};

const fieldValue: React.CSSProperties = {
  color: "#2d3748",
  fontSize: "15px",
};

const divider: React.CSSProperties = {
  borderColor: "#e2e8f0",
  margin: "0",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "#f7fafc",
  borderLeft: "3px solid #ff5500",
  borderRadius: "0 6px 6px 0",
  marginTop: "24px",
  padding: "16px 20px",
};

const messageLabel: React.CSSProperties = {
  color: "#718096",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "0.5px",
  margin: "0 0 8px",
  textTransform: "uppercase",
};

const messageText: React.CSSProperties = {
  color: "#2d3748",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const footer: React.CSSProperties = {
  backgroundColor: "#f7fafc",
  borderTop: "1px solid #e2e8f0",
  padding: "20px 40px",
};

const footerText: React.CSSProperties = {
  color: "#a0aec0",
  fontSize: "12px",
  margin: 0,
  textAlign: "center",
};
