import PopularCard from "./PopularCard";

const PopularList = () => {
  const popular = ["Computer Science", "Mathematics", "Biology", "Physics", "Chemistry", "History"];
  const tags = ["Science", "Math"]
  return (
    <div className="grid gap-4 grid-cols place-items-center">
      {popular.map((category, index) => (
        <PopularCard key={index} title={category} tags={tags} />
      ))}
    </div>
  );
}

export default PopularList;