

const VideoTitle = (props) => {
  const { title, overview } = props;
  return <div className="pt-[20%] pl-16 h-[86%] absolute text-white bg-gradient-to-r from-black/90 via-black/60 to-transparent">
    <h1 className="text-6xl font-bold "><span className="cursor-pointer hover:text-7xl ">{title}</span></h1>
    <p className="w-3/12 py-6 text-lg">{overview}</p>

    <div>
      <button className="px-6 py-3 bg-gray-200 mr-2.5 text-black rounded-sm cursor-pointer hover:opacity-80"> ▶️Play</button>
      <button className="px-6 py-3 bg-gray-700 text-white rounded-sm cursor-pointer hover:opacity-80">ℹ More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
