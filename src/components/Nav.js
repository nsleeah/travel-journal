import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return ( 
        <nav>
            <FontAwesomeIcon icon={faGlobeEurope} className="logo--icon" />
            <h1 className="nav--title">Leah's Travel Journal</h1>
        </nav>
     );
}
 
export default Nav ;