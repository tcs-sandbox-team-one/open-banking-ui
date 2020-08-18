import React from 'react';
import { Link } from "react-router-dom";
import {USER_IMAGE} from '../../app-constant/images';

const Sidebar = (props) => {
    return (
        <nav id="sidebar">
            <div className="user-profile">
                <div className="profile-pic"><img src={USER_IMAGE} alt=""/></div>
                <p className="profile-des">John</p>
            </div>
            <ul className="list-unstyled components">
                <li>
                    <Link to="/open-your-account" className="open-your-account">Open Your Account</Link>
                </li>
                <li>
                    <Link to="/#" className="process-dormant-account">Process Dormant Account</Link>
                </li>
                <li>
                    <Link to="/#" className="validate-your-credit-card">Validate your Credit Card</Link>
                </li>
                <li>
                    <Link to="/#" className="process-cheque-book">Process Cheque Book</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;