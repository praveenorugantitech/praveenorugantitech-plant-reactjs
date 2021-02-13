import React from "react";
import NoImage from "../images/NoImage.png";

const Plant = ({
  common_name,
  scientific_name,
  image_url,
  year,
  genus,
  author,
}) => {
  return (
    <div className="plant-body">
      <h1>{common_name}</h1>
      <img
        className="plant-image"
        src={image_url ? image_url : NoImage}
        alt={common_name}
      />
      <div className="plant-info">
        <h3>Info</h3>
        <p>
          Scientific Name: <strong>{scientific_name}</strong>
          <br />
          Genus: <strong>{genus}</strong> <br />
          Discovered: <strong>{year}</strong> <br />
          Author: <strong>{author}</strong>
        </p>
      </div>
    </div>
  );
};

export default Plant;
