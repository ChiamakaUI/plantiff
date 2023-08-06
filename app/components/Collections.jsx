import Collection from "./Collection";
import { client } from '../lib/sanity';


async function getCategories() {
  const query = `*[_type == "category"]`;
  const data = await client.fetch(query);

  return data;
}
const Collections = async () => {
  const data = await getCategories();

  return (
    <div className="font-serif w-[92%] mx-auto lg:w-[88%] md:w-[88%] mt-2 mb-3.5">
      <p className="text-center text-3xl lg:text-5xl lg:font-semibold lg:my-4 dark:text-white mb-2">
        Collections.
      </p>
         <div className="flex flex-row w-full overflow-x-auto justify-between scroll-smooth scrollbar-hide">
        {data.map((cat) => (
          <Collection
            key={cat._id}
            name={cat.name}
            image={cat.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
