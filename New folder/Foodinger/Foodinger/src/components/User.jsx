import { useState,useEffect } from "react";
import "./User.css";
import {GIT_API } from '../Utils/constants';

const User = () => {


  const [user, setUser] = useState("");
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const data = await fetch(GIT_API);
    const response = await data.json();
    console.log(response);
    setUser(response)
  };

  

  return (
    <>
      <div className="user-card">
        <div className="info1">
          <div className="myimage">
            <img
              src = {user.avatar_url}
              alt="img" 
            />
          </div>
          <div className="detils">
            <h2>Name: {user.name}</h2>
            <h3>contact: khalidhaiderjafri@gmail.com</h3>
            <h3>contact: +91 9696668689</h3>
            <h5> {user.bio}</h5>
            <button className="btn-i "><a href="mailto:khalidhaiderjafri@gmail.com">Email</a></button>
            <div>
            <button className="btn-i"><a href={user.blog} target="_blank" >Resume</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
