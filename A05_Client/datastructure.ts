/*
Aufgabe: <L04_Einkaufsliste_Datenstruktur>
Name: <Lara Sophia Elisabeth Halmosi>
Matrikel: <271343>
Datum: <05.11.2022>
Quellen: Arthur Aguiar Rafael
*/
namespace Einkaufsliste_Formular {
    export interface HandleItemBuild {
        food: string;
        amount: number;
        comment: string;

    }
    export interface Data {
        [category: string]: HandleItemBuild[];
    }
    export let data: Data = {
         
    { food: "Zucchini", amount: 300,  comment: "zwei", date:"15.11.2022" }
    ;
    
    { food: "Vodka ", amount: 20 , comment: "shots,shots,shots",date:"16.11.2022" }
        



    }
}
