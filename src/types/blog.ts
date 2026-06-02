export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  image?: string;
  tags: string[];
  content: string;
}

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  tags: string[];
}
