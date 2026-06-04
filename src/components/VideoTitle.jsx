const VideoTitle = (props) => {
  const { title, overview } = props;
  return <div className="pt-64 pl-5">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="w-3/12 py-6 text-lg">{overview}</p>

    <div>
      <button className="px-6 py-3 bg-gray-200 mr-2.5 text-black rounded-sm cursor-pointer">▶ Play</button>
      <button className="px-6 py-3 bg-gray-700 text-white rounded-sm cursor-pointer">ℹ More Info</button>
    </div>
  </div>;
};

export default VideoTitle;
