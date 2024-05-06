import React, { useState } from "react";

import whyUs from '../../assets/images/whyUs.png';
import iconPercentage from '../../assets/images/iconPercentage.png';
import "../../assets/scss/main.scss"
import Card from "./Card";


const Whyus: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="whyus">
            <div className=" grid col4  ">

                <div className="span-2 ">
                    <img src={whyUs} alt="" className="img-fluid" />
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum
                        debitis accusamus quam dicta velit aspernatur natus
                        consequatur nulla beatae odit, nostrum sed architecto inventore
                        laudantium deserunt quisquam fugit tenetur!
                    </p>
                    <div className='grid col2 py4'>
                        
                            {/* <div className="grid col6 ">
                                <div className="span-1">
                                    <img src={iconPercentage} alt="" className="img-fluid" />
                                </div>
                                <div className='span-5 paragraph p3 f-b'>debitis accusamus </div>
                            </div> */}
                      
                      
                            <div className="flex alignCenter">
                                
                                    <img src={iconPercentage} alt="" className="img-fluid" />
                              
                                <div className='ml3 paragraph p3 f-b'>debitis accusamus </div>
                            </div>
                        

                    </div>
                    <div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum
                            debitis accusamus quam dicta velit aspernatur natus
                            consequatur nulla beatae odit, nostrum sed architecto inventore
                            laudantium deserunt quisquam fugit tenetur!
                        </p>
                    </div>

                </div>
                <div className=" span-2 cards">
                    
                        <h3 className='title2 py3 relative'>why our team?</h3>
                   
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </div>

    );
};

export default Whyus;