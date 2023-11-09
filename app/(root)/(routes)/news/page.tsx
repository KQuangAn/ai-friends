"use client";

import Categories from "@/components/categories";

import { NewsCard } from "@/components/newscard";
import { News } from "@/components/types/news";
import axios from "axios";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Category } from "@prisma/client";
import { getNewsData } from "@/app/actions/news";

interface NewsPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const NewsPage = ({ searchParams }: NewsPageProps) => {
  const date = new Date();
  const [news, setNews] = useState<News[]>();
  const [category, setCategory] = useState<Category[]>();
  //   const { data, fetchNextPage, isFetching } = useInfiniteQuery({
  //     "news",
  //     ({ pageParam = undefined }) =>
  //       getNewsData(searchParams.name, searchParams.categoryId, pageParam),

  //     {
  //       getNextPageParam: (lastPage, allPages) => lastPage.data.nextPage,
  //     }
  // });

  async function getCategory() {
    const categories = await prismadb.articleCategory.findMany();
    setCategory(categories);
  }
  getCategory();

  useEffect(() => {
    async function fetchData() {
      const news = await getNewsData(
        searchParams.name,
        searchParams.categoryId
      );
      setNews(news);
    }
    console.log(process.env.NEWS_DATA_API_KEY);
    fetchData();
  }, [searchParams]);

  return (
    <div>
      <SearchInput />
      {news ? (
        <div>
          <Categories data={category} />
          <NewsCard data={news} currentDateTime={date} />
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default NewsPage;
