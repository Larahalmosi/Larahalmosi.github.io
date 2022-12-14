"use strict";
/*
Aufgabe: <L03_EinkaufslisteFormular>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <12.11.2022>
Quellen: <inspiriert von Aanya Khetarpal>
*/
var Einkaufsliste_Formular;
(function (Einkaufsliste_Formular) {
    /*listener*/
    /*add button clicked*/
    window.addEventListener("load", handleLoad);
    /*function list*/
    function handleLoad(_event) {
        let addButton = document.querySelector("#add");
        let checkboxButton = document.querySelector("#checkbox");
        if (addButton != null) {
            addButton.addEventListener("pointer-down", handleADD);
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
        // Funktion die beim add-button ein list-element hinzufügt//
        function handleADD(_event) {
            //form data auswerten//
            let formData = new FormData(document.forms[0]);
            formData.append("grocery", "amount", "comment");
            //get input value //
            let inputValue = document.getElementById("input");
            let amountValue = document.getElementById("amount");
            let commentValue = document.getElementById("comment");
            let dateValue = document.getElementById("date");
            //create list element//
            let div = document.createElement("div");
            div.classList.add("box");
            let label = document.createElement("label");
            let listdate = document.createElement("p");
            let trash = document.createElement("index");
            let checked = document.createElement("input");
            let listtask = document.querySelector(".tasklist");
            listtask.appendChild(div);
            trash.innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
            checked.type = "checkbox";
            //get Date//
            let date = new Date();
            let day = date.getDay();
            let month = date.getMonth();
            let year = date.getFullYear();
            console.log("Current Date: " + day + ":" + month + ":" + year);
            //create check,edit, delete//
            let createCheckIcon = document.createElement("i");
            let createDelIcon = document.createElement("i");
            let createEditIcon = document.createElement("i");
            let newItem = document.createElement("p");
            let shoppinglist = document.querySelector(".testitem");
            label.innerHTML += inputValue.name + ", " + amountValue.value + ", " + commentValue.value + day + month + year;
            dateValue.innerHTML += "Zuletzt gekauft am: " + dateValue.value;
            dateValue.classList.add("dateString");
            div.appendChild(createCheckIcon);
            div.appendChild(createDelIcon);
            div.appendChild(createEditIcon);
            div.appendChild(label);
            shoppinglist.appendChild(label);
            //Listener buttons//
            document.addEventListener("pointerdown", label);
        }
        //checkitem//
        //editItem//
        function () { }
        //deleteItem//
        function deleteItem(_event) {
            inputValue.parentElement.remove();
        }
        //asynch client//
        async function changeList(_event) {
            let value = await promise;
            let formData = new FormData(document.forms[0]);
            let query = new URLSearchParams(formData);
            await fetch("Einkaufsliste.html" + query.toString);
            alert("received your Message!");
        }
    }
})(Einkaufsliste_Formular || (Einkaufsliste_Formular = {}));
//# sourceMappingURL=EinkaufslisteFormular.js.map