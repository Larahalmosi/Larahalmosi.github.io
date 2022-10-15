/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <27>
Datum: <13.10.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
//Array//

let subjekt: string [] = [  "Harry ",  "Hermine ",  "Ron ",  "Hagrid ",  "Snape ",  "Dumbledore "];
let prädikat: string [] = [  "braut, liebt, studiert, hasst, zaubert, zerstört"];
let objekt: string [] = [  "Zaubertränke, den Grimm, Lupin, Hogwarts, die Karte des Rumtreibers, Dementoren "];

//for schleife//

console.log("hello")

for ((let index: number = 5; index >= 1; index--))  {  
    console.log(getVerse); 
    }
//funktion die Vers erstellt//
function getVerse():string{
    let subjektNumber: number = Math.floor(Math.random() * _subjects.length);
    let prädikatNumber: number = Math.floor(Math.random() * _verbs.length);
    let objektNumber: number = Math.floor(Math.random() * _objects.length);}