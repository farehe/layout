import React, { useState } from "react";
import Button from "./Button";
import headerImage from '../../assets/images/header.png';
import "../../assets/scss/main.scss"


const Header: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="  header">
            <div className=" grid col3 alignCenter navbar">
             
                    <div className="span-2">
                            <p className="guid">Lorem ipsum dolor</p>
                            <h2 className="header-title">Your finansial future</h2>
                            <h2 className="header-title">  <span>strategized</span> today</h2>
                            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum
                                debitis accusamus quam dicta velit aspernatur natus
                                consequatur nulla beatae odit, nostrum sed architecto inventore
                                laudantium deserunt quisquam fugit tenetur!
                            </p>
                            <Button className='' label={'more information'} onClick={function (): void {
                                throw new Error('Function not implemented.');
                            } } />  
                    </div>
                
                    <div className="navbar-menu span-1">
                        <img src={headerImage} alt="" />
                    </div>

            </div>
        </div>

    );
};

export default Header;