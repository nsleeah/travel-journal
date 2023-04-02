import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Data from "./Data";

const Card  = (props) => {

    return ( 
    <div className="card">
        <img className="card--img" src={props.imageUrl} alt={props.title} />
        <FontAwesomeIcon icon={faLocationDot} className="card--location" />
        <h2 className="card--location">{props.location}</h2>
        <a className="card--maps-url" href={props.googleMapsUrl}>View on Google Maps</a>
        <h3 className="card--title">{props.title}</h3>
        <p className="card--date">{props.startDate}-{props.endDate}</p>
        <p className="card--text">{props.description}</p>
    </div>
  );
}
 
export default Card ;
//Each Card - Location Icon
// View on Google Maps
// H1 - Title
// Date
// Paragraph
// Need To Give Items ID.