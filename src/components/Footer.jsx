import { useNavigate } from "react-router-dom";

// eslint-disable-next-line
const Footer = ({prev, next}) => {
    const navigate = useNavigate();
    return (
        <div className="foot">
            <div className="left-foot" onClick={()=>navigate(prev)}>
                <div className="logo-back"></div>
                <div>Back</div>
            </div>

            <div className="right-foot" onClick={()=>navigate(next)}>
                <div>Next</div>
                <div className="logo-next"></div>
            </div>
        </div>
    )
}

export default Footer;
