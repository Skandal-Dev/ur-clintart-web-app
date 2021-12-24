import React from "react";
import ReactDOM from "react-dom";

class View extends React.Component{

    render(){
        return (
            <div className="ur-card card-c">
                
                <img className="card-picture js-lazyload" src="https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_FRANK_N1_HD_188.png" data-src="https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_FRANK_N1_HD_188.png" alt="picture"/>
                    <div className="card-layer layer-c"></div>
                    <a className="card-link"></a>
                        <div className="card-top card-top-c">
                            <a className="card-clan-link">
                                <img className="card-clan img-fluid" src="https://s.acdn.ur-img.com/urimages/clan/ALLSTARS_42.png" alt="All Stars"/>
                            </a>
                        <span className="h6 card-name m-0">Frank</span>
                        </div>
                    <div className="card-bottom">
                        <div className="progress card-progress">
                            <div className="progress-bar" role="progressbar" style={{width: "100%"}}></div>
                        <div className="card-stars">
                            <img className="card-star-on" src="https://s.acdn.ur-img.com/img/v3/card/icon-star-on.png" alt="star"/>
                                <img className="card-star-off" src="https://s.acdn.ur-img.com/img/v3/card/icon-star-off.png" alt="star"/>
                            </div>
                            </div>
                            <div className="h5 card-power m-0">2</div>
                            <div className="h5 card-damage m-0">1</div>
                            <div className="card-ability text-black">Ability at level 
                                <img className="card-star-on" src="https://s.acdn.ur-img.com/img/v3/card/icon-star-on.png" alt="star"/>
                                <img className="card-star-on" src="https://s.acdn.ur-img.com/img/v3/card/icon-star-on.png" alt="star"/>
                            </div>

                        </div>
                        <div className="card-bonus text-black">-2 Opp Power, Min 1</div>
                    </div>
                
            
        );
    }
}

export default View;