import React from "react";
import "./style/style.css"

export const WhyUs = () => {
    return(
        <div className="whyUs">
        <div className="whyUsCol">
            <h1 className="whyTitle">Why Jonny's Bakery</h1>
            <div className="whyUsRow">
                <div className="whyItem">
                  <i className="fas fa-birthday-cake fa-3x whyIcon iconColorOne"></i>
                  <h5 className="whyInfo">ONE-OF-A-KIND TREATS</h5>
                  <p className="whyInfo">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="whyItem">
                  <i className="fas fa-box fa-3x whyIcon iconColorTwo"></i>
                  <h5 className="whyInfo">ONE-OF-A-KIND TREATS</h5>
                  <p className="whyInfo">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>                  
                <div className="whyItem">
                  <i className="fas fa-calendar fa-3x whyIcon iconColorThree"></i>
                  <h5 className="whyInfo">ONE-OF-A-KIND TREATS</h5>
                  <p className="whyInfo">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
    )
}