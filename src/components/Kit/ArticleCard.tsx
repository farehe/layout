import React, { useState } from "react";
import "../../assets/scss/main.scss"
import bitcoin  from "../../assets/images/bitcoin.jpg"
import Button from "./Button";


const ArticleCard: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="articleCard m4 shadow-1 p4 radius-30">           
           <img src={bitcoin} alt="" className="responsive radius-30" />
              <div className="p2">
                <div className=" grid col3 data-time">
                    <div className="span1">1372/2/4</div>
                    <div className="span2">12:50</div>
                </div>
                <p className="paragraph py2">In publishing and graphic design, Lorem ipsum is
                         a placeholder text commonly used to demonstrate the visual 
                         form of a document or a typefacIn 
                </p>
                <div className="">
                    <Button label={"More"} onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } } className={"more-button"}/>
                </div>
              </div>
            
        </div>
    );
};

export default ArticleCard;