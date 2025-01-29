import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addYtVideo } from "../Slices/YtVideo";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/Contstant";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const ytvideo = useSelector((store) => store.ytvideo.ytVideos);
  console.log(ytvideo);

  useEffect(() => {
    const getalldata = async () => {
      try {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const data = await response.json();
        console.log(data.items);
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
          {
            ytvideo.map((item)=>{
              return(
                <VideoCard info={item} key={item.id}/>
              )
            })
          }
        </div>
      ) : (
        <p>No videos found</p>
      )}

      <div>aman</div>
    </div>
  );
};

export default VideoContainer;
