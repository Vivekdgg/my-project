import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { GlobalContext } from './GlobalContext';
const HomeScreen = () => {
  const { items } = useContext(GlobalContext);
  return (
    <div className="homeScreen">
      <div className="homeScreenContainer">
        <div className="page_header">
          <div class="logo">
            <img src="Assets/Oreo.png" alt="set" />
          </div>
        </div>
        <div className="product">
                {items.map((item) => (
                  <div className="productContainer">
                   <div className="productBox">
                   <div className="productimage">
                    <div className="productimage" key={item.id}>
                      <div className="points">
                      <div className="oreo"><img src={item.cookies} alt="set"/></div>
                      <div><span>{item.points}</span></div>
                      </div>
                     <div className="center-img"><img src={item.image} className="imagecenter" alt="set"/></div>
                        
                    </div>
                    </div>
                    </div>
                    <p className="productName">{item.description}</p> 
                    </div>
                ))}
        </div>
        <Link to={"/login"}>
        <CustomButton text="Click me"/>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
