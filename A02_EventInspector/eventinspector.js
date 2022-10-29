"use strict";
/*
Aufgabe: <L02_Eventinspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <29.10.2022>
Quellen: inspiriert von Alexander Holstein und Ann-Kathrin Haas
*/
var EventInspector;
(function (EventInspector) {
    /*listener*/
    window.addEventListener("load", handleLoad);
    /*function*/
    function handleLoad(_event) {
        let div0 = document.querySelector("div0");
        let div1 = document.querySelector("div1");
        let button = document.querySelector("button");
        /*mousemove*/
        document.addEventListener("mousemove", setInfoBox);
        /*click*/
        document.addEventListener("click", loginfo);
        document.body.addEventListener("click", loginfo);
        div0.addEventListener("click", loginfo);
        div1.addEventListener("click", loginfo);
        /*key up*/
        document.addEventListener("key up", loginfo);
        document.body.addEventListener("key up", loginfo);
        div0.addEventListener("key up", loginfo);
        div1.addEventListener("key up", loginfo);
        /*customEvent listener*/
        button.addEventListener("click", createcustomEvent);
        document.addEventListener("CustomEvent", logcustomEvent);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        console.log(span);
        let posX = `${_event.clientX}`;
        let posY = `${_event.clientY}`;
        span.innerHTML = `X: ${posX},<br> Y: ${posY},<br> Target: ${_event.target}`;
        let offsetX = _event.clientX + 15;
        let offsetY = _event.clientY + 15;
        span.style.left = `${offsetX}px`;
        span.style.top = `${offsetY}px`;
    }
    function loginfo(_event) {
        console.log("Type" + _event);
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target" + _event.target);
        console.log(_event);
    }
    /*customEvent is getting created*/
    function createcustomEvent(_event) {
        let event = new CustomEvent("CustomEvent", { bubbles: true });
        let button = document.querySelector("button");
        button.dispatchEvent(event);
    }
    /*customEvent in browser console*/
    function logcustomEvent(_event) {
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=eventinspector.js.map