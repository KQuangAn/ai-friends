export type News = {
  article_id: string;
  title: string;
  link: string;
  keywords?: string[]; 
  creator?: string; 
  video_url?:  string; 
  description: string;
  content: string;
  pubDate: Date;
  image_url?:  string; 
  source_id: string;
  source_priority: number;
  country?: string[];
  category?: string[]; 
  language: string;
};
