import React from "react";

function Profile({ email, user, click }) {
  const handleLogout = () => {
    window.location.href = "https://zerodha-frontend-n84y.onrender.com/";
  };

  return (
    <>
      <div id="myDialog" draggable="true">
        <i className="fa-solid fa-x" style={{ marginLeft: "140px" }} onClick={click}></i>
        <div style={{ textAlign: "center" }}>
          <img src="https://imgs.search.brave.com/CiY_fGQ7RMsxVVYnKwVbd_8W3J_xsyPr455lonbTdDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzUx/Mi85MDczLzkwNzMz/NzUucG5n" alt="profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} /><br />
          <p className="username">{email}</p>
          <p>Purse:₹XXXXXX</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Profile;