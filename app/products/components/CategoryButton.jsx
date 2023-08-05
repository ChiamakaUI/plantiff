'use client'
const CategoryButton = ({ name, func }) => {
  return (
    <button
      onClick={func}
      className="p-2 bg-[#002E1B] text-white mx-2 rounded-md hover:bg-[#F59300] min-w-[130px]"
    >
      {name}
    </button>
  );
};

export default CategoryButton;
