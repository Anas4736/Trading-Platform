import React from "react";

function GoToDashboard({name,email}) {
  const redirectToProjectB = () => {
    window.location.href = `http://localhost:3002/?name=${name}&email=${email}`;
  };

  return (
    <button onClick={redirectToProjectB}>
      Go to Dashboard
    </button>
  );
}

export default GoToDashboard;

// /?userId=${Id}&name=${name}