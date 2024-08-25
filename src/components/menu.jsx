import { useNavigate } from "react-router-dom";
import Navbar from "./navbar"

const Menu = () => {
    const menuList = ['1. Introduction to cyber safety','2. Passwords', '3. Socially engineered attacks', '4. Data security risks', '5. Your responsibilities', '6. More information'];
    const navigate = useNavigate();
    
    const handle = (chapter)=>{
        navigate(`/video/${encodeURIComponent(chapter)}`);
    }
    return (
        <div className='menu-bg'>
            <Navbar title={"Menu"} menuList={false} />
            <div>
                <span className="hd-menu">Menu</span>
                <p className="line-menu"><i>Select the first topic to begin.</i></p>
            </div>
            <div className="mobile-menu">
                {
                    menuList.map((val, index) =>
                        <button key={index} className="btn-menu" onClick={()=>handle(val)}>
                            <div>{val}</div>
                            <div className="forward-btn-menu">&gt;</div>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Menu
