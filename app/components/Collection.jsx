import Image from "next/image";
import { urlFor } from '../lib/sanityImageUrl';

const Collection = ({ lgStyles, name, image }) => {
    return (
        <div
            className={`relative w-[95%] h-[225px] mx-auto my-2 ${lgStyles} text-white lg:w-auto lg:h-auto lg:mx-0 lg:my-0 md:w-auto md:h-auto md:mx-0 md:my-0`}
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

//mobile styles w-[95%] mx-auto my-4
