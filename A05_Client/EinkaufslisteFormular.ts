/*
Aufgabe: <L03_EinkaufslisteFormular>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <12.11.2022>
Quellen: <inspiriert von Aanya Khetarpal>
*/

namespace Einkaufsliste_Formular {

/*listener*/

 /*add button clicked*/
window.addEventListener("load", handleLoad );


/*function list*/

function handleLoad(_event: Event): void {
    let addButton: HTMLElement = <HTMLElement>document.querySelector("#add");
    let checkboxButton: HTMLElement = <HTMLElement>document.querySelector("#checkbox");
    if (addButton != null) { addButton.addEventListener("pointer-down", handleADD); }
 


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
    function handleADD(_event: Event): void {
   
    //form data auswerten//
    let formData = new FormData(document.forms[0]);
    formData.append("grocery", "amount", "comment");
    
    //get input value //
 
    let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
    let amountValue: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
    let commentValue: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
    let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
    
    //create list element//
    let div: HTMLElement = document.createElement("div");
    div.classList.add("box");
    let label: HTMLElement = document.createElement("label");
    let listdate: HTMLElement = document.createElement("p"); 
    let trash: HTMLElement = document.createElement("index");
    let checked: HTMLInputElement = document.createElement("input");
  
    
    let listtask: HTMLElement = <HTMLElement>document.querySelector(".tasklist");
    listtask.appendChild(div);
    
    trash.innerHTML = "<i class=\"fa-solid fa-trash\"></i>";
    checked.type = "checkbox";

//get Date//
    let date = new Date();
    let day = date.getDay();
    let month: number = date.getMonth();
    let year = date.getFullYear();
    console.log("Current Date: " + day + ":" + month + ":" + year); 

//create check,edit, delete//
    let createCheckIcon: HTMLElement = document.createElement("i");
    let createDelIcon: HTMLElement = document.createElement("i");
    let createEditIcon: HTMLElement = document.createElement("i");
    let newItem: HTMLElement = document.createElement("p");
    let shoppinglist: HTMLElement = <HTMLElement>document.querySelector(".testitem");


    label.innerHTML += inputValue.name + ", " + amountValue.value + ", " + commentValue.value +  day  + month +  year ;
    dateValue.innerHTML += "Zuletzt gekauft am: " + dateValue.value;
    dateValue.classList.add("dateString");
    div.appendChild(createCheckIcon);
    div.appendChild(createDelIcon);
    div.appendChild(createEditIcon);
    div.appendChild(label);

    shoppinglist.appendChild(label);
  

//Listener buttons//
  
    document.addEventListener("pointerdown",label);


}
//checkitem//




//editItem//
    function{}
//deleteItem//

    function deleteItem(_event: Event): void {

    inputValue.parentElement.remove();
}


//asynch client//

    async function changeList(_event: Event) {
    let value = await promise;
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(formData);
    await fetch ("Einkaufsliste.html" + query.toString);
    alert("received your Message!");
    
}



