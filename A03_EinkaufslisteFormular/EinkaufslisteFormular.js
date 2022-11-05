"use strict";
/*
Aufgabe: <L03_EinkaufslisteFormular>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <22.10.2022>
Quellen: <inspiriert von Alina Stumpf>
*/
var Einkaufsliste_Formular;
(function (Einkaufsliste_Formular) {
    /*listener*/
    window.addEventListener("load", list);
    /*function list*/
    function list() {
        let addButton = document.querySelector("#add");
        let deleteButton = document.querySelector("#trash");
        let checkboxButton = document.querySelector(".checkbox");
        let editButton = document.querySelector("#edit");
        let createdateauto = document.querySelector("#date");
        addButton.addEventListener("click", add);
        deleteButton.addEventListener("click", trash);
        checkboxButton.addEventListener("click", check);
        editButton.addEventListener("click", edit);
        createdateauto.addEventListener("click", createdatenew);
    }
    /*function Datum*/
    function createdatenew() {
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        console.log("Current Date: " + day + ":" + month + ":" + year);
    }
    /*console log item hinzufügen*/
    function add() {
        console.log("fügt etwas hinzu");
    }
    /*console log item wegschmeißen */
    function trash() {
        console.log("weg damit");
    }
    /*console log item eingekauft */
    function check() {
        console.log("item eingekauft");
    }
    /*console log bearbeiten */
    function edit() {
        console.log("falls sich etwas ändert");
    }
})(Einkaufsliste_Formular || (Einkaufsliste_Formular = {}));
//# sourceMappingURL=EinkaufslisteFormular.js.map