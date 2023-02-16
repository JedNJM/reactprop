import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile = (props) => {
  return (
    
    <div style={{ display:'flex', gap:"10px", justifyContent:"center" }} > 
      <div className="col-md-4" >
        <div className="card profile-card-3"style={{ margin:"10px"   }} >
          <div className="background-block" style={{ display:'flex', gap:"10px", justifyContent:"center" }}>
            <img
              src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="profile-sample1"
              className="background"
            />
          </div>
          <div className="profile-thumb-block">
            <img src={props.img} alt="profileimage" className="profile" />
          </div>
          <div className="card-content">
            <h2>
              {props.x}
              <small>{props.bio}</small>
            </h2>
            <div className="icon-block">
              <a href="empty">
                <i className="fa fa-facebook" />
              </a>
              <a href="empty">
                {" "}
                <i className="fa fa-twitter" />
              </a>
              <a href="empty">
                {" "}
                <i className="fa fa-google-plus" />
              </a>
            </div>
            <div className="">{props.prof}</div>
            <button onClick={() => props.alertClick(props.x)}>
              Click here Alert
            </button>
          </div>
        </div>
        <p className="mt-3 w-100 float-left text-center">
          <strong></strong>
        </p>
      </div>
    </div>
  );
};
export default Profile;
