import React from "react";
import Card from "./Card";

const CardList = ({ users }) => {
  return (
    <div className='ph5-ns pv4'>
      {users.map(({ username }) => {
        return <Card username={username}></Card>;
      })}
    </div>
  );
};

export default CardList;
