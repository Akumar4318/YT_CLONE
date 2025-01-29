import { useSearchParams } from "react-router-dom"

const WatchPage = () => {

const [searchParams]=useSearchParams();
console.log(searchParams.get("v"))
    
  return (
    <div className="p-5">
       <div className="rounded-full bg-black'">
       <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-xl bg-gradient-to-b to-black" ></iframe>
       </div>
    </div>
  )
}

export default WatchPage