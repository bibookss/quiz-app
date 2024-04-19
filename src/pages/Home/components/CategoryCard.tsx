interface CategoryCardProps {
  title: string;
}

const CategoryCard = ({ title }: CategoryCardProps) => {
  return (
    <div className="w-full rounded-xl shadow-xl py-5">
      <div className="flex justify-center">
        <span className="text-medium cart-light text-base">{title}</span>
      </div>
    </div>
  );
}

export default CategoryCard;