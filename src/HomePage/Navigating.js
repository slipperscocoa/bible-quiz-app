
import React from 'react';
import { Link } from 'react-router-dom';
const Navigating = () => {
    return (
        <nav className="">
            <div className="links">
                <Link to="/tips">Tips</Link>
            </div>
        </nav>
    );
}
export default Navigating;