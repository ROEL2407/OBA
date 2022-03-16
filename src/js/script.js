/*** Fetching data -> refactor into module later ***/
const main = document.querySelector("main");
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const query = "Kookboeken+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia"; /* Kookboeken&dim=Type(book)&dim=Topic(Kookboeken) */
const key = "fff5cd7a65bd87deefd8f70bfb447d42";
const secret = "4289fec4e962a33118340c888699438d";
const detail = "Default";
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
    Authorization: `Bearer ${secret}`,
};

const display = document.getElementById('itemList');
display.textContent = "Loading...";

const itemArray = [];
function getData() {
    fetch(url, config)
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
        .catch((err) => {
            console.log(err);
        });
}

// render data
function renderData() {
    display.textContent = "";
    display.classList.remove("loading");
    makeItems(itemArray);
}

/* creates an infobox which can be opened to display more information about the art piece */
function makeItems(data) {
    data.forEach(item => {
        const temp = document.createElement('article');
        temp.setAttribute("class", "book");
        temp.id = item.id;
        const output = '<img src="' + item.img + '" alt=""><div><h4>' + item.title + '</h4><p>' + item.author + '</p><p>' + item.desc +'</p><a href="' + item.link + '" target="_blank">Link</a></div>' ;
        temp.innerHTML = output;
        const itemWrapper = document.getElementById("itemList");
        itemWrapper.appendChild(temp);
    })
}

function itemClick() {
    let clickId = "";
    /* checks which item is being clicked and gives the id of the element to the hash router */
    function onClick(event) {
        if ( event.target.classList.contains("book")) {
          clickId = event.target.id;
        }
        window.location.hash = clickId;
    }
    window.addEventListener('click', onClick);
}

getData();