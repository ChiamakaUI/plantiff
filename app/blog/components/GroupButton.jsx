
const GroupButton = ({ name, func }) => {
  return (
    <button
    onClick={func}
    className="p-2 border mx-2 rounded-md min-w-[120px]"
  >
    {name}
  </button>
  )
}

export default GroupButton