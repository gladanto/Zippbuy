
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import ReusableButton from "../../components/ReusableButton/ReusableButton";
// import logo from "/assets/logo.png";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   const navigate = useNavigate();

//   const handleLogoClick = () => {
//     navigate("/", { replace: true }); // Ensures it navigates instantly
//   };

//   const handleMobileMenu = () => {
//     console.log("clicked test");
//     navigate("/test");
//   };

//   return (
//     <div className="header-container py-2 px-4 shadow-sm bg-white">
//       <nav className="navbar d-flex justify-content-between align-items-center">
//         <button type="button" onClick={handleLogoClick} className="border-0 bg-transparent p-0">
//           <img src={logo} alt="Logo" className="logo" style={{ height: "40px", cursor: "pointer" }} />
//         </button>
//         <div className="d-flex gap-2 flex-nowrap">
//           <ReusableButton className="reusable-btn login btn-sm" label="Login" onClick={() => console.log("Login clicked")} />
//           <ReusableButton className="reusable-btn register btn-sm" label="Register" onClick={handleMobileMenu} />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../../components/ReusableButton/ReusableButton";
import logo from "/assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  const handleMobileMenu = () => {
    console.log("clicked test");
    navigate("/test");
  };

  return (
    <div className="header-container py-2 px-4 shadow-sm bg-white">
      <nav className="navbar d-flex justify-content-between align-items-center">
        <button 
          type="button" 
          onClick={handleLogoClick} 
          className="border-0 bg-transparent p-0"
          aria-label="Go to home page"
        >
          <img 
            src={logo} 
            alt="Company Logo" 
            className="logo hover-opacity" 
            style={{ 
              height: "40px", 
              cursor: "pointer",
              transition: "opacity 0.0s ease"
            }} 
          />
        </button>
        <div className="d-flex gap-2 flex-nowrap">
          <ReusableButton className="reusable-btn login btn-sm" label="Login" onClick={() => console.log("Login clicked")} />
          <ReusableButton className="reusable-btn register btn-sm" label="Register" onClick={handleMobileMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Header;