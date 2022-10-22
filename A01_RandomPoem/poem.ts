/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.10.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
namespace RandomPoem {
//Arrays//

let subject: string [] = [  "Harry ",  "Hermine ",  "Ron ",  "Hagrid ",  "Snape ",  "Dumbledore "];
let predicate: string [] = [  "braut, liebt, studiert, hasst, zaubert, zerstört"];
let object: string [] = [  "Zaubertränke, den Grimm, Lupin, Hogwarts, die Karte des Rumtreibers, Dementoren "];

//for schleife//

console.log(RandomPoem);

for (let index: number = subject.length; index >= 1; index--)  {  
    let randomPoem: string = getVerse(subject, predicate, object);
    console.log(randomPoem); 
    }
//funktion die Vers erstellt//
function getVerse(_subject: string[], _predicate: string[], _object: string[]) {
    let subjectNum: number = Math.floor(Math.random() * _subject.length);
    let predicateNum: number = Math.floor(Math.random() * _predicate.length);
    let objectNum: number = Math.floor(Math.random() * _object.length);

    let randomVerse = _subject[subjectNum] + "" + _predicate[predicateNum] + "" + _object[objectNum];

   
    _subject.splice(subjectNum, 1); _predicate.splice(predicateNum, 1); _object.splice(objectNum, 1); 
    return randomVerse;
}
}