import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";


export function Events(){

    const { slug } = useParams<{ slug : string}>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex flex-1">
                {slug ? <Video lessonSlug={slug}/> : <div className=" flex-1 items-center justify-center"><img src="/src/assests/cold_background.png" className="mt-10" alt=""></img></div>}
                <SideBar/>
            </main>
        </div>
    )
}

