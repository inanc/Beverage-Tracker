class Storage {

    static addBeverageToStorage(newBeverage) {
        let beverages = this.getBeveragesFromStorage();

        beverages.push(newBeverage);
        localStorage.setItem("beverages", JSON.stringify(beverages));

    }

    static getBeveragesFromStorage() {
        let beverages;

        if (localStorage.getItem("beverages") === null) {
            beverages = [];
        } else {
            beverages = JSON.parse(localStorage.getItem("beverages"));

        }

        return beverages;
    }

    static deleteBeverageFromStorage(name, date) {
        let beverages = this.getBeveragesFromStorage();

        beverages.forEach(function (beverage, index) {

            if (beverage.name === name && beverage.date === date) {
                beverages.splice(index, 1);
            }
        });

        localStorage.setItem("beverages", JSON.stringify(beverages));


    }

    static clearAllBeveragesFromStorage() {

        localStorage.removeItem("beverages");

    }

}
