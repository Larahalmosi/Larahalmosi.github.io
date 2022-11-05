/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <05.11.2022>
Quellen: Arthur Aguiar Rafael
*/
namespace Einkaufsliste_Formular {
    export interface ListItem {
        food: string;
        amount: number;
        comment: string;

    }
    export interface Item {
        [category: string]: ListItem[];
    }
    export let data: Item = {
        food: [
            { food: "Relic", amount: 300,  comment: "zwei" }
        ],
        amount: [
            { food: "Red pill ", amount: 20 , comment: "Realität" }
        ]



    };
}
