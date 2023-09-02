import React from "react";

export default function Footer() {
    const menu = ["O nama", "Daske", "Ukrasi", "Ostalo", "Kontakt", "Galerija"];
    const date = new Date().getFullYear()
    return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-12">
                <h2>Kreirano od prirodnih materijala, inspirirano vašim stilom</h2>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center align-items-center mt-5 mt-md-0">
                <a href="#kontakt" className="footer-contact">Kontaktirajte nas!</a>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-lg-start justify-content-center">
                <ul className="footer-nav">
                {menu.map(category => 
                    <li className="nav-item"><a href={"#" + category.toLowerCase().replace(/\s/g, '')}>{category}</a></li>
                )}
                </ul>
            </div>
            <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-end align-items-center">
                <ul className="social-media-list">
                    <li>
                        <a href="https://www.facebook.com/pinokio.daske"><i class="fa-brands fa-facebook-f icon"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/pinokio.daske/"><i class="fa-brands fa-instagram icon"></i></a>
                    </li>
                    <li>
                        <a href="tel:+385921244000"><i class="fa-solid fa-phone icon"></i></a>
                    </li>
                </ul>   
            </div>          
        </div>
        <hr></hr>
        <p>&copy; {date + " Pinokio"}</p>
    </div>
)}