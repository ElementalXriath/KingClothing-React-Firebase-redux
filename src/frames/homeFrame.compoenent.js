import React from "react";
import '../homePage.styles.scss';

const HomePage = () => {

    return(
    <div className="homepage">
        <div className="directory-menu"> 
            <div className="menu-item">
                <div>
                    <h1 className="title">
                        HATS
                        </h1>
                        <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
        <div className="directory-menu"> 
            <div className="menu-item">
                <div>
                    <h1 className="title">
                        JACKETS
                        </h1>
                        <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
        <div className="directory-menu"> 
            <div className="menu-item">
                <div>
                    <h1 className="title">
                        SHOES
                        </h1>
                        <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
        <div className="directory-menu"> 
            <div className="menu-item">
                <div>
                    <h1 className="title">
                        MENS
                        </h1>
                        <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
        <div className="directory-menu"> 
            <div className="menu-item">
                <div>
                    <h1 className="title">
                        WOMAEN
                        </h1>
                        <span className="subtitle">
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage;