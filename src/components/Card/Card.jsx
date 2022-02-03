import React from "react";
import "./style/style.css";

const Card = ({name, url}) => {
    return(
        <div className="offerItem">
            <img src={url} alt="BakedGood" className="offerImg" />
            <h5 className="itemTitle">{name}</h5>
        </div>
    )
};

export default Card;

