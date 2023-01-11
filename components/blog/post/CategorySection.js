const CategorySection = ({ categories }) => {
  return (
    <div>
      {categories?.map((category) => (
        <button className="text-blue-700 font-semibold mr-2.5">
          {category?.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;
