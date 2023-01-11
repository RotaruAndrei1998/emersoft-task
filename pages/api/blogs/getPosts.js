// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import blog from "../blog.json";

export default function handler(req, res) {
  let _posts = [];
  try {
    const { query } = req;
    const { page = 1, pageSize = 3, q, categoryFilter } = query;
    const { posts: allPosts } = blog;
    const position = (page - 1) * pageSize;

    if (q) {
    }

    if (categoryFilter) {
    }

    _posts = allPosts.slice(position, position + pageSize);
    res.status(200).json({ posts: _posts });
  } catch (e) {
    res.status(500).json({ e });
  }
}
