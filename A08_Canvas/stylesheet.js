"use strict";
/*
Aufgabe: <L08_Einkaufsliste_Datenstruktur>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <26.11.2022>
Quellen:
*/
var Canvas;
(function (Canvas_1) {
    window.addEventListener("load", Canvas);
    let canvas;
    let crc2;
    function Canvas(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#FF0000";
        crc2.fillRect(150, 100, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        //create a cirkel//
        crc2.arc(100, 100, 70, 0, 1.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        // Draw the ellipse//
        crc2.beginPath();
        crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        crc2.stroke();
        //draw triangle//
        crc2.beginPath();
        crc2.moveTo(75, 50);
        crc2.lineTo(100, 75);
        crc2.lineTo(100, 25);
        crc2.fill();
        //pfadobjekt//
        let path = new Path2D();
        path.arc(60, 60, 50, 0, 2 * Math.PI);
        crc2.stroke(path);
        //Koordinatensystem//
        crc2.beginPath();
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
        crc2.stroke();
        //Farbverlauf//
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(.5, "red");
        gradient.addColorStop(1, "gold");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 200, 100);
        //Pattern//let pattern: CanvasRenderingContext = document.createElement('canvas').getContext('2d');
        let pattern = document.createElement('canvas').getContext('2d');
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = '#fec';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=stylesheet.js.map