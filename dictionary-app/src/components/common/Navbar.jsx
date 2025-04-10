import "./Navbar.css"
import React from "react";
import {Link, NavLink} from "react-router-dom"


 const Navbar = () => {

    return (
          <nav >
            <Link to="/" className="title">Verbarium</Link>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>
                    <NavLink to="/add-words">
                        Add Words
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-words">
                        My words
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quiz">
                        Quiz
                    </NavLink>
                </li>

            </ul>
          </nav>

        
    );
};

export default Navbar;