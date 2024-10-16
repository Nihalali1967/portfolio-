import React from "react";
import facebook from '../assets/socials/facebook.png';
import instagram from '../assets/socials/instagram.png';
import dribbble from '../assets/socials/dribbble.png';
import email from '../assets/socials/sms.png';

const Contact = () => {
    return (
        <div className="md:px-10 px-7 my-10" id="contact">
            <div className="flex flex-col md:flex-row">
                {/* text and icons */}
                <div className="md:w-1/2">
                    <h1 className="text-primary font-semibold text-3xl mt-16">
                        CONTACT WITH ME
                    </h1>
                    <p className="my-3 text-white md:w-3/4 leading-[2]">
                        {/* Add any text here if needed */}
                    </p>
                    {/* social icons */}
                    <div className="flex">
                        <a className="ml-4" href="https://instagram.com/nihal_vadakkan?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="" style={{border: 'none'}} />
                        </a>
                        <a className="ml-4" href="https://www.linkedin.com/in/nihal-ali-v-a72784235" target="_blank" rel="noreferrer">
                        <img src={email} alt="" style={{border: 'none'}} />
                            
                        </a>
                        <a className="ml-4" href="https://github.com/Nihalali1967" target="_blank" rel="noreferrer">
                            <img src={dribbble} alt="" style={{border: 'none'}} />
                        </a>
                    </div>
                    <p className="my-3 text-white md:w-3/4 leading-[2]">+91 6282981209</p>
               

                </div>
                {/* form */}
                <div className="md:w-1/2">
                    <p className="mt-16 text-white text-2xl mb-6">CONTACT</p>
                    <form action="https://getform.io/f/30ce99ba-cf3d-4fc8-8886-91e22c34faf7" method="POST">
                        <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded " />
                        <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3" />
                        <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                        <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
