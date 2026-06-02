import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/content/servicios";
import ServiceDetail from "@/components/sections/servicios/ServiceDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} Internacional desde Ecuador`,
    description: service.shortDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphacargo-ec.com"}/servicios/${slug}`,
    },
    openGraph: {
      title: `${service.title} | AlphaCargo`,
      description: service.shortDescription,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.shortDescription,
      images: [service.image],
    },
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
