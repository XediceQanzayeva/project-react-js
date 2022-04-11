import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCod, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div className='services'>
      <h1 className='py-5'>Our services</h1>
      <div className="container">
        <div className="row">
          {/* google SEO xidmetleri */}

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
              </div>
              <h2>SEO</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, esse?</p>
            </div>
          </div>

          {/* veb  developmentle elaqeli sahe */}

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFileCode} className="icon" />
              </div>
              <h2>Web developmet</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, esse?</p>
            </div>
          </div>
          {/* Facebook marketing  */}

          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </div>
              <h2>Facebook SMM</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, esse?</p>
            </div>
          </div>

          {/*IT ishleri  */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon icon={faDesktop}   className="icon" />
              </div>
              <h2>IT helpdesk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, esse?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services