import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronRight, FaChevronDown, FaBars } from "react-icons/fa";
import Spares from "../../assets/spares.png";
import Stores from "../../assets/stores.png";
import FMCG from "../../assets/FMCG.png";
import Freelance from "../../assets/freelance.png";
import TechService from "../../assets/techservice.png";
import styles from "./NavBar.module.css"; // Ensure you have proper CSS

const NavBar = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSub, setHoveredSub] = useState(null);
    const [expandedSub, setExpandedSub] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const categories = [
        { 
            name: "Spares", 
            imgSrc: Spares, 
            alt: "Spares Icon", 
            link: "#",
            subCategories: [
                { name: "Main Engine", link: "#" },
                { name: "Auxiliary Engine", link: "#" },
                { 
                    name: "Pumps", 
                    link: "#",
                    subCategories: [
                        { name: "Fuel Pumps", link: "#" },
                        { name: "Water Pumps", link: "#" }
                    ]
                },
                { name: "Auxiliary Machines", link: "#" }
            ]
        },
        { 
            name: "Stores", 
            imgSrc: Stores, 
            alt: "Stores Icon", 
            link: "#",
            subCategories: [
                { name: "Cabin Stores", link: "#" },
                { name: "Gakey", link: "#" },
                { 
                    name: "Air Valves", 
                    link: "#",
                    subCategories: [
                        { name: "High Pressure", link: "#" },
                        { name: "Low Pressure", link: "#" }
                    ]
                },
                { name: "Shipsew Catalog", link: "#" }
            ]
        },
        { 
            name: "Provissions", 
            imgSrc: FMCG, 
            alt: "Provissions Icon", 
            link: "#",
            subCategories: [{ name: "Ship Service", link: "#" }]
        },
        { 
            name: "Service", 
            imgSrc: TechService, 
            alt: "Service Icon", 
            link: "#",
            subCategories: [
                { name: "CDT Gayeing", link: "#" },
                { name: "UTG", link: "#" },
                { name: "Steel Renewal", link: "#" },
                { name: "Safety Service", link: "#" },
                { name: "Painting", link: "#" }
            ]
        },
        { 
            name: "Freelance", 
            imgSrc: Freelance, 
            alt: "Freelance Icon", 
            link: "#",
            subCategories: [
                { name: "Auditing", link: "#" },
                { name: "Surveys", link: "#" },
                { name: "Pre-Purchase Inspection", link: "#" },
                { name: "Superintendent", link: "#" }
            ]
        }
    ];

    /** Renders subcategories recursively */
    const renderSubCategories = (subCategories, level = 1) => (
        <ul className={`${styles.dropdownMenu} ${level > 1 ? styles.subMenu : ""}`} style={{ right: 0, left: "auto" }}>
            {subCategories.map((sub, idx) => (
                <li 
                    key={idx} 
                    className={styles.dropdownItem}
                    onMouseEnter={() => setHoveredSub(sub.name)}
                    onMouseLeave={() => setHoveredSub(null)}
                >
                    <a href={sub.link} className={styles.link}>{sub.name}</a>
                    {sub.subCategories && (
                        <button 
                            className={styles.toggleBtn}
                            onClick={(e) => {
                                e.stopPropagation();
                                setExpandedSub(expandedSub === sub.name ? null : sub.name);
                            }}
                        >
                            {expandedSub === sub.name ? <FaChevronDown /> : <FaChevronRight />}
                        </button>
                    )}
                    {hoveredSub === sub.name && sub.subCategories && renderSubCategories(sub.subCategories, level + 1)}
                </li>
            ))}
        </ul>
    );

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light px-3">
            <div className="container-fluid">
                
                {/* Mobile Menu Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <FaBars />
                </button>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}>
                    <div className="navbar-nav d-flex w-100 justify-content-between">
                        {categories.map((category, index) => (
                            <div 
                                key={index} 
                                className={`${styles.navItem} ${styles.w100}`}
                                onMouseEnter={() => setHoveredCategory(index)}
                                onMouseLeave={() => {
                                    setHoveredCategory(null);
                                    setHoveredSub(null);
                                    setExpandedSub(null);
                                }}
                            >
                                <a 
                                    href={category.link} 
                                    className={styles.navLink} 
                                    role="button"
                                >
                                    {/* Show Image on PC, Hide on Mobile */}
                                    <img 
                                        src={category.imgSrc} 
                                        alt={category.alt} 
                                        className={`${styles.navImage} d-none d-md-inline`} 
                                    />
                                    <span>{category.name}</span>
                                </a>
                                {hoveredCategory === index && category.subCategories && renderSubCategories(category.subCategories)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
