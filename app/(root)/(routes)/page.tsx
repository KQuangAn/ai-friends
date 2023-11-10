import { getNewsData } from "@/app/actions/news";
import Categories from "@/components/categories";
import { Companions } from "@/components/companions";
import { NewsCard } from "@/components/newscard";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";

interface RootPageProps {
  searchParams: {
    category: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const date = new Date();
  const news = await getNewsData(searchParams.name, searchParams.category);
  const categories = await prismadb.articleCategory.findMany();
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories returnName data={categories} />
      <NewsCard data={news} currentDateTime={date} />
    </div>
  );
};

export default RootPage;
