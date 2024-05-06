import React, { useState } from "react";
import iconPercentage from '../../assets/images/iconPercentage.png';
import "../../assets/scss/main.scss"


const Card = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div> 
            <div className="grid col6 card-design  alignCenter justifyCenter">
                <div className="span-1">
                    <img src={iconPercentage} alt="" className="img-fluid" />
                </div>
                <div className='paragraph span-5'>debitis accusamus quam dicta velit aspernatur natus consequatur
                nulla beatae odit, nostrum sed architecto inventore laudantium
                deserunt quisquam
                </div>
            </div>
        </div>

    );
};

export default Card;

