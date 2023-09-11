import profilepic from '../Assets/horns-bathory.jpg.webp'
import '../Components/Home.css'
import Button from './Button';
import Card from './Card';
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail';

const Home = ({data}) => {
  return (
    <>
  
    <div className="container">
    <div className="profile-pic">
        <img src={profilepic} alt=""/>
    </div>
    <h6>Hi, I'm Esteban</h6>
    <h1 className='g-color'>
        Software Development Student.
    </h1>
   
  </div>
  <section className="section">
    <div className="cards-container">
        <h3 className='g-color'>
        Efficient Work In Any Type Of Area
        </h3>
        <div className="cards">
           {data.map((d) => (
            <Card key={d.title} title={d.title} text={d.text} icon={d.icon}/>
           ))}
        </div>
    </div>
  </section>
  <div className="line"></div>
  <section className="section">
    <h1 className='g-color text'>Tell me about your next project</h1>
    <Button text="Get in touch" 
    icon={<AiOutlineMail style={{fontSize:"20"}}/>} 
    href="mailto:estebanriosusme2@gmail.com"
    />
  </section>
  </>
  );
};

export default Home
