import React from "react";
import "./style/style.css";
import { bakedGoods } from "../../assets/data/goods";
import Card from "../Card/Card";
import { Landing } from "./Landing";
import { WhyUs } from "./WhyUs";

const Home = () => {
    return(
        <div>
            <Landing/>
            <div id="gallery" className="offersSection">
                <div className="offerCol">
                <h1 className="offerTitle">OUR CAKES</h1>
                <p className="offerText">
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor <br></br>sit amet, consectetur adipisicing elit.
                </p>
                <div className="offerRow">
                    {bakedGoods.map((good, i) => (
                    <Card key={i} url={good.url} name={good.name}/>
                    ))}
                </div>
                </div>
            </div>

            <div id="about" className="contentRow">
                <div className="contentColImg2"></div>
                <div className="contentColInfo">
                <h1 className="contentTitle">Maria & Jonny</h1>
                <p className="offerText width">
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>
            </div>

            <div className="containerThing">
                <div className="containerOffset right">
                <h1 className="containerTitle">AUTHENTIC PASTRIES.</h1>
                <p className="containerInfo"> Here you can use rows and columns to organize your footer content.<br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>

            <div id="product" className="offersSection">
                <div className="offerCol">
                <h1 className="offerTitle">OUR PASTRIES</h1>
                <p className="offerText">
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor <br></br>sit amet, consectetur adipisicing elit.
                </p>
        
                <div className="offerRow">
                    {bakedGoods.map((good, i) => (
                    <Card key={i} url={good.url} name={good.name}/>
                    ))}
                </div>
                </div>
            </div>


            <WhyUs/>
        </div>
    )

}

export default Home;