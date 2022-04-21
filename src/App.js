
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
// Kompanentler gelecek !

import Navbar from './companents/Navbar';
import Header from './companents/Header';
import AboutMe from './companents/AboutMe';
import Services from './companents/Services';
import Experience from './companents/Experience';
import ContactUs from './companents/ContactUs';
import Footer from './companents/Footer';






function App() { 
  return ( 
    <div className='container-fluid'> 
    
    <Navbar /> 
  <Header/>
  <AboutMe/>
  <Services/>
  <Experience/>
  <ContactUs/>
  <Footer/>
    </div>
  );
}

export default App;
