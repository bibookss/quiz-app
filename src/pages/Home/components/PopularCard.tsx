interface PopularCardProps {
  title: string;
  tags?: string[];
  isNew?: boolean;
}

const CategoryCard = ({ title, tags, isNew }: PopularCardProps) => {
  return (
    <div className="card-body shadow-xl rounded-xl">
      <h2 className="card-title">
        {title}
        {isNew && <div className="badge badge-secondary">NEW</div>}
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        {tags && tags.map((tag, index) => (
          <span key={index} className="badge badge-outline badge-primary text-sm">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;