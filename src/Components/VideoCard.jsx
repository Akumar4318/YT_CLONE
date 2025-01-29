
import User from "../assets/ytassets/user.svg";
const VideoCard = ({info}) => {


    const{snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className="bg-[#959394] shadow-lg rounded-xl mx-4 my-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl  flex flex-col items-center gap-y-4 w-[300px]">
    {/* Thumbnail Section */}
    <div className="relative overflow-hidden rounded-lg w-full border border-gray-500">
      <img
        src={thumbnails.medium.url}
        className="w-full rounded-lg transition-transform duration-300 hover:scale-110"
        alt="thumbnail"
      />
    </div>
  
    {/* Content Section */}
    <div className="flex items-center w-full opacity-80 px-1 my-1">
      <img
        src={User}
        className="w-10 h-10 rounded-full border-2 border-gray-500/20"
        alt="User Avatar"
      />
      <div className="flex flex-col ml-4 text-white">
        <span className="font-semibold text-lg leading-tight">{title}</span>
        <span className="text-sm text-white">{channelTitle.length>20? (channelTitle.slice(0,20)+".."):("")}</span>
        <span className="text-sm text-white">{statistics.viewCount} Views</span>
      </div>
    </div>
  </div>
  
  );
}


// used HOC(Higher Order Component)
export const AdVideoCard=({info})=>{
  return(
    <div className="relative group">
    <h1 className="absolute text-[2rem] text-black top-[30%] left-[12%] font-bold z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      YT-advertisement
    </h1>
    <div className="group-hover:opacity-20">
      <VideoCard info={info} />
    </div>
  </div>
  )
}

export default VideoCard