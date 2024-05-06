import React, { useState } from "react";
import "../../assets/scss/main.scss";
import imageLogo from "../../assets/images/logotype.svg"



const Footer: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="footer  my24">
            
            <div className="grid col4">
               <div className="span-1 shadow-1">
                <img src={imageLogo} alt="" className="responsive py4" />
                <p className="paragraph">In publishing and graphic design, Lorem 
                    ipsum is a placeholder text commonly used 
                    to demonstrate the visual form of a document 
                </p>
                <div className="social">
                    <p >soacial</p>
                    <div className="grid col4 py4">
                        <div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.877 0H4.95901C2.2318 0 0 2.23081 0 4.95901V14.877C0 17.6042 2.2318 19.836 4.95901 19.836H14.877C17.6042 19.836 19.836 17.6042 19.836 14.877V4.95901C19.836 2.23081 17.6042 0 14.877 0ZM9.91802 14.0504C7.63539 14.0504 5.78543 12.1997 5.78543 9.91802C5.78543 7.63539 7.63539 5.78543 9.91802 5.78543C12.1997 5.78543 14.0506 7.63539 14.0506 9.91802C14.0506 12.1997 12.1997 14.0504 9.91802 14.0504ZM14.0506 4.54568C14.0506 5.23027 14.605 5.78543 15.2904 5.78543C15.9757 5.78543 16.5301 5.23027 16.5301 4.54568C16.5301 3.86108 15.9757 3.30592 15.2904 3.30592C14.605 3.30592 14.0506 3.86108 14.0506 4.54568Z" fill="#8890A5"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.68364 19.8329V10.8009H9.73068L10.1836 7.26456H6.68364V5.01207C6.68364 3.99162 6.96796 3.29295 8.43252 3.29295H10.2883V0.14012C9.38575 0.0431434 8.4777 -0.00314075 7.56965 0.00016526C4.87636 0.00016526 3.0272 1.64435 3.0272 4.66274V7.25795H0V10.7943H3.03381V19.8329H6.68364Z" fill="#8890A5"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4316 4.38376C19.4459 4.57662 19.4459 4.76836 19.4459 4.96011C19.4459 10.8283 14.9795 17.5902 6.81699 17.5902C4.30222 17.5902 1.96597 16.8617 0 15.5966C0.357049 15.6374 0.700873 15.6517 1.07225 15.6517C3.14732 15.6517 5.05709 14.9509 6.58336 13.7552C4.63171 13.7144 2.99634 12.4361 2.43212 10.6773C2.70652 10.7181 2.98202 10.7456 3.27074 10.7456C3.66857 10.7456 4.06859 10.6905 4.43997 10.5947C2.40457 10.1825 0.8805 8.39616 0.8805 6.23843V6.18333C1.47227 6.51283 2.15882 6.71891 2.88614 6.74646C1.69047 5.95081 0.906948 4.58984 0.906948 3.05034C0.906948 2.22604 1.12625 1.47007 1.51084 0.811074C3.69612 3.50327 6.98118 5.26316 10.6641 5.45601C10.5958 5.12541 10.5539 4.78269 10.5539 4.43887C10.5539 1.99242 12.5331 0 14.9927 0C16.2711 0 17.4249 0.535573 18.2359 1.40175C19.2388 1.2089 20.1997 0.837522 21.0526 0.329499C20.7232 1.35987 20.0212 2.22604 19.101 2.77594C19.9947 2.67897 20.8609 2.43212 21.6565 2.08829C21.0526 2.96769 20.2978 3.75122 19.4316 4.38376Z" fill="#8890A5"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.211 0.602271C21.1845 0.740354 22.1149 1.77107 22.2333 2.84596C22.6524 6.78531 22.6524 10.6053 22.2333 14.5434C22.1149 15.6183 21.1845 16.6503 20.211 16.7871C14.2749 17.5901 8.27181 17.5901 2.33745 16.7871C1.3631 16.6499 0.43271 15.6183 0.314333 14.5434C-0.104778 10.605 -0.104778 6.78531 0.314333 2.84596C0.43271 1.77107 1.3631 0.740047 2.33745 0.602271C8.27181 -0.200757 14.2747 -0.200757 20.211 0.602271ZM9.3947 4.604V12.7868L15.0317 8.69555L9.3947 4.604Z" fill="#8890A5"/>
                            </svg>
                        </div>
                    </div>
                </div>
               </div>
               <div className="span-3 shadow-1">
                    <div className="grid col3 justifyCenter">
                        <div className=" grid  justifyCenter">
                            <p>learn more</p>
                            <ul className="p0">
                                <li><a href="default.asp">Home</a></li>
                                <li><a href="news.asp">News</a></li>
                                <li><a href="contact.asp">Contact</a></li>
                                <li><a href="about.asp">About</a></li>
                            </ul>
                        
                        </div>
                        <div className=" grid  justifyCenter">
                            <p>learn more</p>
                            <ul className="p0">
                                <li><a href="default.asp">Home</a></li>
                                <li><a href="news.asp">News</a></li>
                                <li><a href="contact.asp">Contact</a></li>
                                <li><a href="about.asp">About</a></li>
                            </ul>
                        
                        </div>
                        <div className=" grid  justifyCenter">
                            <p>learn more</p>
                            <ul className="p0">
                                <li><a href="default.asp">Home</a></li>
                                <li><a href="news.asp">News</a></li>
                                <li><a href="contact.asp">Contact</a></li>
                                <li><a href="about.asp">About</a></li>
                            </ul>
                        
                        </div>
                    </div>
                    <div className="mt24 copyRight">
                        <p>© 2019 Lift Media | All Rights Reserved</p>
                    </div>

                </div>

            </div>
  
        </div>

    );
};

export default Footer;