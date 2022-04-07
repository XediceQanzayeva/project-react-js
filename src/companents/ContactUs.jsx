import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = 'service_tzbdjo6'
        const templateID = 'template_nntitaf'
        const userID = '8ZVfKk6Jxdzfhmqs6'

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.current.reset()
    };

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>ContactUs</h1>
                <p> He contacts you as soon as possible</p>
            </div>
            <div className="container">
                <form ref={form} onSubmit={sendEmail} >
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">

                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    className='form-control'
                                    // form-control bootstap ozelliyidir !
                                    name='name'
                                />
                                <div className="line"></div>
                            </div>
                            {/* Phone input */}
                            <div className="text-center">

                                <input
                                    type="text"
                                    placeholder='Enter your phone number'
                                    className='form-control'
                                    name='Phone'
                                />
                                <div className="line"></div>
                            </div>
                            {/* email input */}
                            <div className="text-center">

                                <input
                                    type="email"
                                    placeholder='user@gmail.com'
                                    className='form-control'
                                    name='email'
                                />
                                <div className="line"></div>
                            </div>
                            {/*subject input */}
                            <div className="text-center">

                                <input
                                    type="text"
                                    placeholder='Enter your subject'
                                    className='form-control'
                                    name='subject'
                                />
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className='col-md-6 col-xs-12'>
                            <div className="text-center">
                                <textarea
                                    name="message"
                                    className='form-control'
                                    placeholder='descripe your need'
                                />

                                <div className="line"></div>
                            </div>
                            <button type='sumbit' className='btn btn-danger contact-btn' >Contact Us</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs