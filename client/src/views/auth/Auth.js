import { Outlet } from "react-router-dom";
import React from "react";
import bg from "../../assets/img/register_bg_2.png";

const Auth = () => {
  return (
      <div className="relative w-full h-full min-h-screen py-40 bg-blue-100 font-Montserrat">
        <div className="absolute top-0 w-full h-full bg-no-repeat bg-full blur-lg">
          <img src={bg} alt="bg" className="object-contain w-full h-full" />
        </div>
        <Outlet />
      </div>
  );
};

export default Auth;
