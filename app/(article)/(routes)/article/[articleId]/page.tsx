import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { ArticleForm } from "./components/article-form";

interface ArticleIdPageProps {
  params: {
    chatId: string;
  };
}

const ArticleIdPage = async ({ params }: ArticleIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const article = await prismadb.article.findMany({
    where: {
      author_id: userId,
    },
    orderBy: {
      pubDate: "desc",
    },
  });
  const categories = await prismadb.articleCategory.findMany();

  return <ArticleForm initialData={article} categories={categories} />;
};

export default ArticleIdPage;
