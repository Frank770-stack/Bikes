import React from "react";
import "../Pages/CSS/ShopPages.css";
import bikeImage1 from "../Assets/Gravel1.jpg";
import bikeImage2 from "../Assets/Gravel2.jpg";
import bikeImage3 from "../Assets/Gravel3.jpg";
import bikeImage4 from "../Assets/Gravel4.jpg";
import bikeImage5 from "../Assets/Gravel5.jpg";
import bikeImage6 from "../Assets/Gravel6.jpg";
import bikeImage7 from "../Assets/Gravel7.jpg";
import bikeImage8 from "../Assets/Gravel8.jpg";
import bikeImage9 from "../Assets/Gravel9.jpg";
import bikeImage10 from "../Assets/Gravel10.jpg";
import bikeImage11 from "../Assets/hero2.jpg";
import bikeImage12 from "../Assets/Shophero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Gravel = () => {
  const bikeDetails = [
    {
      id: 1,
      name: "GravelMaster 500",
      price: "$1,199",
      description:
        "Designed for tough gravel roads, the GravelMaster 500 combines comfort and performance for long adventures.",
      image: bikeImage1,
    },
    {
      id: 2,
      name: "AdventurePro",
      price: "$1,499",
      description:
        "A rugged gravel bike with an all-terrain design for both smooth roads and challenging trails.",
      image: bikeImage2,
    },
    {
      id: 3,
      name: "TrailBlazer X",
      price: "$1,299",
      description:
        "The TrailBlazer X is perfect for those who want to push boundaries, with enhanced durability for rough terrains.",
      image: bikeImage3,
    },
    {
      id: 4,
      name: "Explorer 700",
      price: "$1,799",
      description:
        "Built for long gravel rides, the Explorer 700 offers a smooth, stable ride on any terrain.",
      image: bikeImage4,
    },
    {
      id: 5,
      name: "GravelGo 900",
      price: "$1,199",
      description:
        "The GravelGo 900 offers an ultra-lightweight frame and premium performance for gravel enthusiasts.",
      image: bikeImage5,
    },
    {
      id: 6,
      name: "CrossRoad Pro",
      price: "$1,399",
      description:
        "The CrossRoad Pro is built for mixed-terrain adventures, offering speed and comfort in one package.",
      image: bikeImage6,
    },
    {
      id: 7,
      name: "EnduroTrail 500",
      price: "$1,399",
      description:
        "The EnduroTrail 500 is built for adventure, designed to tackle rough gravel roads with ease and comfort.",
      image: bikeImage7,
    },
    {
      id: 8,
      name: "GravelQuest 800",
      price: "$1,799",
      description:
        "A versatile gravel bike that excels on both paved and dirt roads, offering high performance for long rides.",
      image: bikeImage8,
    },
    {
      id: 9,
      name: "Outback Ripper",
      price: "$1,699",
      description:
        "Built for endurance, the Outback Ripper features a lightweight frame and responsive handling for all terrains.",
      image: bikeImage9,
    },
    {
      id: 10,
      name: "RiderX 600",
      price: "$1,499",
      description:
        "The RiderX 600 is perfect for riders looking for a high-performance gravel bike with a modern design.",
      image: bikeImage10,
    },
    {
      id: 11,
      name: "TrailBlaze 300",
      price: "$1,199",
      description:
        "A dependable gravel bike that offers a comfortable ride on a variety of surfaces, perfect for any adventure.",
      image: bikeImage11,
    },
    {
      id: 12,
      name: "GravelPro 1000",
      price: "$1,999",
      description:
        "The GravelPro 1000 is a high-end gravel bike designed for professional riders who demand the best in performance and durability.",
      image: bikeImage12,
    },
  ];

  return (
    <div className="road-bikes-container">
      <div className="header">
        <h2 className="header-text">Explore Our Premium Gravel Bikes</h2>
        <NavLink to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </NavLink>
      </div>

      <div className="bike-gallery">
        {bikeDetails.map((bike, index) => (
          <div className="bike-card" key={index}>
            <img
              src={bike.image}
              alt={`Road Bike ${index + 1}`}
              className="bike-image"
            />
            <div className="bike-info">
              <h3 className="bike-name">{bike.name}</h3>
              <p className="bike-price">{bike.price}</p>
              <p className="bike-description">{bike.description}</p>
            </div>
            <div className="overlay">
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gravel;
