const Showcase = () => {
  return (
    <>
      <div
        className="h-[450px] w-full bg-no-repeat bg-cover bg-center hidden lg:block my-3"
        style={{ backgroundImage: "url(/assets/showcase.png)" }}
      ></div>
      <div
        className="h-[350px] md:h-[250px] w-full mx-auto bg-no-repeat bg-cover bg-center lg:hidden text-white p-12 my-2"
        style={{ backgroundImage: "url(/assets/showmobile.png)" }}
      >
        <p className="text-3xl">Visit Us In A Store Near You</p>
        <p className="my-2">
          Our stores around the US are open for plant shopping, repotting,
          curbside pickup, in-person workshops, and more.
        </p>
        <p className="text-xl">Find Your Local Store</p>
      </div>
    </>
  );
};

export default Showcase;
