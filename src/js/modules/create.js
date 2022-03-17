/* creates an item with information of a book */
export function makeItems(data) {
    data.forEach(item => {
        const temp = document.createElement('article');
        temp.setAttribute("class", "book");
        temp.id = item.id;
        const output = '<img src="' + item.img + '" alt=""><div><h4>' + item.title + '</h4><p>' + item.author + '</p><p>' + item.desc +'</p><p>Categorie(ën):' + item.subject + '</p><a href="' + item.link + '" target="_blank">Meer informatie</a></div>' ;
        temp.innerHTML = output;
        const itemWrapper = document.getElementById("itemList");
        itemWrapper.appendChild(temp);
    })
}