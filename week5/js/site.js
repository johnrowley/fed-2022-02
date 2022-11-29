const APP_SETTINGS = {

    "FAVOURITE_FLAVOUR_KEY": "favFlavor",
    "FAVOURITE_FLAVOUR_ID": "FavouriteFlavor",
    "FAVOURITE_FLAVOUR_TB_ID": "tbFlavour",
    "FAVOURITE_FLAVOUR_LOADED": "FavouriteFlavourLoaded",
}
function init() {
    console.log(` init() `)
}
function btnSave() {
    console.log(` btnSave() `)
    let favouriteFlavour = document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_TB_ID).value;
    console.log(`favouriteFlavour `)
    localStorage.setItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY, favouriteFlavour)

}
function btnRetrieveFlavour() {

    console.log(` btnRetrieveFlavour() `)
    console.log(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY);
    const favouriteFlavour = localStorage.getItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY)
    console.log(` favouriteFlavour `)
    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = favouriteFlavour;

}
function btnDeleteFlavour() {
    console.log(` btnDeleteFlavour() `)
    localStorage.removeItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY);
    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = "";
}

