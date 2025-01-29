
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
import WatchPage from "./WatchPage"


const Body = ({children}) => {
 let browse=children.type.name
  return (
    <div className="flex ">

{
  browse ==="WatchPage" ? (<><WatchPage/></>):(<>
    <SideBar/>  {children}</>)
}
       
    </div>
  )
}

export default Body