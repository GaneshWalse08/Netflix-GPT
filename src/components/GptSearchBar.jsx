const GptSearchBar = () => {
  return (
    <div className="pt-[7%]">
      <form
        className="w-1/2 p-6 bg-black grid grid-cols-6 mx-auto rounded-lg gap-2.5"
        onClick={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What would you like to watch?"
          className="bg-white text-black grid col-span-4 py-2 rounded-sm pl-2"
        ></input>
        <button className="bg-red-600 col-span-2 py-2 cursor-pointer rounded-sm">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
