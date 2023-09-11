import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail'
import '../Components/Navbar.css'
import Menu from './Menu';
const Navbar = () => {
    return (
    <nav id="navbar">
        <a href="mailto:estebanriosusme2@gmail.com" className="message">
            <div className="message-icon-container">
            < AiOutlineMail className='message-i'/>
            </div>
            <p>Get in touch</p>
        </a>
        <Menu/>
    </nav>);
}

export default Navbar