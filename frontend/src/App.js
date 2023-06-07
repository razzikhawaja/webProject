import Home from "./Home";
import Header from "./Manager/Header";
import Footer from "./Manager/Footer";
import React from "react";
import AdminLogin from "./Manager/AdminLogin"

import { useState } from "react";



const App=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  return (
    <>
      {
        isLoggedIn ? 
        <>
        <Header/>
        <Home/>
        <Footer/>
        </>
        :
        <AdminLogin setIsLoggedIn={setIsLoggedIn}/>
       
      }
     
    </>
    
  );
};

export default App;



