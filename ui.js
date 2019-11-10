class UI {

    static addBeverageToUI(newBeverage) {

        if (newBeverage.name === "tea") {
            this.addTeaToUI(newBeverage);
        } else if (newBeverage.name === "coffee") {
            this.addCoffeeToUI(newBeverage);
        }

    }

    static addTeaToUI(newBeverage) {
        const teaList = document.getElementById("tea-list");
        //add strikethrough style
        $("#tea-list").children().css("text-decoration-line", "line-through");

        teaList.innerHTML += `<a href="#" class="list-group-item list-group-item-action">${newBeverage.date.toLocaleTimeString()}</a>`;
    }

    static addCoffeeToUI(newBeverage) {
        const coffeeList = document.getElementById("coffee-list");
        $("#coffee-list ").children().css("text-decoration-line", "line-through");

        coffeeList.innerHTML += `<a href="#" class="list-group-item list-group-item-action">${newBeverage.date.toLocaleTimeString()}</a>`;
    }

    static displayMessages(message, type, beverage) {

        const div = document.querySelector(`#${beverage}-div`);

        const messageDiv = document.createElement("div");

        messageDiv.className = `alert alert-${type}`;
        messageDiv.textContent = message;

        div.appendChild(messageDiv);

        // alert for 3 seconds
        setTimeout(function () {
            messageDiv.remove();

        }, 3000);

    }

    static loadAllBeverages(beverages) {
        const todayDate = new Date();

        beverages.forEach(function (beverage) {
            /*
            * Date in local storage is ISO 8601 formatted.
            * Convert it date object
            * */
            beverage.date = new Date(beverage.date);

            // Control the day of beverage
            if (beverage.date.toDateString() === todayDate.toDateString()) {

                UI.addBeverageToUI(beverage);
            } else {
                // if it is not the same day don't show and delete from storage.
                Storage.deleteBeverageFromStorage(beverage.name, beverage.date.toISOString());
            }

        });

    }


}
