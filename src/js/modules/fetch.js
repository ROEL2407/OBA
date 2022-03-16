import {
    makeItems
} from './create.js';


const main = document.querySelector("main");
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const query = "kookboeken+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia"; /* Kookboeken&dim=Type(book)&dim=Topic(Kookboeken) */
const key = "fff5cd7a65bd87deefd8f70bfb447d42";
const detail = "Default";
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

export const display = document.getElementById('itemList');
display.textContent = "Loading...";

const itemArray = [];
export function getData() {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(response => {
            console.log(response);
            response.results.forEach(item => {
                itemArray.push({
                    id: item.id,
                    title: item.titles[1],
                    author: item.authors,
                    img: item.coverimages[1],
                    desc: item.description[0],
                    link: item.detailLink
                });
            })
            renderData();
        })

        .catch(() => {
            fetch('../src/data.json')
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    response.results.forEach(item => {
                        itemArray.push({
                            id: item.id,
                            title: item.titles[1],
                            author: item.authors,
                            img: item.coverimages[1],
                            desc: item.description[0],
                            link: item.detailLink
                        });
                    })
                    renderData();
                })
                .catch(err => console.error(err));
        })
}

// render data
function renderData() {
    display.textContent = "";
    display.classList.remove("loading");
    makeItems(itemArray);
}