import React from "react";
import Heading from "../Heading";
import AboutText from "./AboutText";


export default function About(props){
    return ( 
        <div className="pt-4" id="onama">
        <Heading 
            heading = "O nama"
        />
        <AboutText />
        </div>       
    )
}