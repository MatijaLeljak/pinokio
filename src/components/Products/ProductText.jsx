import React from "react";
import {Zoom} from "react-awesome-reveal";
import Gallery from "react-photo-gallery";

export default function ProductText(props) {
    return (
        <div className="row py-5">
            <div className={"col-12 col-xl-6 " + (props.leftDiv ? props.leftDiv : "")}>
            <Zoom triggerOnce  delay={1000}>
                <h3 className="subheading">{props.heading}</h3>
                <ul className="text-bg">
                    {props.text && props.text.length > 0 ? (
                        props.text.map((category) => (
                            <li>{category}</li>  
                        ))
                        ) : (
                        <p>No categories to display.</p>
                        )} 
                </ul>
            </Zoom> 
            </div>            
            <div className={"col-12 col-xl-6 " + (props.rightDiv ? props.rightDiv : "")}>
            <Zoom triggerOnce  delay={1000}>
                <Gallery 
                photos={props.image}
                direction="column"
                />
            </Zoom>
            </div>            
        </div>
    )


}