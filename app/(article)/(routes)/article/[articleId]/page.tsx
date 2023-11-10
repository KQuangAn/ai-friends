import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

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

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.chatId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
        where: {
          userId,
        },
      },
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  if (!companion) {
    return redirect("/");
  }

  return <ArticleClient companion={companion} />;
};

export default ArticleIdPage;
