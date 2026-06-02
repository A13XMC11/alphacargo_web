import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { BlogPost } from "@/types/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <aside className="flex flex-col gap-4">
      <h3 className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold text-[var(--text-primary)]">
        Artículos relacionados
      </h3>
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-200 hover:border-[var(--border-accent)] hover:bg-[var(--surface-elevated)]"
            >
              <Badge className="self-start">{post.category}</Badge>
              <p className="text-sm font-medium leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                {post.title}
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
