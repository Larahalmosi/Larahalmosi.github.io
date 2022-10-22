"use strict";
/*
Aufgabe: <L01_Zufallsgedicht>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.10.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
var RandomPoem;
(function (RandomPoem) {
    //Arrays//
    let subject = ["Harry ", "Hermine ", "Ron ", "Hagrid ", "Snape ", "Dumbledore "];
    let predicate = ["braut, liebt, studiert, hasst, zaubert, zerstört"];
    let object = ["Zaubertränke, den Grimm, Lupin, Hogwarts, die Karte des Rumtreibers, Dementoren "];
    //for schleife//
    console.log(RandomPoem);
    for (let index = subject.length; index >= 1; index--) {
        let randomPoem = getVerse(subject, predicate, object);
        console.log(randomPoem);
    }
    //funktion die Vers erstellt//
    function getVerse(_subject, _predicate, _object) {
        let subjectNum = Math.floor(Math.random() * _subject.length);
        let predicateNum = Math.floor(Math.random() * _predicate.length);
        let objectNum = Math.floor(Math.random() * _object.length);
        let randomVerse = _subject[subjectNum] + "" + _predicate[predicateNum] + "" + _object[objectNum];
        _subject.splice(subjectNum, 1);
        _predicate.splice(predicateNum, 1);
        _object.splice(objectNum, 1);
        return randomVerse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=poem.js.map