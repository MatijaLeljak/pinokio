import React from "react";
import {Zoom} from "react-awesome-reveal";

export default function AboutText(props){
    const text = ["Naša ljubav prema drvu odražava se u svakom komadu koji stvaramo.", "S predanošću stvaramo kvalitetne drvene proizvode za vaš dom i život.", "Naše daske za rezanje su jedinstvene i graviramo ih po vašim željama.", "Izrađujemo drvene ukrase za dom koji donose svježinu prirode.", "S ponosom stvaramo profesionalno oblikovane proizvode koji traju."]
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
            <Zoom triggerOnce  delay={1000}>
                <h3 className="subheading">Tko smo mi?</h3>
                <ul className="text-bg">
                    {text.map(category => 
                        <li>{category}</li>
                        )}
                </ul>
            </Zoom> 
            </div>
            <div className="col-lg-6 col-12">
            <Zoom triggerOnce  delay={1000}>
                <div className="woodworker mx-auto"></div>
            </Zoom>
            </div>
        </div>
    )
}