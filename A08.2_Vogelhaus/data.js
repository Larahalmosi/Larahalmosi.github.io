"use strict";
/*
Aufgabe: <L08_Einkaufsliste_Datenstruktur>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <04.12.2022>
Quellen:
*/
var Vogelhaus;
(function (Vogelhaus) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        background();
        cirkel();
        ellipse();
        triangle();
    }
    function background() {
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
})(Vogelhaus || (Vogelhaus = {}));
//# sourceMappingURL=data.js.map