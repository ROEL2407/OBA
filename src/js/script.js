import {getData} from './modules/fetch.js';
import {searchBar} from './modules/search.js'

getData();
document.querySelector("form").addEventListener("submit", searchBar);