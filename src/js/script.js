import {getData, getData2} from './modules/fetch.js';
import {searchBar} from './modules/search.js';

getData();
getData2();

document.querySelector("form").addEventListener("submit", searchBar);