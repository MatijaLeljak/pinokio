import React from "react";
import Heading from "../Heading";
import ProductText from "./ProductText";



export default function Product(props){
    
    return (  
        <div className="pt-4" id={props.heading.toLowerCase()}>
        <Heading 
            heading = {props.heading}
        />
        <ProductText
            heading = {props.subheading}
            image = {props.photos}
            rightDiv ={props.rightDiv}
            text ={props.text}
        />
        </div>        
    )
}