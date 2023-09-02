import React, {useState, useEffect} from "react";
import NavigationMenu from "./NavigationMenu";
import logo from "./logo.png";
import ReactTyped from "react-typed";
import {Link as ScrollLink} from "react-scroll";


function HeroBlock(){

  const [stickyClass, setStickyClass] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  
  const handleNavbarToggle = () => {
    setExpanded(prevState => !prevState);
    toggleScrollLock();
  };

  const toggleScrollLock = () => {
    document.body.classList.toggle('scroll-lock');
  };

  const handleCloseMenu = () => {
    setExpanded(false);
    if (document.body.classList.contains('scroll-lock')) {
      toggleScrollLock();
    }
  };

    return (
    <div id="hero-block">
          <nav className={"navbar navbar-expand-lg position-fixed top-0 justify-content-between px-5 w-100 z-1 align-content-center " + stickyClass + (expanded ? ' white-bg' : '')}>
          <ScrollLink  
              smooth 
              spy 
              to="hero-block"
              className="navbar-brand"  
          >
              <img src={logo} alt="logo"  className="logo" />
          </ScrollLink>
              <button className={"navbar-toggler border-0 " + (expanded ? 'collapsed' : '')} type="button" onClick={handleNavbarToggle} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={expanded} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={"collapse navbar-collapse flex-grow-0 " + (expanded ? 'expanded-navbar' : '')} id="navbarSupportedContent">
                <NavigationMenu 
                onCloseMenu={handleCloseMenu}
                />
              </div>
          </nav>
          <div className="hero-block d-flex justify-content-center align-items-center">
            <div className="info">
              <h3>Daska za rezanje - SUPER PONUDA</h3>
              <p>Pronađi idealni dizajn daske ili izmisli svoj!</p>
              <a href="#daske" className="btn-green float-end text-decoration-none">Više</a> 
            </div>
            <div className="typing-text">
              <h1>
                <ReactTyped strings={["Proizvodi od drva koji donose toplinu i karakter u vaš životni prostor"]} typeSpeed={100} loop />
              </h1>
            </div> 
          </div>
    </div>
    )
};
export default HeroBlock;