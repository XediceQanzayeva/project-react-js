
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
// Kompanentler gelecek !

import Navbar from './companents/Navbar';
import Header from './companents/Header';
import AboutMe from './companents/AboutMe';
import ContactUs from './companents/ContactUs';


function App() {
  return ( 
    <div className='container-fluid'> 
    
    <Navbar /> 
  <Header/>
  <AboutMe/>
  <ContactUs/>
    </div>
  );
}

export default App;
