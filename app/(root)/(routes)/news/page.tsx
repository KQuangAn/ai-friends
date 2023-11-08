import Categories from "@/components/categories";

import { NewsCard } from "@/components/newscard";
import { News } from "@/components/types/news";
import axios from "axios";
import { getNewsData } from "@/app/actions/news";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";

interface NewsPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const NewsPage = async ({ searchParams }: NewsPageProps) => {
  const date = new Date();

  const news = await getNewsData();
  const categories = await prismadb.articleCategory.findMany();

  return (
    <div>
      <SearchInput />

      <Categories data={categories} />
      <NewsCard data={news} currentDateTime={date} />
    </div>
  );
};

export default NewsPage;
