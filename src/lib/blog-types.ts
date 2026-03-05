export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  ogImage?: string;
  published: boolean;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}
