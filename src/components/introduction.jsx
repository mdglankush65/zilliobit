import Footer from './Footer'
import Navbar from './navbar'
import {useNavigate} from 'react-router-dom';

const Introduction = () => {
    const navigate = useNavigate();
    const handle = ()=>{
        navigate('/menu')
    }
    
    return (
        <div className='intro-bg'>
            <Navbar title="Introduction" menuList={true} />
            <div className='main-intro'>
                <div className='mid-main'>
                    <div className='para-intro'>In this course, we&apos;d like to use your name (you can make up a name if you prefer).<br />Please enter it here: </div>
                    <input type='text' placeholder='Type here'></input>
                    <button className='btn-submit' onClick={handle}>Submit</button>
                </div>
            </div>
            <Footer prev={'/'} next={'/menu'} />
        </div >
    )
}

export default Introduction
