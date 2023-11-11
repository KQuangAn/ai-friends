
import { NextResponse } from "next/server";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {

  try {
    const language = await prisma?.articleCountry.findMany()
    
    return language;
 

  } catch (error) {
    console.log("[Lang_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};