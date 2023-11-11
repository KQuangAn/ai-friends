import Categories from "@/components/categories";
import { Companions } from "@/components/companions";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { NewsCard } from "@/components/news-card";
import { auth, redirectToSignIn } from "@clerk/nextjs";
interface ManagePostPageProps {
  searchParams: {
    categoryId: string;
    title: string;
  };
}

const ManagePostPage = async ({ searchParams }: ManagePostPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }
  const data = await prismadb.article.findMany({
    where: {
      author_id: userId,
    },
    orderBy: {
      pubDate: "desc",
    },
  });
  const categories = await prismadb.articleCategory.findMany();

  //transfer to posts card
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
};

export default ManagePostPage;
