import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Toaster } from "react-hot-toast";

const GsapTransition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();

  //When the location changes these useEffect runs because we are making the useEffect dependent on location.

  //when a page renders useEffect runs first
  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
      
    }
  }, [location]);

  //keeping location in dependency array means whenever the location changes the page refreshes and runs the useEffect where location is kept in dependency array

  //For gsap
  // 1) target
  // 2)logic

  return (
    <div ref={nodeRef}>
      <Toaster />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
