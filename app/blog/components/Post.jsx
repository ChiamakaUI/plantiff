import Image from "next/image";

const Post = ({ title, desc, image }) => {
  return (
    <div className="w-[350px] mx-auto p-2.5 shadow-2xl my-2.5 lg:mx-2 md:mx-2 dark:text-white dark:bg-[#161616] rounded-md">
      <Image
        src={`http://127.0.0.1:1337${image}`}
        alt="blog-post"
        height={150}
        width={150}
        className="w-full"
      />
      <div className=" my-3">
        <p className="text-xl font-semibold my-3 lg:text-2xl">{title}</p>
        <p className="my-2 lg:text-lg">{desc}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Post;
