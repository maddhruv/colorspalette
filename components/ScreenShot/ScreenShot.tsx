import React from "react";
import html2canvas from 'html2canvas';
import dynamic from 'next/dynamic'

// const DynamicComponent = dynamic(() =>
//     import('html2canvas').then(html2canvas => { html2canvas.default(document.body).then(canvas => document.body.appendChild(canvas)) }).catch(e => { console("load failed") })
// )


const TakeSS = (identifier) => {
    html2canvas(document.getElementById(`palette-${identifier}`))
        .then((canvas: HTMLCanvasElement) => {
            const x = document.getElementById('downloadImage') as HTMLAnchorElement;
            x.href = canvas.toDataURL();
            x.download = 'ss.png';
            x.click();
        });
}

const ScreenShot: React.FC<{ data }> = ({ data }) => {
    return (
        <button
            onClick={() => TakeSS(data)}> Download ScreenShot</button>
    );
};

export default ScreenShot;
