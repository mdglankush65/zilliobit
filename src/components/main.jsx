import Navbar from "./navbar"
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const handle = ()=>{
      navigate('/introduction')  
    }
    
    return (
        <div className="splash-bg">
            <Navbar title={null} menuList={false} />
            <main className='main'>
                <div>Welcome to</div>
                <div className='head-title' >Cyber Safety</div>
                <p className='line'><i>Click <b>Start</b> when you are ready to begin.</i></p>
                <div className='btn' onClick={handle}>Start</div>
            </main>
        </div>
    )
}

export default Main
