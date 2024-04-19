import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PopularList from "./components/PopularList";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="fixed bg-base-100 top-0">
        <Header />
        <div className="m-4 grid">
          <h1 className="font-space text-[32px] font-bold">
            What do you want to learn today?
          </h1>
        </div>
        <div className="m-4 grid py-2">
          <SearchBar />
        </div>
      </div>
      <div className="m-4 grid pt-[250px]">
        <h1 className="font-space text-[24px] font-bold">
          Featured Categories
        </h1>
      </div>
      <div className="m-4 pb-2">
        <CategoryList />
      </div>
      <div className="m-4 grid pt-2 pb-[100px]">
        <h1 className="font-space text-[24px] font-bold">
          Popular Quizzes
        </h1>
        <PopularList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;