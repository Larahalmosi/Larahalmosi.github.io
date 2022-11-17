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
    window.addEventListener("load", list);
    /*add button clicked*/
    window.addEventListener("load", function () {
        document.querySelector("input").addEventListener("click", (event) => { if (event.button) {
            if (document.querySelector("input").value != "") {
                createItem();
                document.querySelector("input").value = "";
            }
            else {
                alert("Error 271: Must not be empty!");
            }
        } });
    });
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
    function HandleADD() {
        //get input value and create ist element//
        let checkedTask = false;
        let input = document.querySelector("input").value;
        let shoppinglist = document.getElementById("shoppinglist");
        let createItem = document.createElement("p");
        let newItem = document.createElement("li");
        //get Date//
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        console.log("Current Date: " + day + ":" + month + ":" + year);
        //create button,edit, delete//
        var createCheckIcon = document.createElement("i");
        var createDelIcon = document.createElement("i");
        shoppinglist.appendChild(newItem);
        newItem.appendChild(createCheckIcon);
        createCheckIcon.classList.add("fas", "fa-square");
        createCheckIcon.setAttribute("id", "check");
        newItem.appendChild(createItem);
        createItem.innerHTML = input;
        newItem.appendChild(createDelIcon);
        //Listener buttons//
        createDelIcon.classList.add("fas", "fa-trash-alt");
        createCheckIcon.addEventListener("click", function () {
            if (!checkedTask) {
                createCheckIcon.setAttribute("class", "fas fa-check-square");
                checkedTask = true;
            }
            else {
                createCheckIcon.setAttribute("class", "fas fa-square");
            }
        });
        createDelIcon.addEventListener("click", function () { shoppinglist.removeChild(newItem); });
    }
    //checkitem//
    function () { }
    //editItem//
    function () { }
    //deleteItem//
    function () { }
    //asynch client//
    async function changeList() {
        let value = await promise;
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        await fetch("Einkaufsliste.html" + query.toString);
        alert("received your Message!");
    }
})(Einkaufsliste_Formular || (Einkaufsliste_Formular = {}));
//# sourceMappingURL=EinkaufslisteFormular.js.map