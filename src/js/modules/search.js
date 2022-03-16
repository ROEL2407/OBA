import { makeItems } from './create.js';
import {display, itemArray} from './fetch.js';


function search() {
    let input = document.getElementById("searchInput");
    display.innerHTML = "";
  
    //search on input
    let search = itemArray.filter(function (d) {
      return (
        d.title[0].toLowerCase().includes(input.value.toLowerCase()) ||
        d.author[0].toLowerCase().includes(input.value.toLowerCase())
      );
    });
  
    //if search is empty show error
    // if (search.length == 0) {
    //   errorSearch();
    // }
  
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
    // let newData = globalData.sort(function (a, b) {
    //   console.log(a);
    //   console.log(b);
    //   return a.titles[0] - b.titles[0];
    // });
  
    let newData = globalData.sort((a, b) =>
      a.titles[0] > b.titles[0] ? 1 : b.titles[0] > a.titles[0] ? -1 : 0
    );
  
    console.log(newData);
  
    showData(newData);
  }