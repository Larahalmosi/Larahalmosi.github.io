/*
Aufgabe: <L02_Eventinspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <29.10.2022>
Quellen: inspiriert von Alexander Holstein und Ann-Kathrin Haas
*/

namespace EventInspector {

/*listener*/
window.addEventListener("load", handleLoad);

/*function*/
function handleLoad( _event: Event ): void {

    let div0: HTMLElement = <HTMLElement>document.querySelector("div0");
    let div1: HTMLElement = <HTMLElement>document.querySelector("div1");
    let button: HTMLElement = <HTMLElement>document.querySelector("button");
/*mousemove*/
    document.addEventListener("mousemove", setInfoBox );

 /*click*/
    document.addEventListener("click", loginfo );
    document.body.addEventListener("click", loginfo );
    div0.addEventListener("click", loginfo );
    div1.addEventListener("click", loginfo );

/*key up*/
    document.addEventListener("key up", loginfo);
    document.body.addEventListener("key up", loginfo);
    div0.addEventListener("key up", loginfo);
    div1.addEventListener("key up", loginfo);

/*customEvent listener*/
    button.addEventListener("click", createcustomEvent);
    document.addEventListener("CustomEvent", logcustomEvent);

}


function setInfoBox( _event: MouseEvent): void {

    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
    console.log(span);

    let posX: string = `${ _event.clientX }`;
    let posY: string = `${ _event.clientY }`;
    span.innerHTML = `X: ${posX},<br> Y: ${posY},<br> Target: ${_event.target}`;

    let offsetX: number = _event.clientX + 15;
    let offsetY: number = _event.clientY + 15;
    span.style.left = `${offsetX}px`;
    span.style.top = `${offsetY}px`;

}

function loginfo(_event: Event ): void {

console.log("Type" + _event);
console.log("Current Target:" + _event.currentTarget);
console.log("Target" + _event.target);
console.log (_event);
}

/*customEvent is getting created*/

function createcustomEvent(_event: Event): void {
let event: CustomEvent = new CustomEvent("CustomEvent", {bubbles: true});
let button: HTMLElement = <HTMLElement>document.querySelector("button");
button.dispatchEvent(event);
}

 /*customEvent in browser console*/

function logcustomEvent(_event: Event): void {
    console.log (_event);
}
}