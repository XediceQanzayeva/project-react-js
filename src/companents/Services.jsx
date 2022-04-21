import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCod, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (

    <div className="services">
      <h1 className="py-5">OUR SERVICES</h1>
      <div className="container">
        <div className="row">
         

          {/* Google */}
          <div className="col-lg-3 col-md-6 col-sn-6">
            <div className="box">
              <div className="card-front">
                <div className="circle">
                  <FontAwesomeIcon icon={faGoogle} className="s-icon" />
                </div>
                <h2>SEO</h2>
              </div>
              <div className="card-back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio at voluptatum maxime optio dolorum non, accusantium veniam. Officiis culpa cumque beatae repudiandae eligendi libero consequatur, quis numquam ipsam laborum.</p>
              </div>

            </div>
          </div>

          {/* web development */}
          <div className="col-lg-3 col-md-6 col-sn-6">
            <div className="box">
              <div className="card-front">
                <div className="circle">
                  <FontAwesomeIcon icon={faFileCode} className="s-icon" />
                </div>
                <h2>Web developer</h2>
              </div>
              <div className="card-back">
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse hic autem voluptate. Distinctio, officia. Labore, saepe! Itaque dolores impedit, quos, eligendi, mollitia sequi ut nam id beatae  molestiae!</p>
              </div>

            </div>
          </div>

          {/* Facebook Marketing */}
          <div className="col-lg-3 col-md-6 col-sn-6">
            <div className="box">
              <div className="card-front">
                <div className="circle">
                  <FontAwesomeIcon icon={faFacebookF} className="s-icon" />
                </div>
                <h2>Facebook SMM</h2>
              </div>
              <div className="card-back">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio at voluptatum maxime optio dolorum non, accusantium veniam. Officiis culpa cumque beatae , quis numquam ipsam laborum.</p>
              </div>

            </div>
          </div>

          {/* IT */}
          <div className="col-lg-3 col-md-6 col-sn-6">
            <div className="box">
              <div className="card-front">
                <div className="circle">
                  <FontAwesomeIcon icon={faDesktop} className="s-icon" />
                </div>
                <h2>IT helpdesk</h2>
              </div>
              <div className="card-back">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio at voluptatum maxime optio dolorum non, accusantium veniam. Officiis culpa cumque beatae repudiandae eligendi  consequatur, quis numquam ipsam laborum.</p>
              </div>

            </div>
          </div>






        </div>
      </div>

    </div>

  )
}

export default Services