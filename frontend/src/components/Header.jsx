import React from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import "../taj.css";

export default function Header() {
    const navigate = useNavigate();
  const location = useLocation();

  const handleBookNow = () => {
    navigate("/book");
  };
    return (
        <header className="header">
        
        
       <Link to="/" className="nav-link">Home</Link>
      
        {location.pathname === "/" && (
            <nav>
                <Link to="#con-3">Services</Link>
                <Link to ="#con-4">Location</Link>
                <Link to ="#foot">Contact</Link>
             </nav>
        )}
        
        
  
    

        
            <div className="bnow">
                <Link to="/book">Book Now</Link>
            </div>
        </header>
    );
}
