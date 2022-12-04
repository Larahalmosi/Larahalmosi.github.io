/*
Aufgabe: <L08_Einkaufsliste_Datenstruktur>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <04.12.2022>
Quellen: 
*/
namespace Vogelhaus{

    window.addEventListener("load", handleLoad );

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    
    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        background();
        cirkel();
        ellipse();
        triangle();
    }
    function background(): void {
     
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    
    }




}