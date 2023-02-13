import React from "react";
const Profile = (props) => {
  return (
    <>
        <img
          src={props.image}
          alt="fix"
          style={{ width: "150px", borderRadius: "50%" }}
        ></img>
         <h1>{props.x}</h1>
        <p>{props.bio}</p>
        <h2>{props.prof}</h2>
        <button onClick={() => props.alertClick(props.x)}>Click here Alert</button>
        </ >
   
  );
};
export default Profile;
