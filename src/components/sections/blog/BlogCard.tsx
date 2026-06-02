import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { GlowCard } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <GlowCard className="flex h-full flex-col gap-0 overflow-hidden p-0">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-[var(--surface-elevated)]">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Tag className="h-12 w-12 text-[var(--text-muted)]" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge>{post.category}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
            {post.title}
          </h3>
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 border-t border-[var(--border)] pt-3 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}
