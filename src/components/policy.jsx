import { useParams } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./navbar"

const Policy = () => {
    const {chapterId} = useParams();
    return (
        <div className="policy-bg">
            <Navbar title={chapterId} menuList={true} />
            <div className="main-policy">
                <div className="policy-content">
                    <p>Our policies sets out responsibilities and standards to help keep our data safe.</p>
                    <p>
                        If you are not yet familiar with it, select the policy image to take a look, otherwise select next to continue.
                    </p>
                </div>
                <div className="policy-img">
                    <h3 className="policy-data">Your Policy here <img src="/public/assets/zoom_in.svg" alt="zoom logo" className="magnify-logo" /></h3>
                </div>
            </div>
            <Footer prev={`/video/${chapterId}`} next={'/menu'} />
        </div>
    )
}

export default Policy
