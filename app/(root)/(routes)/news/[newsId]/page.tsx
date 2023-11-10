"use client";
import { useGlobalContext } from "@/app/Context/store";
import { Article, Category } from "@prisma/client";

interface NewsDetailPageProps {
  articleId: string;
}

const NewsDetailPage = (articleId: NewsDetailPageProps) => {
  const { news } = useGlobalContext();

  return <div>{news.title}</div>;
};

export default NewsDetailPage;
