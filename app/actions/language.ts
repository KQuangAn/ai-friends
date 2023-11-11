"use server";

import { ComboBoxData } from "@/components/combo-box";
import prismadb from "@/lib/prismadb";
import { ArticleCountry, PrismaPromise } from "@prisma/client";

export async function getLanguage():Promise<ComboBoxData[]> {
  try {
    const languages:ArticleCountry[]|undefined = await prismadb.articleCountry.findMany()

    // Map the data to ComboBoxData format
     const comboBoxData = languages?.map((language) => ({
      value: language.id,
      label: language.name,
     }));

    return comboBoxData;
 
  } catch (error) {
    console.log(error);
  }
  return [];
}
