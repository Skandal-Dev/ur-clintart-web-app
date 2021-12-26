import React from "react";
import ReactDOM from "react-dom";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download,{ data, strFileName, strMimeType } from "downloadjs";
import { useRef } from "react";
import domtoimage from "dom-to-image";

function exportToPng(dom) {
    domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
        var link = document.createElement('a');
        link.download = 'card.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }


  export  default function Button() {
    const container = useRef(null);
   
    return (
      <div className="button">
        <View refference={container}></View>
        <button className="btn btn-primary font-ur p-4 btn-lg play-button d-none d-md-inline-block position-relative l-height-5" 
                onClick={() => exportToPng(container.current)}> Download </button>
      </div>
    );
  }

class View extends React.Component{

    
   
    render(){
        

        return (
            <div  id="view">

         
            <div id="" className="ur-card card-c" ref={this.props.refference}>
                
                <img className="card-picture" src="https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_FRANK_N1_HD_188.png" data-src="https://s.acdn.ur-img.com/urimages/perso/ALLSTARS/ALLSTARS_FRANK_N1_HD_188.png" alt="picture"/>
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



            </div>
                
            
        );
    }
}

