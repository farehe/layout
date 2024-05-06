import React, { useState } from "react";
import Button from "./Button";


interface NavBarProps {
 brandName: string;
 navItems: string[];
}

const NavBar: React.FC<NavBarProps> = ({ brandName, navItems }) => {
 const [selectedIndex, setSelectedIndex] = useState(-1);

 return (
    <div className=" my4 ">
        <nav className=" grid col12 justifyCenter alignCenter navbar">
        <div className=" span-2 justifyCenter">
            <span>{brandName}</span>
        </div>
        <div className=" span-8 ">
            <ul className="justifyCenter">
            {navItems.map((item, index) => (
                <li key={item} className={selectedIndex === index ? "active" : ""} onClick={() => setSelectedIndex(index)}>
                <a href="#">{item}</a>
                </li>
            ))}
            </ul>
        </div>
        <div className="span-2 justifySelfEnd">
        <Button className='' label={'sign in'} onClick={function (): void {
                                throw new Error('Function not implemented.');
                            } } /> 
        </div>
        </nav>
    </div>

 );
};

export default NavBar;