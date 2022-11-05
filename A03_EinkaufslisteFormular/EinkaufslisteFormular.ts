/*
Aufgabe: <L03_EinkaufslisteFormular>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.10.2022>
Quellen: <inspiriert von Alina Stumpf>
*/

namespace Einkaufsliste_Formular {

/*listener*/

window.addEventListener("load", list);

/*function list*/

function list(): void {
    let addButton: Element = document.querySelector("#add");
    let deleteButton: Element = document.querySelector("#trash");
    let checkboxButton: Element = document.querySelector(".checkbox");
    let editButton: Element = document.querySelector("#edit");
    let createdateauto: HTMLElement = <HTMLElement>document.querySelector("#date");

    addButton.addEventListener("click", add);
    deleteButton.addEventListener("click", trash);
    checkboxButton.addEventListener("click", check);
    editButton.addEventListener("click", edit);
    createdateauto.addEventListener("click", createdatenew);

}

/*function Datum*/
function createdatenew (): void {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log("Current Date: " + day + ":" + month + ":" + year);     
}




/*console log item hinzufügen*/
function add(): void {

    console.log("fügt etwas hinzu");
}
/*console log item wegschmeißen */
function trash(): void {

    console.log("weg damit");
}
/*console log item eingekauft */
function check(): void {

    console.log("item eingekauft");
}
/*console log bearbeiten */
function edit(): void {

    console.log("falls sich etwas ändert");
}

/*item hinzufügen*/

function generateContent {
    let food;
    let amount;
    let comment;
    let date
}





}