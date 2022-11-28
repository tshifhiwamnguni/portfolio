
import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Experience from './components/xp/Experience';

function App() {
  return (
    <div  className='bod2'>
    <div  className='bod'>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contacts/>
      <Footer/>

    
    </div>
    </div>
  );
}

export default App;
