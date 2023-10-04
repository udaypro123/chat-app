import React from "react";
import Searchbar from "../searchbar/Searchbar";
import Userlistbody from "./Userlistbody";

const UserList = () => {
  return (
    <>
      <div className="row userlistcontainer">
        <div className="col">
          <Searchbar />
        </div>
        <div className="col">
        <Userlistbody/>
        <Userlistbody/>
        <Userlistbody/>
        <Userlistbody/>
        </div>
      </div>
    </>
  );
};

export default UserList;
