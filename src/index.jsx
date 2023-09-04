import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import HeroBlock from './components/Navigation/HeroBlock';
import About from './components/AboutUs/About';
import Product from './components/Products/Product';
import { info } from './components/Products/ProductsInfo';
import Gallery from 'react-photo-gallery';
import Heading from './components/Heading';
import Contact from './components/Contact/Contact';
import BackToTopButton from './components/BackToTop';
import Footer from './components/Footer';
  
  const [daske, ukrasi, ostalo, kontakt, galerija] = info;
const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <>
    <HeroBlock />
    <div className='container'>
        <About
        />
    </div>
    <div className="parallax"></div>
    <div className='container'>
        <Product
            heading ={daske.heading}
            subheading={daske.subheading}
            photos ={daske.photos}
            text ={daske.textAbout}
        />
        <Product
            heading ={ukrasi.heading}
            subheading={ukrasi.subheading}
            photos ={ukrasi.photos}
            text ={ukrasi.textAbout}
            rightDiv ="order-xl-first"
        />
        <Product
            heading ={ostalo.heading}
            subheading={ostalo.subheading}
            photos ={ostalo.photos}
            text ={ostalo.textAbout}
        />
        <Contact 
            heading={kontakt.heading}
            subheading={kontakt.subheading}
            text ={kontakt.textAbout}
            formSubheading = {kontakt.formSubheading}
            formButton = {kontakt.formButton}
            formSuccessHeading = {kontakt.formSuccessHeading}
            formSuccessParagraph = {kontakt.formSuccessParagraph}
        />
    
    </div>
    <div id="galerija" className='container-fluid pt-4'>
        <Heading
            heading={galerija.heading}
            paddingBottom= {true}
        />
        <Gallery
            photos={galerija.photos}
                
        />
    </div>
    <footer>
        <Footer />
    </footer>
    
    <BackToTopButton />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

