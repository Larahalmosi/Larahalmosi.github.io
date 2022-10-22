/*
Aufgabe: <L02_Eventinspector>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.10.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace EventInspector {
/*listener*/
window.addEventListener("load", handleLoad);
window.addEventListener("mousemove", setInfoBox);
window.addEventListener("click", loginfo);
window.addEventListener("key up", loginfo);


let xPosition: number;
let yPosition: number;
/*function*/
function handleLoad() {
    /*mousemove*/
    document.addEventListener("mousemove", setInfoBox );

     /*click*/
    document.addEventListener("click", loginfo );
    body.addEventListener("click", loginfo );
    div.addEventListener("click", loginfo );

 /*key up*/
    document.addEventListener("key up", loginfo);
    body.addEventListener("key up", loginfo);
    div.addEventListener("key up", loginfo);
}


function setInfoBox() {
    xPosition = _event.x;
    yPosition = _event.y;

}

function loginfo() {
console.log("Current Target:" + _event.currentTarget);
console.log("Target: " + _event.target);
}
}