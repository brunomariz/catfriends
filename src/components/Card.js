import React from "react";
import "./Card.css";

const Card = ({ username }) => {
  return (
    <div className='dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${username}?set=set4`} alt='' />
      <h3>{username}</h3>
    </div>
  );
};

export default Card;
