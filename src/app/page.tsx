import Bg from '../components/Bg';
import About from '../components/About';
import Footer from '../components/Footer';
import  { POST } from './api/addUsers/route';

const Home = async ()=> {

  return (
    <>
      <Bg/>
      <About/>
      <Footer/>  
    </>
    );
}

export default Home