import { Observable, fromEvent } from "rxjs";

const carSelector = <HTMLSelectElement>document.getElementById("cars");

var select$ = fromEvent(carSelector, "change");

select$.subscribe((x) => console.log(carSelector.value));
