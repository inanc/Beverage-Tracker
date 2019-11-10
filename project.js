const teaButton = document.getElementById("add-tea");
const coffeeButton = document.getElementById("add-coffee");


eventListeners();

function eventListeners() {
    teaButton.addEventListener("click", addTea);
    coffeeButton.addEventListener("click", addCoffee);

    document.addEventListener("DOMContentLoaded", function () {
        let beverages = Storage.getBeveragesFromStorage();
        UI.loadAllBeverages(beverages);

    });


}

function addTea(e) {

    const date = new Date();
    const name = "tea";
    // const isStrikethrough = false;

    const newBeverage = new Beverage(name, date);

    UI.addBeverageToUI(newBeverage);
    Storage.addBeverageToStorage(newBeverage);

    UI.displayMessages("Tea is prepared...", "success","tea");

    e.preventDefault();
}

function addCoffee(e) {

    const date = new Date();
    const name = "coffee";
    // const isStrikethrough = false;

    const newBeverage = new Beverage(name, date);

    UI.addBeverageToUI(newBeverage);
    Storage.addBeverageToStorage(newBeverage);

    UI.displayMessages("Coffee is prepared...", "success","coffee");

    e.preventDefault();
}

