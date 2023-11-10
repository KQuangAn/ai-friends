"use server";

import { News } from "@/components/types/news";
import { Category, PrismaPromise } from "@prisma/client";
import axios from "axios";
import prismadb from "@/lib/prismadb";

export async function getNewsData(
  searchParams?: string,
  category?: string,
  nextPage?: string
): Promise<News[]> {
  try {
    const baseUrl = "https://newsdata.io/api/1/news";

    const queryParams = [];

    if (searchParams) {
      queryParams.push(`q=${searchParams}`);
    }

    if (category) {
      queryParams.push(`category=${category}`);
    }

    if (nextPage) {
      queryParams.push(`page=${nextPage}`);
    }

    const headers = {
      "X-ACCESS-KEY": process.env.NEWS_DATA_API_KEY,
    };

    const finalUrl =
      baseUrl +
      (queryParams.length > 0
        ? `?${queryParams.join("&")}&language=en`
        : "?language=en");

    const res = await axios.get(finalUrl, { headers });

    return res?.data.results;
  } catch (error) {
    console.log(error);
  }
  return [];
}

export async function getCategory(): PrismaPromise<Category[]> {
  "use server";
  try {
    const categories = await prismadb.articleCategory.findMany();

    return categories;
  } catch (error) {
    console.log(error);
  }
  return [];
}
