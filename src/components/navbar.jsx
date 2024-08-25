import { useNavigate } from "react-router-dom"


// eslint-disable-next-line react/prop-types
const Navbar = ({title,menuList}) => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo-nav">Your logo</div>
                {
                    title &&
                        <>
                            <div className="topic-nav">Cyber Saftey</div>
                            <div className="title-nav">{title} </div>
                        </>
                }
            </div>

            <div className="nav-right">
                {menuList && <div onClick={()=>navigate('/menu')}>
                    <div className="menu-logo"></div>
                    <div>Menu</div>
                </div>}
                <div>
                    <div className="mute-logo"></div>
                    <div>Mute</div>
                </div>
                <div onClick={()=>navigate('/')}>
                    <div className="exit-logo"></div>
                    <div>Exit</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
