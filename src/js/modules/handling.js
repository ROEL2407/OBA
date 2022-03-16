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