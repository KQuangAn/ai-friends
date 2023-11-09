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

const NewsPage = ({ searchParams }: NewsPageProps) => {
  const date = new Date();
  const [news, setNews] = useState<News[]>();
  const [category, setCategory] = useState<Category[]>();

  useEffect(() => {
    async function fetchData() {
      const news = await getNewsData(
        searchParams.name,
        searchParams.categoryId
      );
    }

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    async function getCategory() {
      const categories = await prismadb.articleCategory.findMany();
      setCategory(categories);
    }

    getCategory();
  }, []);

  return (
    <div>
      <SearchInput />
      {news && category ? (
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
