import React, { useState } from "react";
import "../../assets/scss/main.scss"
import RoadmapCard from "./roadmapCard";
import { CandlesSvg } from "../common/icons";


const Roadmap: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className=" roadmap my24 relative overflowHide">

            <CandlesSvg
                className=" absolute"
                style={{
                    opacity: "0.5",
                    right: "1em",
                    top: "-4em"
                }} />

            <CandlesSvg
                className=" absolute"
                style={{
                    opacity: "0.2",
                    top: "2em",
                    left: "-2em"
                }} />
            <CandlesSvg
                className=" absolute"
                style={{
                    opacity: "0.5",
                    bottom: "-8em",
                    left: "5em"
                }} />
            <CandlesSvg
                className=" absolute"
                style={{
                    opacity: "0.3",
                    bottom: "5em",
                    right: "30em"
                }} />

            <div className="relative container md" style={{
                zIndex: "4"
            }}>
                <div className="grid col3">
                    <div className="span-1"></div>
                    <div className="span-1 text">
                        <h4 className="title2">Our team strategy</h4>
                        <p className="paragraph">In publishing and graphic design, Lorem ipsum is
                            a placeholder text commonly used to demonstrate the visual
                            form of a document or a typefacIn
                        </p>
                    </div>
                    <div className="span-1"></div>
                </div>
                <div className="grid col4 ">
                    <div className="span-2 grid col5 justifyCenter alignCenter">
                        <div className="span-4"><RoadmapCard className="redCard" /></div>
                        <div className=" span-1 grid alignStart justifyStart svgIcon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#FB4762" />
                                <path d="M24.0156 30.5672C24.1253 29.2379 24.3998 27.9289 24.8307 26.6707L24.8019 26.6588L24.0156 30.5672ZM24.0156 30.5672L23.9843 30.5666L23.9843 30.5665L24.0156 30.5672Z" stroke="white" stroke-width="2" />
                                <path d="M23.9598 26.667C21.5582 27.6275 18.8792 27.6275 16.4776 26.667" stroke="white" stroke-width="2" />
                                <path d="M18.7223 22.9258V16.5659C18.7223 15.5333 17.8843 14.6953 16.8517 14.6953C15.8192 14.6953 14.9812 15.5333 14.9812 16.5659C14.9812 17.5984 15.8192 18.4364 16.8517 18.4364H23.5857C24.6183 18.4364 25.4563 17.5984 25.4563 16.5659C25.4563 15.5333 24.6183 14.6953 23.5857 14.6953C22.5532 14.6953 21.7152 15.5333 21.7152 16.5659V22.9258" stroke="white" stroke-width="2" stroke-linecap="round" />
                            </svg>

                        </div>
                    </div>
                    <div className="span-1"></div>
                </div>
                <div className="grid col4 "
                    style={{
                        top: "15em"
                    }}>
                    <div className="span-2"></div>
                    <div className="span-2 grid col5 justifyCenter alignCenter "
                        style={{
                            top: "8em"
                        }}>
                        <div className="span-1 grid alignEnd justifyEnd svgIcon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#8890A5" />
                                <path d="M23.4777 23.9559H16.5027" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.8364 18.7748H16.5016" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0397 14.7206L23.716 7.74563C22.7731 7.61646 21.7139 7.55188 20.5514 7.55188C12.4268 7.55188 9.71429 10.5485 9.71429 19.4998C9.71429 28.464 12.4268 31.4477 20.5514 31.4477C28.6889 31.4477 31.4014 28.464 31.4014 19.4998C31.4014 17.6657 31.2852 16.0769 31.0397 14.7206Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.9984 7.65869V11.0958C22.9984 13.4957 24.9436 15.4397 27.3435 15.4397H31.1552" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="span-4"><RoadmapCard className="grayCard" /></div>

                    </div>
                </div>
                <div className="grid col4 "
                    style={{
                        top: "20em"
                    }}>
                    <div className="span-2 grid col5 justifyCenter alignCenter">
                        <div className="span-4"><RoadmapCard className="yellowCard" /></div>
                        <div className=" span-1 grid alignStart justifyStart svgIcon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#FFD600" />
                                <path d="M32.2283 23.5674H27.046C25.1591 23.5674 23.6289 22.0372 23.6289 20.149C23.6289 18.2619 25.1591 16.7318 27.046 16.7318H32.1876" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.6295 20.0709H27.2332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.1416 14.8583H19.5549" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.6188 20.3376C7.6188 11.7979 10.7185 8.95215 20.0201 8.95215C29.3204 8.95215 32.4201 11.7979 32.4201 20.3376C32.4201 28.876 29.3204 31.7229 20.0201 31.7229C10.7185 31.7229 7.6188 28.876 7.6188 20.3376Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                    <div className="span-2"></div>
                </div>
                <div className="grid col4 "
                    style={{
                        top: "25em"
                    }}>
                    <div className="span-2"></div>
                    <div className="span-2 grid col5 justifyCenter alignCenter">
                        <div className="span-1 grid alignEnd justifyEnd svgIcon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#2223D3" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0983 9.18566C21.2133 10.2044 20.8608 16.6107 21.8895 17.6407C22.9183 18.6682 29.0995 18.1482 30.5845 16.9794C34.157 14.1657 24.9233 5.93315 22.0983 9.18566Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.672 22.2377C29.027 23.5927 25.4345 31.3177 18.3145 31.3177C12.997 31.3177 8.68698 27.0077 8.68698 21.6915C8.68698 15.0664 15.2232 10.8289 17.097 12.7027C18.1758 13.7814 16.9607 18.8577 18.8958 20.794C20.8308 22.7302 26.317 20.8827 27.672 22.2377Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="span-4"><RoadmapCard className="blueCard" /></div>
                    </div>

                </div>
                <div className="grid col4 "
                    style={{
                        top: "30em"
                    }}>
                    <div className="span-2 grid col5 justifyCenter alignCenter">
                        <div className="span-4"><RoadmapCard className="greenCard" /></div>
                        <div className=" span-1 grid alignStart justifyStart svgIcon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#1CA211" />
                                <path d="M20 8V30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25 12H17.5C16.5717 12 15.6815 12.3687 15.0251 13.0251C14.3687 13.6815 14 14.5717 14 15.5C14 16.4283 14.3687 17.3185 15.0251 17.9749C15.6815 18.6313 16.5717 19 17.5 19H22.5C23.4283 19 24.3185 19.3687 24.9749 20.0251C25.6313 20.6815 26 21.5717 26 22.5C26 23.4283 25.6313 24.3185 24.9749 24.9749C24.3185 25.6313 23.4283 26 22.5 26H14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                    <div className="span-2"></div>
                </div>
                <div className="grid col4 "
                    style={{
                        top: "35em"
                    }}>
                    <div className="span-2"></div>
                    <div className=" span-2 grid col5 justifyCenter alignCenter">
                        <div className="span-1 grid alignEnd justifyEnd svgIcon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#FB4762" />
                                <path d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 27.1998C23.9764 27.1998 27.2 23.9763 27.2 19.9998C27.2 16.0234 23.9764 12.7998 20 12.7998C16.0235 12.7998 12.8 16.0234 12.8 19.9998C12.8 23.9763 16.0235 27.1998 20 27.1998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 22.4001C21.3255 22.4001 22.4 21.3256 22.4 20.0001C22.4 18.6746 21.3255 17.6001 20 17.6001C18.6745 17.6001 17.6 18.6746 17.6 20.0001C17.6 21.3256 18.6745 22.4001 20 22.4001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className="span-4"><RoadmapCard className="redCard" /></div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Roadmap;