
export type Category = 'tech' | 'growth' | 'affiliate';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  author: string;
  imageUrl: string;
  readTime: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
