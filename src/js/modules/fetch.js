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
const url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=kookboeken+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=fff5cd7a65bd87deefd8f70bfb447d42&output=json`

export const display = document.getElementById('itemList');
display.textContent = "Loading...";

export const SuggestionArray = [];
export const itemArray = [];
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
                    link: item.detailLink,
                    subject: item.subject
                });

                SuggestionArray.push({
                    title: item.titles[1],
                    author: item.authors
                });
            })
            renderData();
        })
        .catch(() => {
            fetch('../src/data.json')
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    response.forEach(item => {
                        itemArray.push({
                            id: item.id,
                            title: item.titles[1],
                            author: item.authors,
                            img: item.coverimages[1],
                            desc: item.description[0],
                            link: item.detailLink,
                            subject: item.subject
                        });

                        SuggestionArray.push({
                            title: item.titles[1],
                            author: item.authors
                        });
                    })
                    console.log(SuggestionArray);
                    renderData();
                })
                .catch(err => console.error(err));
        })
}
export function getData2() {
    fetch(url2)
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
                    link: item.detailLink,
                    subject: item.subject
                });

                SuggestionArray.push({
                    title: item.titles[1],
                    author: item.authors
                });
            })
            renderData();
        })
        .catch(() => {
            fetch('../src/staging.json')
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    response.results.forEach(item => {
                        itemArray.push({
                            id: item.id,
                            title: item.titles[0],
                            author: item.authors,
                            link: item.detailLink
                        });

                        SuggestionArray.push({
                            title: item.titles[1],
                            author: item.authors
                        });
                    })
                    console.log(SuggestionArray);
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