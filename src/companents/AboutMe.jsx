import React from 'react'

const AboutMe = () => {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-xm-12"> 
                    <div className="photo-wrap mb-5">
                        <img className='profile-img' src="https://source.unsplash.com/random" alt="" /> 
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className='about-heading'>About me</h1>
                    <p className='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate animi ab est at ipsam unde mollitia sapiente, excepturi tempora. Iure nobis ipsa earum recusandae fuga, alias illo rerum assumenda quaerat veniam nemo culpa vero aliquid neque quisquam ducimus facilis</p>
                </div>

            </div>
        </div>
    )
}

export default AboutMe