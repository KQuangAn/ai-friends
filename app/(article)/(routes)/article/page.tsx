import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

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

  return <div>article page</div>;
};

export default ArticlePage;
