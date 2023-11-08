"use server";

import { News } from "@/components/types/news";
import axios from "axios";

export async function getNewsData(
  searchParams?: string,
  category?: string
): Promise<News[]> {
  "use server";
  try {
    const baseUrl = "https://newsdata.io/api/1/news";

    const queryParams = [];

    if (searchParams) {
      queryParams.push(`q=${searchParams}`);
    }

    if (category) {
      queryParams.push(`category=${category}`);
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
