
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
// Kompanentler gelecek !

import Navbar from './companents/Navbar';
import Header from './companents/Header';

function App() {
  return ( 
    <div className='container-fluid'>
    
    <Navbar />
  <Header/>
  
    </div>
  );
}

export default App;
