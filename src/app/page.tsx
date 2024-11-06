import Bg from '../components/Bg';
import About from '../components/About';
import Footer from '../components/Footer';
import  { POST } from './api/addUsers/route';

const Home = async ()=> {

  // POST()
  // const davai = await my();
  // console.log(davai);
  

  return (
    <>
      <Bg/>
      <About/>
      <Footer/> 
    </>
    );
}

export default Home