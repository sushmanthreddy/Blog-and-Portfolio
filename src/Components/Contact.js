import React from 'react'
import './Contact.css'


function Contact() {

   

    return (
        <div className='contact' id='contact'>
            <h2 className='contact-title'>Contact</h2>
            <div className="contact-container">
                <img className='contact-image' src='./assets/contact.png' alt=''></img>
                <form >
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." required/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email..." required/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." required></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact