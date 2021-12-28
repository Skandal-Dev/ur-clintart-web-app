import { useRef } from "react";
import domtoimage from "dom-to-image";

function exportToPng(dom) {
    domtoimage
      .toPng(dom)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }


  export default function Button() {
    const container = useRef(null);
  
    return (
      <div className="button" ref={container}>
        <button onClick={() => exportToPng(container.current)}>export</button>
      </div>
    );
  }