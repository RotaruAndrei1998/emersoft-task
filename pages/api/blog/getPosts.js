// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import blog from "../blog.json";

export default function handler(req, res) {
  try {
    const { query } = req;
    const { page = 1, pageSize = 3, q, categoryFilter } = query;
    const { posts: allPosts, categories } = blog;
    const position = (page - 1) * pageSize;
    let _posts = allPosts;
    if (q) {
      _posts = _posts.filter((post) =>
        post?.title?.toLowerCase()?.includes(q.toLowerCase())
      );
    }

    if (categoryFilter) {
      _posts = _posts.filter((post) =>
        post?.categories?.some((category) => categoryFilter?.includes(category))
      );
    }

    const totalPages = Math.ceil(_posts?.length / pageSize);
    _posts = _posts.slice(position, +position + +pageSize);
    _posts = _posts.map((post) => ({
      ...post,
      categories: post?.categories?.map((id) =>
        categories?.find((category) => category?.id === id)
      ),
    }));

    res.status(200).json({
      posts: _posts,
      searchParams: { page, pageSize, q, categoryFilter: categoryFilter ?? [] },
      totalPages,
      filterOptions: categories,
    });
  } catch (e) {
    res.status(500).json({ e });
  }
}
