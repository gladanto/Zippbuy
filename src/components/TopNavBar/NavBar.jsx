
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./NavBar.scss";
// import data from "../../data/data.json";
// import { ExpandMore } from "@mui/icons-material";

// const NavBar = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [activeSubcategory, setActiveSubcategory] = useState(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
//   const navigate = useNavigate(); // Initialize navigate function

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 767);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleCategoryClick = (id) => {
//     if (isMobile) {
//       setActiveCategory((prev) => (prev === id ? null : id));
//       setActiveSubcategory(null);
//     }
//   };

//   const handleSubCategoryClick = (category, subCategory) => {
//     console.log("Clicked Subcategory ID:", subCategory.id);
//     console.log("Respective Category Data:", category);

//     navigate("/menu", { state: { category, subCategory } });
//   };

//   const handleChildSubCategoryClick = (category, subCategory, childSubCategory) => {
//     console.log("Clicked Child Subcategory ID:", childSubCategory.id);
//     console.log("Respective Subcategory ID:", subCategory.id);
//     console.log("Respective Category Data:", category);

//     navigate("/menu", { state: { category, subCategory, childSubCategory } });
//   };

//   return (
//     <nav className="navbar navbar-expand-sm navbar-light bg-light">
//       <div className="container-fluid">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasNavbar"
//           aria-controls="offcanvasNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
//           <div className="offcanvas-header">
//             <h5 className="offcanvas-title">Menu</h5>
//             <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
//           </div>

//           <div className="offcanvas-body">
//             <ul className="navbar-nav">
//               {data.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`nav-item ${activeCategory === category.id ? "active-category" : ""}`}
//                   onMouseEnter={() => !isMobile && setActiveCategory(category.id)}
//                   onMouseLeave={() => !isMobile && setActiveCategory(null)}
//                 >
//                   <a
//                     className="nav-link category-link"
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleCategoryClick(category.id);
//                     }}
//                   >
//                     <div className="icon-wrapper">
//                       {!isMobile && <img src={category.img} alt={category.alt} className="icon" />}
//                       <span className="dropdown-name">{category.name}</span>
//                     </div>
//                   </a>

//                   {activeCategory === category.id && category.subcategories && (
//                     <ul className="dropdown-menu show">
//                       {category.subcategories.map((subcategory) => (
//                         <li
//                           key={subcategory.id}
//                           className={`subcategory-item ${activeSubcategory === subcategory.id ? "active-subcategory" : ""}`}
//                           onMouseEnter={() => !isMobile && setActiveSubcategory(subcategory.id)}
//                           onMouseLeave={() => !isMobile && setActiveSubcategory(null)}
//                         >
//                           <a
//                             className="dropdown-item"
//                             href="#"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               handleSubCategoryClick(category, subcategory);
//                             }}
//                           >
//                             {subcategory.name}
//                             {subcategory.childsubcategories && <ExpandMore className="expand-icon" />}
//                           </a>

//                           {subcategory.childsubcategories?.length > 0 && (
//                             <ul className={`child-dropdown ${activeSubcategory === subcategory.id ? "show" : ""}`}>
//                               {subcategory.childsubcategories.map((child) => (
//                                 <li key={child.id}>
//                                   <a
//                                     className="dropdown-item"
//                                     href="#"
//                                     onClick={(e) => {
//                                       e.preventDefault();
//                                       handleChildSubCategoryClick(category, subcategory, child);
//                                     }}
//                                   >
//                                     {child.name}
//                                   </a>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./NavBar.scss";
import data from "../../data/data.json";
import { ExpandMore } from "@mui/icons-material";

const NavBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeChildSubcategory, setActiveChildSubcategory] = useState(null); // New state for child dropdown
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (id) => {
    if (isMobile) {
      setActiveCategory((prev) => (prev === id ? null : id));
      setActiveSubcategory(null);
      setActiveChildSubcategory(null);
    }
  };

  const handleSubCategoryClick = (category, subCategory) => {
    console.log("Clicked Subcategory ID:", subCategory.id);
    console.log("Respective Category Data:", category);

    if (isMobile) {
      setActiveSubcategory((prev) => (prev === subCategory.id ? null : subCategory.id));
      setActiveChildSubcategory(null); // Reset child subcategory when switching subcategories
    } else {
      navigate("/menu", { state: { category, subCategory } });
    }
  };

  const handleChildSubCategoryClick = (category, subCategory, childSubCategory) => {
    console.log("Clicked Child Subcategory ID:", childSubCategory.id);
    console.log("Respective Subcategory ID:", subCategory.id);
    console.log("Respective Category Data:", category);

    if (isMobile) {
      setActiveChildSubcategory((prev) => (prev === childSubCategory.id ? null : childSubCategory.id));
    } else {
      navigate("/menu", { state: { category, subCategory, childSubCategory } });
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav">
              {data.map((category) => (
                <li
                  key={category.id}
                  className={`nav-item ${activeCategory === category.id ? "active-category" : ""}`}
                  onMouseEnter={() => !isMobile && setActiveCategory(category.id)}
                  onMouseLeave={() => !isMobile && setActiveCategory(null)}
                >
                  <a
                    className="nav-link category-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category.id);
                    }}
                  >
                    <div className="icon-wrapper">
                      {!isMobile && <img src={category.img} alt={category.alt} className="icon" />}
                      <span className="dropdown-name">{category.name}</span>
                    </div>
                  </a>

                  {activeCategory === category.id && category.subcategories && (
                    <ul className="dropdown-menu show">
                      {category.subcategories.map((subcategory) => (
                        <li
                          key={subcategory.id}
                          className={`subcategory-item ${activeSubcategory === subcategory.id ? "active-subcategory" : ""}`}
                          onMouseEnter={() => !isMobile && setActiveSubcategory(subcategory.id)}
                          onMouseLeave={() => !isMobile && setActiveSubcategory(null)}
                        >
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubCategoryClick(category, subcategory);
                            }}
                          >
                            {subcategory.name}
                            {subcategory.childsubcategories && <ExpandMore className="expand-icon" />}
                          </a>

                          {subcategory.childsubcategories?.length > 0 && (
                            <ul className={`child-dropdown ${isMobile && activeChildSubcategory === subcategory.id ? "show" : ""}`}>
                              {subcategory.childsubcategories.map((child) => (
                                <li key={child.id}>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleChildSubCategoryClick(category, subcategory, child);
                                    }}
                                  >
                                    {child.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
