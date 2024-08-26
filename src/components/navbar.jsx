import { useNavigate } from "react-router-dom";

// eslint-disable-next-line
const Navbar = ({ title, menuList }) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo-nav" onClick={()=>navigate('/')}>Your logo</div>
                {window.innerWidth >= 768 && title && (
                    <>
                        <div className="topic-nav">Cyber Safety</div>
                        <div className="title-nav">{title}</div>
                    </>
                )}
            </div>

            <div className="nav-right">
                { title ? (
                    <div onClick={()=>navigate("/menu")}>
                        <div className="hamburger-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    <>
                        {menuList && (
                            <div onClick={() => navigate('/menu')}>
                                <div className="menu-logo"></div>
                                <div>Menu</div>
                            </div>
                        )}
                        <div>
                            <div className="mute-logo"></div>
                            <div>Mute</div>
                        </div>
                        <div onClick={() => navigate('/')}>
                            <div className="exit-logo"></div>
                            <div>Exit</div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;