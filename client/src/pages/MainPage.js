import React from "react";
import "./MainPage.css";
import {Link} from "react-router-dom";
import Item from "../components/NFTitem"
import data from "../resources/dummyNFT";

export default function MainPage() {
  return (
    <div className="mainpage">
      <div className="row">
        <div className="intro">
            <h1>Explore, collect, and sell NFTs</h1>
            <h3>World's first and largest NFT marketplace</h3>
            <div className="buttonContainer">
              <Link to="/marketplace"><button id="exploreBTN">Explore</button></Link>
              <Link to="/mintpage"><button id="createBTN">Create</button></Link>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((e)=> (
            <Item imgUrl={e.imgUrl} name={e.name} collection={e.collection} price={e.price}/>
          ))}
        </div> 
      </div>    
  );
}