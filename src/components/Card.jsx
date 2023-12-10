import React from "react";


const Card = (props) => {
return (
    <>
    <div className="card" key={props.ind}>
        <div className="card-img">
            <img src={props.details.img} />
        </div>
        <div className="card-title">
            <p>{props.details.title}</p>
            
        </div>
        <div className="description">
            <p>{props.details.description1}</p>
            <p>{props.details.description2}</p>
        </div>
    </div>
    </>

);

};
export default Card;