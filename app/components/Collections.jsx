import Collection from "./Collection";
import getCategories from "@/lib/getCategories";

const Collections = async () => {
  const res = await getCategories();
  const { data } = res;
  return (
    <div className="font-serif w-[98%] mx-auto lg:w-[78%] md:w-[88%] lg:h-[918px] md:h-[600px]">
      <p className="text-center text-3xl lg:text-5xl lg:font-semibold lg:my-4 dark:text-white">
        Collections.
      </p>
      <div className="flex flex-col lg:grid md:grid grid-rows-3 grid-cols-3 gap-3 md:gap-2">
        {data.map((cat, index) => (
          <Collection
            key={cat.id}
            name={cat.attributes.name}
            lgStyles={
              index === 0
                ? "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1"
                : index === 3
                ? "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1"
                : "lg:col-span-1 md:col-span-1"
            }
            image={cat.attributes.image.data[0].attributes.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
