import React, { useState } from "react";
import "../../assets/scss/main.scss"
import Button from "./Button";
import ArticleCard from "./ArticleCard";


const Article: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="article my24">
            
            <div className="grid col2">
                <h4 className="span1 title2 relative">news and articles</h4>
                <div className="span1 grid justifyEnd ">
                    <Button label={"show more"} onClick={function (): void {
                            throw new Error("Function not implemented.");
                        } } className={"red-button"}/>
                </div>
            </div>
            <div className="grid col3">
                <div className="span1"><ArticleCard/></div>
                <div className="span1"><ArticleCard/></div>
                <div className="span1"><ArticleCard/></div>
            </div>
           
        
        </div>

    );
};

export default Article;