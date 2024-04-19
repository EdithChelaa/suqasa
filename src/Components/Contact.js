import React, { useState } from 'react';
import { FaPaperPlane, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDownload, FaCopyright } from 'react-icons/fa';
import '../Components/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxyvSRqWr0DX_b6i6XoW1ntCzQmMV92bVkI-dKXTTAoXSwk_L_RWO-RwprDSMkTh3qM2Q/exec';
        const form = e.target;
        const msg = document.getElementById("msg");

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
            if (response.ok) {
                msg.innerHTML = "Message sent successfully!";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <div>
            <div id="contact">
                <div className="contact-container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            <p><FaPaperPlane /> suqasa@gmail.com</p>
                            <p><FaPhone /> +254793651234</p>
                            <div className="social-icons">
                                <a href=""><FaFacebook /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagram /></a>
                                <a href=""><FaLinkedin /></a>
                            </div>
                            <a href=" " className='listings' download><FaDownload /> Download Listings Available</a>
                        </div>
                        <div className="contact-right">
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="emailmetoday@gmail.com" value={formData.email} onChange={handleChange} required />
                                <textarea name="message" type="text" rows="6" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                                <button type="submit" className="btn btn2">Submit</button>
                            </form>
                            <span id="msg"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright <FaCopyright /> Suqasa Properties.</p>
            </div>
        </div>
    );
}

export default Contact;
