"use server";

import { NewsResponse } from "@/components/types/types";
import { Category, PrismaPromise } from "@prisma/client";
import axios from "axios";
import prismadb from "@/lib/prismadb";

export async function getNewsData(
  searchParams?: string,
  category?: string,
  language?:string,
  nextPage?: string
): Promise<NewsResponse| []> {

  try {
    const baseUrl = "https://newsdata.io/api/1/news";

    const queryParams = [];

    if (searchParams) {
      queryParams.push(`q=${searchParams}`);
    }

    if (category) {
      queryParams.push(`category=${category}`);
    }
    if (language) {
      queryParams.push(`language=${language}`);
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
        ? `?${queryParams.join("&")}`
        : "?language=en");

    const res = await axios.get(finalUrl, { headers });

    return res?.data;
  } catch (error) {
    if (error.response) {
      // Axios error with response received
      const statusCode = error.response.status;
      const data = error.response.data;
      console.error(`HTTP error with status code ${statusCode}:`, data);
      return { error: `HTTP error with status code ${statusCode}`, data };
    } else {
      // Network error, no response received
      console.error("Network error:", error.message);
      return [];
    }
  }
}

// export async function getCategory(): PrismaPromise<Category[]> {
//   "use server";
//   try {
//     const categories = await prismadb.articleCategory.findMany();

//     return categories;
//   } catch (error) {
//     console.log(error);
//   }
//   return [];
// }
