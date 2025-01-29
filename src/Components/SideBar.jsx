
import home from "../assets/ytassets/home.svg"
import shorts from "../assets/ytassets/sorts.svg"
import subscription from "../assets/ytassets/subscription.svg"
import history from "../assets/ytassets/history.svg"
import playlist from "../assets/ytassets/playlist.svg"
import yourvideos from "../assets/ytassets/yourvideos.svg"
import course from "../assets/ytassets/course.svg"
import watch from "../assets/ytassets/watch.svg"
import liked from "../assets/ytassets/liked.svg"
import clips from "../assets/ytassets/clips.svg"
import { useSelector } from "react-redux"



const SideBar = () => {

    const isClicked=useSelector((store)=>store.sidemenu.isMenuOpen)
    console.log(isClicked)

  return (
    <div>
        {
            isClicked ? (<div className="border   h-lvh shadow-lg max-sm:hidden "  >
                <ul className="flex flex-col text-xl p-[1.2rem] gap-y-5 cursor-pointer">
                    <li className="flex gap-4 font-bold hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={home} alt="Home" /> Home</li>
                    <li className="flex gap-4 font-bold hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={shorts} alt="Shorts" /> Shorts</li>
                    <li className="flex gap-4 font-bold hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={subscription} alt="Subscription" /> Suscription</li>
                </ul>
    
                <div className="bg-black w-auto h-px"> </div>
    
                <div>
                    <span className="text-[1.3rem] font-bold p-3">You</span>
    
                    <ul className="flex flex-col text-xl p-[1.2rem] gap-y-5 cursor-pointer">
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={history} alt="history" /> History </li>
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={playlist} alt="playlist" /> Playlist </li>
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={yourvideos} alt="yourvideos" /> Your Videos</li>
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={course} alt="course" /> Your Courses </li>
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={watch} alt="watch" /> Watch Later </li>
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={liked} alt="liked" /> Liked videos</li>
                        <li className="flex  font-bold gap-4 hover:bg-slate-300 p-2  hover:rounded-lg"> <img src={clips} alt="clips" /> Your Clips </li>
                    </ul>
                </div>r
    
            </div>):(
                <div className={`shadow-lg  ` }>
                   <ul className=" p-4 flex flex-col gap-y-4  h-lvh items-center cursor-pointer">
                    <li className="text-sm hover:bg-red-500 p-2 w-full hover:rounded-lg flex font-bold flex-col items-center justify-center"> <img src={home} alt="home" /> Home</li>
                    <li className="text-sm hover:bg-red-500 p-2 w-full hover:rounded-lg flex font-bold flex-col items-center justify-center"> <img src={shorts} alt="sorts" /> Sorts</li>
                    <li className="text-sm hover:bg-red-500 p-2 w-full hover:rounded-lg flex  font-bold flex-col items-center justify-center"> <img src={subscription} alt="subscription" /> Subscription</li>
                   </ul>
                </div>
            )
        }
    </div>
  )
}

export default SideBar