import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Heading(props){
    return (
        <Fade triggerOnce  delay={500}>
            <div className="position-relative">
                <div className="heading-wrapper">{props.heading}</div>
                <h1 className={"pt-5 " + (props.paddingBottom ? "pb-5" : "")}>{props.heading}</h1>
            </div>
        </Fade>
    )
}