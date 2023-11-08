import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import axios from "axios";
export async function GET(req: Request) {

  try {
    const body = await req.json();
    const user = await currentUser();
    console.log(currentUser);
    if (!user || !user.id || !user.firstName) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    // const isPro = await checkSubscription();

    // if (!isPro) {
    //   return new NextResponse("Pro subscription required", { status: 403 });
    // }

    const news = await axios.get(`/newsdata.io/api/1/news?apikey=${process.env.NEWS_DATA_API_KEY}`);

    return NextResponse.json(news);
  } catch (error) {
    console.log("[NEWS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};