const AuthorSection = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        className="w-10 h-10 rounded-full"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="font-medium">
        <div className="font-bold text-black">Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Mar 16, 2020 - 6 min read
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
