import prismadb from "@/lib/prismadb";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Category } from "@prisma/client";
import { ArticleForm } from "./components/article-form";

interface NewsIdPageProps {
  params: {
    articleId: string;
  };
}

const NewsIdPage = async ({ params }: NewsIdPageProps) => {
  //   const { data, fetchNextPage, isFetching } = useInfiniteQuery({
  //     "news",
  //     ({ pageParam = undefined }) =>
  //       getNewsData(searchParams.name, searchParams.categoryId, pageParam),

  //     {
  //       getNextPageParam: (lastPage, allPages) => lastPage.data.nextPage,
  //     }
  // });

  const article = null;
  const categories = await prismadb.articleCategory.findMany();

  return <ArticleForm initialData={article} categories={categories} />;
};

export default NewsIdPage;
