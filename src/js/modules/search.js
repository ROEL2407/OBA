import {
    makeItems
} from './create.js';
import {
    display,
    itemArray,
    SuggestionArray
} from './fetch.js';


// function search() {
//     const searchWrapper = document.querySelector("#searchWrapper");
//     const suggBox = searchWrapper.querySelector(".autocom-box");
//     let input = document.getElementById("searchInput");
//     display.innerHTML = "";
//     let search = "";
//     if(input.value){
//     //search on input
//     search = itemArray.filter(function (d) {
//         return (
//             d.title.toLowerCase().includes(input.value.toLowerCase()) ||
//             d.author[0].toLowerCase().includes(input.value.toLowerCase())
//         );
//     });
//     search = search.map((data)=>{
//         // passing return data inside li tag
//         return data = `<li>${data}</li>`;
//     });
//     searchWrapper.classList.add("active"); //show autocomplete box
//     showSuggestions(search);

//     let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute("onclick", "select(this)");
//         }
//     }else{
//         searchWrapper.classList.remove("active"); //hide autocomplete box
//     }

//     function select(element){
//         let selectData = element.textContent;
//         inputBox.value = selectData;
//         searchWrapper.classList.remove("active");
//     }

//     function showSuggestions(list){
//         let listData;
//         if(!list.length){
//             userValue = input.value;
//             listData = `<li>${userValue}</li>`;
//         }else{
//           listData = list.join('');
//         }
//         suggBox.innerHTML = listData;
//     }
    



//     if (search.length === 0) {
//         display.innerHTML = '<p id="searchError">geen resultaten gevonden voor <span>' + input.value + '</span></p>';
//     }

//     console.log(search);

//     makeItems(search);
// }

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