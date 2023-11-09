import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(req: Request) {

  try {
    const body = await req.json();
    const user = await currentUser();
    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    // const isPro = await checkSubscription();

    // if (!isPro) {
    //   return new NextResponse("Pro subscription required", { status: 403 });
    // }
    //https://newsdata.io/api/1/archive?apikey
    //=pub_324557ebcd7c2639d470430dcb6062837647e&q=example& language=en & from_date=2023-01 - 19 & to_date=2023-01 - 25    const news = await axios.get(`/newsdata.io/api/1/news?apikey=${process.env.NEWS_DATA_API_KEY}&language=en`);
    //This request will search for English language news articles published between August 26, 2022 and January 25, 2023 that contain the keyword "pizza".
        const news = await axios.get(`/newsdata.io/api/1/news?apikey=${process.env.NEWS_DATA_API_KEY}&language=en`)
    
      return NextResponse.json(news);
  } catch (error) {
    console.log("[NEWS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};