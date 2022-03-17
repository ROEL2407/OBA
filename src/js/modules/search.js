import { makeItems } from './create.js';
import {display, itemArray} from './fetch.js';


function search() {
    let input = document.getElementById("searchInput");
    display.innerHTML = "";
  
    //search on input
    let search = itemArray.filter(function (d) {
      return (
        d.title.toLowerCase().includes(input.value.toLowerCase()) ||
        d.author[0].toLowerCase().includes(input.value.toLowerCase())
      );
    });
  
    if (search.length === 0) {
      display.innerHTML = '<p id="searchError">geen resultaten gevonden voor <span>' + input.value + '</span></p>';
    }
  
    console.log(search);
  
    makeItems(search);
  }
  
  export function searchBar(event) {
    event.preventDefault();
    search();
  }
  
  function sortTitle() {
    const display = document.getElementById("items");
    display.innerHTML = "";
  
    let newData = globalData.sort((a, b) =>
      a.titles[0] > b.titles[0] ? 1 : b.titles[0] > a.titles[0] ? -1 : 0
    );
  
    console.log(newData);
  
    showData(newData);
  }