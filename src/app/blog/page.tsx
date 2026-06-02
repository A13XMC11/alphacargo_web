import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/sections/blog/BlogCard";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog de Importaciones y Logística Internacional",
  description:
    "Guías prácticas, noticias y consejos sobre importaciones, logística internacional y comercio exterior desde Ecuador. Aprende a importar sin errores.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = ["Todas", ...new Set(posts.map((p) => p.category))];

  return (
    <>
      <PageHero
        badge="Blog"
        title="Aprende sobre importaciones"
        subtitle="Guías prácticas, noticias del sector y consejos de nuestros expertos en logística internacional."
        image="/images/hero/blog.jpg"
        imageAlt="Blog de importaciones AlphaCargo"
      />

      <section className="mx-auto max-w-screen-xl px-6 py-20 md:px-12">
        {/* Category chips */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--text-secondary)]"
            >
              {cat}
            </span>
          ))}
        </div>

        {posts.length === 0 ? (
          <div className="py-24 text-center text-[var(--text-muted)]">
            Próximamente nuevos artículos.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-screen-xl px-6 py-16 text-center md:px-12">
          <SectionHeading
            badge="¿Listo para importar?"
            title="Habla con nuestros expertos"
            subtitle="Resolvemos tus dudas sin costo y te ayudamos a planear tu primera o próxima importación."
            centered
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573001234567"}?text=${encodeURIComponent("Hola, leí el blog de AlphaCargo y me gustaría recibir asesoría sobre importaciones.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
