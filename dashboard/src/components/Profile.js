import React from "react";

function Profile({ email, user, click }) {
  const handleLogout = () => {
    window.location.href = "http://localhost:3000";
  };

  return (
    <>
      <div id="myDialog" draggable="true">
        <i className="fa-solid fa-x" style={{ marginLeft: "140px" }} onClick={click}></i>
        <div style={{ textAlign: "center" }}>
          <img src="profile.jpg" alt="profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} /><br />
          <p className="username">{email}</p>
          <p>Purse:₹XXXXXX</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Profile;