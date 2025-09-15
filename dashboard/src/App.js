import React, {useState,useEffect} from "react";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";

const Home = () => {
  let [email,setEmail]=useState();
  let [name,setName]=useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    const name = params.get("name");
    setEmail(email);
    setName(name);
  }, []);

  
  return (
    <>
      <TopBar email={email} user={name}/>
      <Dashboard />
    </>
  );
};

export default Home;