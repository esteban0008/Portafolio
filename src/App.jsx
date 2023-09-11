import './App.css';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import {CgWebsite} from '@react-icons/all-files/cg/CgWebsite';
import Footer from './Components/Footer';

function App() {
  const data = [
    {
    title:"Skills:",
    text:"Creating 'crud' stored process programs in C#, Development of web pages with HTML, CSS and Java script, database management in all types of editors.",
    icon: <CgWebsite className='card-icon' />,
  },
];
  return (
    <>
    <Navbar />
    <Home data={data} />
    <Footer/>
    </>
  );
}

export default App;
