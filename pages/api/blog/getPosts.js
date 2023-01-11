// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import blog from "../blog.json";

export default function handler(req, res) {
  let _posts = [];
  try {
    const { query } = req;
    const { page = 1, pageSize = 3, q, categoryFilter } = query;
    const { posts: allPosts, categories } = blog;
    const position = (page - 1) * pageSize;
    const totalPages = Math.floor(allPosts?.length / pageSize);
    if (q) {
    }

    if (categoryFilter) {
    }

    _posts = allPosts.slice(position, +position + +pageSize);
    _posts = _posts.map((post) => ({
      ...post,
      categories: post?.categories?.map((id) =>
        categories?.find((category) => category?.id === id)
      ),
    }));

    res.status(200).json({
      posts: _posts,
      searchParams: { page, pageSize, q, categoryFilter },
      totalPages,
    });
  } catch (e) {
    res.status(500).json({ e });
  }
}
