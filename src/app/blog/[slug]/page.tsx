import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import RelatedPosts from "@/components/sections/blog/RelatedPosts";
import Badge from "@/components/ui/Badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphacargo-ec.com";
  const ogImage = post.image ?? "/og.png";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphacargo-ec.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ?? `${siteUrl}/og.png`,
    datePublished: post.date,
    dateModified: post.date,
    url: `${siteUrl}/blog/${slug}`,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "AlphaCargo",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${slug}` },
  };

  return (
    <main className="mx-auto max-w-screen-xl px-6 pt-32 pb-20 md:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        {/* Article */}
        <article>
          {/* Header */}
          <header className="mb-10 flex flex-col gap-4 border-b border-[var(--border)] pb-8">
            <Badge className="self-start">{post.category}</Badge>
            <h1 className="font-[family-name:var(--font-jakarta-var)] text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("es-CO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* MDX content */}
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start">
          <RelatedPosts posts={related} />

          {/* CTA card */}
          <div className="rounded-xl border border-[var(--border-accent)] bg-[var(--surface)] p-5">
            <p className="mb-1 text-sm font-semibold text-[var(--text-primary)]">
              ¿Listo para importar?
            </p>
            <p className="mb-4 text-xs leading-relaxed text-[var(--text-secondary)]">
              Nuestros expertos te asesoran sin costo.
            </p>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573001234567"}?text=${encodeURIComponent(`Hola, leí "${post.title}" y me gustaría recibir asesoría.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-[var(--accent)] py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
