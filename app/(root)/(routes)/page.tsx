import { getNewsData } from "@/app/actions/news";
import Categories from "@/components/categories";
import { Companions } from "@/components/companions";
import { NewsCard } from "@/components/news-card";
import SearchInput from "@/components/search-input";
import prismadb from "@/lib/prismadb";
import Image from "next/image";
import styles from "../../styles/home.module.scss";
import { News } from "@/components/types/types";
interface RootPageProps {
  searchParams: {
    category: string;
    name: string;
    language: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const date = new Date();
  const first = await getNewsData(searchParams.name, searchParams.category);
  const second = await getNewsData(
    searchParams.name,
    searchParams.category,
    first.nextPage
  );

  const news: News[] = [];

  const categories = await prismadb.articleCategory.findMany();
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories returnName data={categories} />
      <NewsCard data={news} currentDateTime={date} />
      {/* <div className={styles.parallax}>
        <header className={styles.primary_header}>
          <div className={styles.wrapper}>
            <div className={styles.primary_header__inner}>
              <div className={styles.logo}>
                <Image src="assets/Logo.webp" alt="" fill />
              </div>
              <nav className={styles.primary_nav}>
                <ul role="list">
                  <li>
                    <a href="#">Why join us</a>
                  </li>
                  <li>
                    <a href="#">The founders</a>
                  </li>
                  <li>
                    <a href="#">Beta info</a>
                  </li>
                </ul>
              </nav>
              <div className={styles.flex_group} aria-label="social links">
                <a href="#">X</a>
                <a href="#">IG</a>
                <a href="#">YT</a>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.hero}>
          <div className={styles.wrapper}>
            <h1 className={styles.hero__title}>
              <span>Gear up!</span> We're going monster hunting!
            </h1>
            <button className={styles.button}>Sign up for beta</button>
          </div>
        </div>

        <Image
          fill
          className={styles.parallax__bg}
          src="assets/bg.jpg"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__dust}
          src="assets/dust.webp"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__foreground_back}
          src="assets/foreground-back.webp"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__foreground_front}
          src="assets/foreground-front.webp"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__jax}
          src="assets/jax.webp"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__luna}
          src="assets/luna.webp"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__manny}
          src="assets/manny.webp"
          alt=""
        />
        <Image
          fill
          className={styles.parallax__rays}
          src="assets/rays.webp"
          alt=""
        />
      </div>

      <main className={styles.main_content}>
        <div className={styles.wrapper}>
          <p>
            Libero soluta quos illo, quisquam doloribus architecto reiciendis
            consectetur doloremque similique provident cumque sunt totam nisi
            quam, ab earum veniam fugiat! Consectetur, doloremque? Corrupti
            quibusdam explicabo quod. Est, sint voluptatum.
          </p>
        </div>
      </main> */}
    </div>
  );
};

export default RootPage;
