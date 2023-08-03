const Boxes = () => {
  const info = [
    {
      id: 1,
      text:
        "“I love this app & highly recommend it to anyone looking to increase their understanding of plant care. I went from having very limited plant knowledge & struggling to keep my plants alive, to now having 30+ indoor plants that are all thriving thanks to Planta. I will definitely be renewing my subscription, as it's worth every penny.”",
    },
    {
      id: 2,
      text:
        "“I love this app & highly recommend it to anyone looking to increase their understanding of plant care. I went from having very limited plant knowledge & struggling to keep my plants alive, to now having 30+ indoor plants that are all thriving thanks to Planta. I will definitely be renewing my subscription, as it's worth every penny.”",
    },
    {
      id: 3,
      text:
        "“I love this app & highly recommend it to anyone looking to increase their understanding of plant care. I went from having very limited plant knowledge & struggling to keep my plants alive, to now having 30+ indoor plants that are all thriving thanks to Planta. I will definitely be renewing my subscription, as it's worth every penny.”",
    },
  ];
  return (
    <div className="dark:text-white lg:my-16">
      <p className="text-3xl font-semibold lg:text-5xl lg:font-bold text-center my-8" >What people are saying</p>
      <div className="flex flex-col w-[90%] md:w-[97%] mx-auto lg:w-[88%] lg:flex-row lg:items-center lg:justify-between md:flex-row md:items-center md:justify-between">
        {info.map((data) => (
          <div
            key={data.id}
            className="border rounded-md my-2 p-3.5 w-full lg:w-[380px] md:w-[240px]"
          >
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
