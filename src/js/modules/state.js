import { display } from "./fetch.js";

export function searchError() {
    let input = document.getElementById("searchInput");
    display.innerHTML = '<p id="searchError">geen resultaten gevonden voor <span>' + input.value + '</span></p>';
}