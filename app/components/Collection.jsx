import Image from "next/image";
import { urlFor } from "../lib/sanityImageUrl";

const Collection = ({ name, image }) => {
  return (
    <div
      className={`relative min-w-[250px] max-w-[250px] lg:min-w-[350px] lg:max-w-[350px] text-white mx-2`}
    >
      <Image
        src={urlFor(image).url()}
        alt="plants"
        width={150}
        height={150}
        className="w-full h-full"
      />
      <p className="absolute bottom-6 left-6 text-3xl font-serif">{name}</p>
    </div>
  );
};

export default Collection;
