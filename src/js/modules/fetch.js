/*** Fetching data -> refactor into module later ***/
const main = document.querySelector("main");
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const query = "tolkien";
const key = "1e19898c87464e239192c8bfe422f280";
const secret = "4289fec4e962a33118340c888699438d";
const detail = "Default";
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
    Authorization: `Bearer ${secret}`,
};

itemArray =[];
export function getData() {
    fetch(url, config)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then(response => {
            response.artObjects.forEach(art => {
                itemArray.push({
                    id: art.id,
                    title: art.title,
                    maker: art.principalOrFirstMaker,
                    img: art.webImage.url,
                    place: art.productionPlaces,
                    link: art.links.web
                });
            })
            renderData();
        })
        .catch((err) => {
            console.log(err);
        });
}

// render data
function renderData(data) {
    console.dir(results);
}