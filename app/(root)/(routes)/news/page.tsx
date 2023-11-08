import prismadb from "@/lib/prismadb";

interface NewsPageProps {
  params: {
    NewsId: string;
  };
}

const NewsPage = async ({ params }: NewsPageProps) => {
  return <div>news page</div>;
};

export default NewsPage;
