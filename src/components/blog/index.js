import CardsList from "./posts-list";
import Card from "./post";

const Blog = ({ posts }) => {
  return (
    <div>
      title
      <CardsList>
        {posts.map((card) => (
          <Card key={card?.id} />
        ))}
      </CardsList>
    </div>
  );
};

export default Blog;
