import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { NewsCard } from "@/components/news-card";

const ArticlePage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const article = await prismadb.article.findMany({
    where: {
      author_id: userId,
    },
  });

  return <div>All of your article</div>;
  // <NewsCard data={article} currentDateTime={ } />;
};

export default ArticlePage;
