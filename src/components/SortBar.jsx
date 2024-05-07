function SortBar({ handleSort }) {
  return (
    <div className="p-3 bg-orange-500 mt-5">
      <button
        onClick={() => handleSort("health")}
        className="mr-5 bg-blue-950 hover:bg-white text-orange-500 font-bold py-2 px-4 rounded-full"
      >
        Sort by Health
      </button>{" "}
      <button onClick={() => handleSort("damage")} className="mr-5 bg-blue-950 hover:bg-white text-orange-500 font-bold py-2 px-4 rounded-full">Sort by Damage</button>
      <button onClick={() => handleSort("armor")} className=" bg-blue-950 hover:bg-white text-orange-500 font-bold py-2 px-4 rounded-full">Sort by Armor</button>
    </div>
  );
}

export default SortBar;
