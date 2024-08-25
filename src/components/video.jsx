import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar";

const Video = () => {
    const { chapterId } = useParams(); // Access the chapterId parameter

    return (
        <div className="video-bg">
            <Navbar title={chapterId} menuList={true} />
            <video className="video-js" controls autoPlay loop preload="auto" poster="/assets/col-crystal-bg.png">
                <source src="/Top 5 Key Benefits of Interactive Video Content.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Footer prev={'/menu'} next={`/policy/${chapterId}`} />
        </div>
    );
}

export default Video;