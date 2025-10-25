import React, { useState } from "react";
import { Link } from "react-router";

const LandPageNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button 
            className="btn btn-square btn-ghost"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
    
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Soil Fertility Monitoring and Fertigation</a>
        </div>
      
        <div className="flex-none">
          <button className="btn btn-primary rounded-full mr-5 btn-ghost">
              About this Project
          </button>
          <Link to="/login">
              <button className="btn btn-primary rounded-full mr-5 btn-ghost">
                  Sign Up
              </button>
          </Link>
        </div>
      </div>

      {/* Drawer Sidebar */}
      <div className={`fixed inset-0 z-50 ${isDrawerOpen ? '' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isDrawerOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsDrawerOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute left-0 top-0 h-full w-64 bg-base-200 shadow-xl transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <button 
              className="btn btn-square btn-ghost mb-4"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <ul className="menu">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Features</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandPageNav;