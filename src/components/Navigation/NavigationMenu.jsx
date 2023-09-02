import React, { useId } from "react";
import {Link as ScrollLink} from "react-scroll";


function NavigationMenu({ onCloseMenu }){
  const menu = ["O nama", "Daske", "Ukrasi", "Ostalo", "Kontakt", "Galerija"];
  
  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    onCloseMenu();
  };

return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menu.map(category => ( 
          <li className="nav-item">
            <ScrollLink
              activeClass="active" 
              smooth 
              spy 
              to={category.toLowerCase().replace(/\s/g, '')}
              className="nav-link"
              key={useId}
              onClick={handleMenuItemClick}
            >
              {category.toUpperCase()}
            </ScrollLink>
          </li>    
        ))}
    </ul>
)}

export default NavigationMenu;