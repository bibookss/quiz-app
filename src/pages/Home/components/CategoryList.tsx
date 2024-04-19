import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const categories = ["Computer Science", "Mathematics", "Biology", "Physics", "Chemistry", "History"];
  return (
    <div className="grid gap-4 grid-cols-2 place-items-center">
      {categories.map((category, index) => (
        <CategoryCard key={index} title={category} />
      ))}
    </div>
  );
}

export default CategoryList;