import React from "react";
import ReactDOM, { render } from "react-dom";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download,{ data, strFileName, strMimeType } from "downloadjs";
import { useRef } from "react";
//import domtoimage from "dom-to-image";
import Editor from "./editor";
import { useState } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import html2canvas from 'html2canvas';
import getImageUrl from 'simple-image-cdn';


function resizeCanvas(canvas, newHeight, newWidth)
{
        var context = canvas.getContext('2d');
        var imageData = context.getImageData(0, 0, canvas.width, canvas.width);
        var newCanvas = document.createElement("canvas");
        newCanvas.height = canvas.height;
        newCanvas.width = canvas.width;
        newCanvas.putImageData(imageData, 0, 0, 0, 0, newWidth, newHeight);
        return newCanvas;
}




function exportToPng(dom, name) {
    /*domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        //document.body.appendChild(img);
        var link = document.createElement('a');
        link.download = name+'.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });*/

    html2canvas(document.getElementById('card'), {  proxy: "http://localhost:3030",
                                                    useCORS: true,
                                                    backgroundColor: null,
                                                    scale: 2,
                                                    allowTaint: true
                                                })
    .then(function(canvas) {

        const img = new Image();
        //const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
        const image = canvas.toDataURL('image/png').replace('image/octet-stream', 'image/png')
        console.log(image);
        const a = document.createElement('a')
        a.setAttribute('download', name+'.png')
        a.setAttribute('href', image)
        a.click()
        img.src= image;
        const httpsrc = getImageUrl(image, {w: '100', h: '100', fit: 'cover' });
        console.log(httpsrc);
        canvas.remove()
    });
  }


  export  default function Button() {
    const container = useRef(null);
    const [nameCard, setNameCard] = useState("BIG MONSTER");
    const [damage, setDamage] = useState(5);
    const [power, setPower] = useState(4);
    const [ability, setAbility] = useState("ability");
    const [bonus, setBonus] = useState("bonus");
    const [lvl, setLvl] = useState(4);
    const [rarity, setRarity] = useState('m');
    const [clan, setClan] = useState('BERZERK');
    const [img, setImg] = useState("https://pbs.twimg.com/media/E8pCxDsXsAAlNn0?format=jpg&name=large");
    const [prismatic, setPrismatic] = useState('');
    const [imageSize, setImageSize] = useState(100);


    return (
      <div className="button">

        <div className="flex">


        <div className="wrap">
        <img id="logo" class="img-fluid" src="https://s.acdn.ur-img.com/img/v3/landingv4/urban-rivals-logo.png" alt="Urban Rivals Logo"  />
        <h4 class="stroke white">Card Generator</h4>



        <View refference={container}
        name_card={nameCard} damage={damage} power={power} ability={ability}
        bonus={bonus} lvl={lvl} clan={clan} rarity={rarity}
        img={img} prismatic={prismatic} imageSize={imageSize}>
        </View>

        <div id="b">
            <button className="btn btn-primary sp  p-4 btn-lg play-button d-none d-md-inline   -block l-height-5"
                onClick={() => exportToPng(container.current, nameCard)}> IMAGE DDL </button>

            <button className="btn button-prism" >
                take a screenshot for PRISMATIC & GIF version
            </button>
        </div>

        </div>

        <Editor name={nameCard} damage={damage} power={power} ability={ability}
        bonus={bonus} lvl={lvl} clan={clan} rarity={rarity}
        img={img} prismatic={prismatic}

        setNameCard={setNameCard} setDamage={setDamage} setPower={setPower} setAbility={setAbility}
        setBonus={setBonus} setLvl={setLvl} setLogo={setClan} setRarity={setRarity}
        setImg={setImg} setPrismatic={setPrismatic} setImg={setImg} setImageSize={setImageSize}>


        </Editor>


        </div>


      </div>
    );
  }


export function Star(){

    return (
        <img className="card-star-on" src="https://s.acdn.ur-img.com/img/v3/card/icon-star-on.png" alt="star"/>
    );
}


export function Stars(lvl){
    console.log(lvl.lvl)
    let arr = [];
    for (let index = 0; index < lvl.lvl; index++) {
        arr.push(<Star></Star>);
    }

    return (
        <div>
            {arr}
        </div>
    );
}

class View extends React.Component{

    // Receive props

    render(){


        let lvl = this.props.lvl;
        let prism = "";
        if (this.props.prismatic)
            prism = "prismatic";
        else
            prism = "";

        return (
            <div  id="view">

            <div id="card" className={`ur-card card-${this.props.rarity} ${prism}`} ref={this.props.refference}>
                <Draggable>
                <img draggable="false" className="card-picture" src={this.props.img} style={{width: `${this.props.imageSize}%`}} data-src="" alt="picture"/>

                </Draggable>
                    <div className={`card-layer layer-${this.props.rarity} ${prism}`}></div>
                    <a className="card-link"></a>
                        <div className={`card-top card-top-${this.props.rarity} ${prism}`}>
                            <a className="card-clan-link">

                                <img className="card-clan img-fluid" src={`https://s.acdn.ur-img.com/urimages/clan/${this.props.clan}_42.png`} alt="All Stars"/>
                            </a>
                        <span className="h6 card-name m-0">{this.props.name_card}</span>
                        </div>
                    <div className="card-bottom">
                        <div className="progress card-progress">
                            <div className="progress-bar" role="progressbar" style={{width: "100%"}}></div>
                        <div className="card-stars">

                                <Stars lvl={this.props.lvl}></Stars>

                            </div>
                            </div>
                            <div className="h5 card-power m-0">{this.props.power}</div>
                            <div className="h5 card-damage m-0">{this.props.damage}</div>
                            <div className="card-ability text-black">
                                {this.props.ability}
                            </div>
                            <div className="card-bonus text-black">{this.props.bonus}</div>

                        </div>


                    </div>



            </div>


        );
    }
}
