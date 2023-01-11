import Head from "next/head";
import { Inter } from "@next/font/google";
import Blog from "components/blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Task for EmerSoft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog posts={posts} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const url = req.headers["host"].includes("localhost")
    ? "http://" + req.headers["host"] + "/api/blogs/getPosts"
    : "https://" + req.headers["host"] + "/api/blogs/getPosts";
  const result = await fetch(url);
  const pageProps = await result.json();
  return { props: { ...pageProps } };
}
