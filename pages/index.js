import Head from "next/head";
import { Inter } from "@next/font/google";
import Blog from "components/blog";
import PaginationProvider from "../context/pagination/PaginationProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts, searchParams, totalPages, filterOptions }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Task for EmerSoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaginationProvider initialPosts={posts} searchParams={searchParams} initialTotalPages={totalPages}>
        {(posts) => <Blog posts={posts} filterOptions={filterOptions} />}
      </PaginationProvider>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const url = req.headers["host"].includes("localhost")
    ? "http://" + req.headers["host"] + "/api/blog/getPosts"
    : "https://" + req.headers["host"] + "/api/blog/getPosts";
  const result = await fetch(url);
  const pageProps = await result.json();
  return { props: { ...pageProps } };
}
