/*
Aufgabe: <L03_EinkaufslisteFormular>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <12.11.2022>
Quellen: <inspiriert von Aanya Khetarpal>
*/

namespace Einkaufsliste_Formular {

/*listener*/

window.addEventListener("load", list);

 /*add button clicked*/
window.addEventListener("load", function(): void {
    document.querySelector("input").addEventListener("click", (event) => { if (event.button) { if (document.querySelector("input").value != "") { createItem(); document.querySelector("input").value = ""; } else {alert("Error 271: Must not be empty!"); }}});

});


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



// Funktion die beim add-button ein list-element hinzufügt//
function HandleADD(): void {

    //get input value and create ist element//
    let checkedTask: boolean = false;
    let input: string = document.querySelector("input").value;
    let shoppinglist: any = document.getElementById("shoppinglist");
    let createItem: any = document.createElement("p");
    let newItem: any = document.createElement("li");

    //get Date//
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log("Current Date: " + day + ":" + month + ":" + year); 

    //create button,edit, delete//
    var createCheckIcon: any = document.createElement("i");
    var createDelIcon: any = document.createElement("i");
    shoppinglist.appendChild(newItem);
    newItem.appendChild(createCheckIcon);
    createCheckIcon.classList.add("fas", "fa-square");
    createCheckIcon.setAttribute("id", "check");
    newItem.appendChild(createItem);
    createItem.innerHTML = input;
    newItem.appendChild(createDelIcon);

    //Listener buttons//
    createDelIcon.classList.add("fas", "fa-trash-alt");
    createCheckIcon.addEventListener("click", function(): void {if (!checkedTask) {createCheckIcon.setAttribute("class", "fas fa-check-square"); checkedTask = true;  } 
    else {createCheckIcon.setAttribute("class", "fas fa-square"); }});
    createDelIcon.addEventListener("click", function(): void { shoppinglist.removeChild (newItem); });
    


}
//checkitem//
function{}
//editItem//
function{}
//deleteItem//
function{}
//asynch client//

async function changeList() {
    let value = await promise;
    let formData: FormData = new FormData(document.forms[0]);
    let query:URLSearchParams =new URLSearchParams(formData);
    await fetch ("Einkaufsliste.html"+ query.toString);
    alert("received your Message!");
    
}




}