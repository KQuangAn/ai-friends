"use server";

import prismadb from "@/lib/prismadb";
import { PrismaPromise } from "@prisma/client";

export async function getLanguage(): PrismaPromise<Category[]> {
  try {
    const categories = await prismadb.articleCategory.findMany();

    return categories;
  } catch (error) {
    console.log(error);
  }
  return [];
}
