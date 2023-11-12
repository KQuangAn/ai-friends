"use client";
import { useGlobalContext } from "@/app/Context/store";
import { Article, Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface NewsDetailPageProps {
  params: {
    articleId: string;
  };
}

const NewsDetailPage = (params: NewsDetailPageProps) => {
  const { news } = useGlobalContext();

  if (!news) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" src="/empty.jpg" alt="Empty" />
        </div>
        <p className="text-sm text-muted-foreground">Not found.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center ">
      <div className="text-lg">
        <Link href={`/?category=${news?.category}`}>{news?.category}</Link>
      </div>
      <h1 className="text-5xl ">{news?.title}</h1>
      <a href={news?.link}>Link to original post</a>

      <div>{news?.pubDate.toString()}</div>
      <div className="relative w-full h-full">
        {news?.image_url ? (
          <Image
            src={news?.image_url}
            fill
            className="rounded-xl object-cover"
            alt="Character"
          />
        ) : (
          <Image fill className="grayscale" src="/empty.jpg" alt="Empty" />
        )}
      </div>
      <div>{news?.content}</div>
      <div>{news?.description}</div>
      <div>{news?.creator}</div>
    </div>
  );
};

export default NewsDetailPage;
