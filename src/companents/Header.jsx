
import Typed from 'react-typed'; 
import shekil from '../background2.png'

const header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Web development and website services</h1> 

            <Typed className='typed-text' 
                strings={[
                    'Xedice Qanzayeva',
                    'Azerbaycan Texnologiya Universiteti',
                    'Frond-end developmental student']}
                    typeSpeed={40}
                    backSpeed={50}
                  loop >
                    {/* props adlanirlar */}
                    
                </Typed>
                <a href={shekil} className="downloadcv" download>Download CV</a>
        </div>
    </div>
  )
}

export default header