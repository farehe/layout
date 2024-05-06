import React, { useState } from "react";
import "../../assets/scss/main.scss"
import faq  from "../../assets/images/faq.png"
import Button from "./Button";


const Faq: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="grid col2 faq my8">
            <div className="span-1 px4">
                <h4 className="title2 relative">Frequently Asked Questions</h4>
                <p className="paragraph py2"> In publishing and graphic design, Lorem ipsum is
                         a placeholder text commonly 
                </p>
                <img src={faq} alt="" className="responsive" />
            </div>      
            <div className="span-1 px4 grid justifyCenter">
            <div className="dropdown">
                <span>In publishing and graphic design, Lorem ipsum graphic design,</span>
                <div className="dropdown-content">
                    <p>In publishing and graphic design, Lorem ipsum is
                         a placeholder text commonly shing and graphic design, Lorem ipsum is
                         a placeholder text commonl !</p>
                </div>
            </div>
            <div className="dropdown">
                <span>In publishing and graphic design, Lorem ipsum graphic design,</span>
                <div className="dropdown-content">
                    <p>In publishing and graphic design, Lorem ipsum is
                         a placeholder text commonly shing and graphic design, Lorem ipsum is
                         a placeholder text commonl !</p>
                </div>
            </div>
            <div className="dropdown">
                <span>In publishing and graphic design, Lorem ipsum graphic design,</span>
                <div className="dropdown-content">
                    <p>In publishing and graphic design, Lorem ipsum is
                         a placeholder text commonly shing and graphic design, Lorem ipsum is
                         a placeholder text commonl !</p>
                </div>
            </div>
            <div className="dropdown">
                <span>In publishing and graphic design, Lorem ipsum graphic design,</span>
                <div className="dropdown-content">
                    <p>In publishing and graphic design, Lorem ipsum is
                         a placeholder text commonly shing and graphic design, Lorem ipsum is
                         a placeholder text commonl !</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Faq;