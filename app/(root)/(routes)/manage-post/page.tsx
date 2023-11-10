import Categories from "@/components/categories";
import { Companions } from "@/components/companions";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { NewsCard } from "@/components/news-card";
interface ManagePostPageProps {
  searchParams: {
    categoryId: string;
    title: string;
  };
}

const ManagePostPage = async ({ searchParams }: ManagePostPageProps) => {
  const data = await prismadb.article.findMany({
    where: {
      category: searchParams.categoryId,
      title: {
        search: searchParams.title,
      },
    },
    orderBy: {
      pubDate: "desc",
    },
  });
  const categories = await prismadb.category.findMany();

  //transfer to posts card
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
      <NewsCard data={data} />
    </div>
  );
};

export default ManagePostPage;
