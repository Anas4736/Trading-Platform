import React, {useState}  from "react";

import { Link } from "react-router-dom";

import Profile from "./Profile";

const Menu = ({email,user}) => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);

  const handleSelectedMenu=(index)=>{
    setSelectedMenu(index);
  }

  const handleIsProfileDropdownOpen=()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const handleIsProfileDropdownClose=()=>{
    setIsProfileDropdownOpen(false);
  }

  const menuClass="menu";
  const activeMenuClass="menu selected";

  return (
    <div className="menu-container">
      <img src="https://images.seeklogo.com/logo-png/48/1/zerodha-kite-logo-png_seeklogo-487028.png" alt="logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={()=>handleSelectedMenu(0)}
            >
              <p className={selectedMenu===0?activeMenuClass:menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={()=>handleSelectedMenu(1)}
            >
              <p className={selectedMenu===1?activeMenuClass:menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={()=>handleSelectedMenu(2)}
            >
              <p className={selectedMenu===2?activeMenuClass:menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={()=>handleSelectedMenu(3)}
            >
              <p className={selectedMenu===3?activeMenuClass:menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={()=>handleSelectedMenu(4)}
            >
              <p className={selectedMenu===4?activeMenuClass:menuClass}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleIsProfileDropdownOpen}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen&&<Profile email={email} user={user} click={handleIsProfileDropdownClose}/>}
      </div>
    </div>
  );
};

export default Menu;