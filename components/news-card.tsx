"use client";

import Image from "next/image";
import Link from "next/link";
import { Companion } from "@prisma/client";
import { MessagesSquare } from "lucide-react";
import { useIntersection } from "@mantine/hooks";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { News } from "./types/types";
import { useRef } from "react";
import { FormItem } from "./ui/form";
import styles from "../app/styles/newscard.module.scss";
import { useGlobalContext } from "@/app/Context/store";
interface NewsProps {
  data: News[];
  currentDateTime: Date;
}

export const NewsCard = ({ data, currentDateTime }: NewsProps) => {
  const { news, setNews } = useGlobalContext();

  const lastPostRef = useRef<HTMLElement>;

  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  if (data.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyContainer__imageContainer}>
          <Image
            fill
            className={styles.emptyContainer__imageContainer__image}
            src="/empty.png"
            alt="Empty"
          />
        </div>
        <p className="text-sm text-muted-foreground">No News found.</p>
      </div>
    );
  }

  return (
    <div className={styles.cardContainer}>
      {data?.map((item) => {
        const pubDate = new Date(item.pubDate);

        //time diff in minutes
        const timeDifference = Math.floor(
          (+currentDateTime - +pubDate) / (1000 * 60)
        );

        const isMoreThanHour = timeDifference > 60;

        return (
          <Card key={item.article_id} className={styles.card}>
            <Link
              href={`/news/${item.article_id}`}
              onClick={() => setNews(item)}
            >
              <CardHeader>
                <div className={styles.card__imageContainer}>
                  {item.image_url ? (
                    <Image
                      src={item.image_url}
                      fill
                      unoptimized
                      className={styles.card__imageContainer__image}
                      alt="News image"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg"
                      fill
                      className={styles.card__imageContainer__image}
                      alt="News image"
                    />
                  )}
                </div>
              </CardHeader>
              <CardTitle>
                <h2 className={styles.card__title}>{item.title}</h2>
              </CardTitle>
              <CardContent>
                <div className={styles.card__content}>{item.description}</div>
              </CardContent>
              <CardFooter className={styles.card__footer}>
                <div className={styles.card__footer__time}>
                  {isMoreThanHour
                    ? `${Math.floor(timeDifference / 60)} ${
                        timeDifference < 120 ? "hour" : "hours"
                      } ago`
                    : `${timeDifference} ${
                        timeDifference === 1 ? "minute" : "minutes"
                      } ago`}
                </div>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
};
