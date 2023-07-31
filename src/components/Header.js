import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const Header = () =>  {
    const [btnName, setBtnName] = useState("Login");
    
    useEffect(()=>{
        console.log('Header useEffect called');
    },[btnName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{
                        // btnName = "Logout"
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                        console.log(btnName);
                    }}>{btnName}</button></li>
                </ul>
            </div>  
        </div>
    )
}

export default Header