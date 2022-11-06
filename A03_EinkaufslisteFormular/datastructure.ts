/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <05.11.2022>
Quellen: Arthur Aguiar Rafael
*/
namespace Einkaufsliste_Formular {
    export interface HandleLoad {
        food: string;
        amount: number;
        comment: string;

    }
    export interface Item {
        [category: string]: HandleLoad[];
    }
    export let data: Item = {
        food: [
            { food: "Zucchini", amount: 300,  comment: "zwei" }
        ],
        amount: [
            { food: "Vodka ", amount: 20 , comment: "shots,shots,shots" }
        ]



    };
}
