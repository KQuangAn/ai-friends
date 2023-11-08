import Image from "next/image";
import Link from "next/link";
import { Companion } from "@prisma/client";
import { MessagesSquare } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { News } from "./types/news";

interface NewsProps {
  data: News[];
  currentDateTime: Date;
}

export const NewsCard = ({ data, currentDateTime }: NewsProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" src="/empty.png" alt="Empty" />
        </div>
        <p className="text-sm text-muted-foreground">No News found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-10 m-2">
      {data.map((item) => {
        const pubDate = new Date(item.pubDate);

        //time diff in minutes
        const timeDifference = Math.floor(
          (currentDateTime - pubDate) / (1000 * 60)
        );

        const isMoreThanHour = timeDifference > 60;

        return (
          <Card
            key={item.article_id}
            className="
           flex flex-col justify-center bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0"
          >
            <Link href={`${item.link}`}>
              <CardHeader>
                <div className="relative w-full h-56">
                  {item.image_url ? (
                    <Image
                      src={item.image_url}
                      fill
                      unoptimized
                      className="rounded-md object-cover"
                      alt="News image"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg"
                      fill
                      className="rounded-md object-cover"
                      alt="News image"
                    />
                  )}
                </div>
              </CardHeader>
              <CardTitle>
                <h2 className="text-md px-5 font-bold w-full line-clamp-2 mb-5">
                  {item.title}
                </h2>
              </CardTitle>
              <CardContent>
                <p className="text-sm h-24 w-full line-clamp-3	">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end text-xs text-muted-foreground h-8">
                <p className="lowercase text-xs">
                  {isMoreThanHour
                    ? `${Math.floor(timeDifference / 60)} ${
                        timeDifference < 120 ? "hour" : "hours"
                      } ago`
                    : `${timeDifference} ${
                        timeDifference === 1 ? "minute" : "minutes"
                      } ago`}
                </p>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
