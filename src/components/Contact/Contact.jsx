import React from "react";
import ContactForm from "./ContactForm";
import ContactUs from "./Contactus.png"
import Heading from "../Heading";
import { Zoom } from "react-awesome-reveal";

export default function Contact(props){
    return (
        <div className="pt-4" id={props.heading.toLowerCase()}>
        <Heading 
            heading = {props.heading}
        />
        <div className="row py-5">        
            <div className="col-lg-6">
                <Zoom triggerOnce  delay={1000}>                                  
                    <h3 className="subheading position-relative">{props.subheading}</h3>
                    <ul className="text-bg">
                        {props.text && props.text.length > 0 ? (
                            props.text.map((category) => (
                                <li className="position-relative">{category}</li>  
                            ))
                            ) : (
                            <p>No categories to display.</p>
                            )} 
                    </ul>
                    <div className="d-flex justify-content-between social-media">
                        <ul className="social-media-list">
                            <li>
                                <a href="https://www.facebook.com/pinokio.daske" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-f icon"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/pinokio.daske/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram icon"></i></a>
                            </li>
                            <li>
                                <a href="tel:+385921244000"><i class="fa-solid fa-phone icon"></i></a>
                            </li>
                        </ul>
                        <img src={ContactUs} alt="Contact us" width={30 + "%"}/>
                    </div>                
                </Zoom>
            </div>
            <div className="col-lg-6">
                <ContactForm 
                formSubheading = {props.formSubheading}
                formButton = {props.formButton}
                formSuccessHeading = {props.formSuccessHeading}
                formSuccessParagraph = {props.formSuccessParagraph}
                />
            </div>
        </div>    
        </div>
    )
}