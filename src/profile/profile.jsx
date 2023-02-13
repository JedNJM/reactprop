import React from "react";
const Profile = (  alertClick, bio, prof, x,image) => {
  return (
    <>
        <img
          src={image}
          alt="fix"
          style={{ width: "150px", borderRadius: "50%" }}
        ></img>
         <h1>{x}</h1>
        <p>{bio}</p>
        <h2>{prof}</h2>
        <button onClick={() => alertClick(x)}>Click here Alert</button>
        </ >
   
  );
};
export default Profile;
