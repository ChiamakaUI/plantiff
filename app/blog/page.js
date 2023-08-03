import { FiSearch } from "react-icons/fi";
import GroupButton from "./components/GroupButton";
import Post from "./components/Post";
import getBlogCategories from "@/lib/getBlogCategories";
import getPosts from "@/lib/getPosts";
const Main = async () => {
  const blogPosts = getPosts();
  const blogCategories = getBlogCategories();
  const [posts, categories] = await Promise.all([blogPosts, blogCategories]);
  const { data } = posts;
  const { data: category } = categories;
  return (
    <div className="w-full">
      <div className="w-[94%] mx-auto lg:w-[72%] md:w-[92%] dark:text-white">
        <div className="w-full lg:mr-auto lg:w-[70%] md:w-[80%] md:mr-auto">
          <p className="text-3xl my-4 font-semibold lg:text-5xl md:text-4xl">
            Everything you need to be a plant parent
          </p>
          <p className="lg:text-lg md:text-lg my-5">
            Empowering all people to be plant people—a collection of articles
            from The Sill’s team of plant experts across a variety of plant care
            topics to inspire confidence in the next generation of plant
            parents. Welcome to Plant Parenthood™.
          </p>
          <div className="border flex flex-row items-center p-3 w-full lg:w-[75%] md:w-[82%] my-5 rounded-lg">
            <FiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Search articles"
              className="w-[80%] p-1 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <p className="text-2xl my-4 font-semibold lg:text-3xl">
          Browse Posts By Topic
        </p>
        <div className="scroll-smooth scrollbar-hide flex flex-row w-[94%] mx-auto overflow-x-auto justify-between lg:w-[75%] lg:mx-0 md:w-[93%] md:mx-0">
          <GroupButton name="All Posts" />
          {category.map((cat) => (
            <GroupButton key={cat.id} name={cat.attributes.name} />
          ))}
        </div>
      </div>
      <div className="my-5 flex flex-col lg:flex-row md:flex-row flex-wrap w-[94%] md:w-[97%] lg:w-[82%] mx-auto lg:mb-20">
        {data.map((post) => (
          <Post
            key={post.id}
            desc={post.attributes.description}
            title={post.attributes.title}
            image={post.attributes.image.data.attributes.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
