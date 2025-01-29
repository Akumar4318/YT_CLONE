import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addYtVideo } from "../Slices/YtVideo";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/Contstant";
import { Link } from "react-router-dom";



const VideoContainer = () => {
  const dispatch = useDispatch();
  const ytvideo = useSelector((store) => store.ytvideo.ytVideos);
  console.log(ytvideo);

  useEffect(() => {
    const getalldata = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
    
        dispatch(addYtVideo(data.items));
      } catch (error) {
        console.log(error);
      }
    };

    getalldata();
  }, [dispatch]);

  return (
    <div>
      {ytvideo.length > 0 ? (
        <div className="flex flex-wrap">
        {ytvideo && <AdVideoCard info={ytvideo[0]} />}
          {
            ytvideo.map((item)=>{
              return(
               <Link to={"/watch?v="+item.id} key={item.id}> <VideoCard info={item} key={item.id}/></Link>
              )
            })
          }
        </div>
      ) : (
        <p>No videos found</p>
      )}

    
    </div>
  );
};

export default VideoContainer;
