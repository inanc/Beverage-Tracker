class UI {

    static addBeverageToUI(newBeverage) {
        const todayDate = new Date();
        newBeverage.date = new Date(newBeverage.date);

        if (newBeverage.date.toDateString() === todayDate.toDateString()) {

            if (newBeverage.name === "tea") {
                this.addTeaToUI(newBeverage);
            } else if (newBeverage.name === "coffee") {

                this.addCoffeeToUI(newBeverage);
            }
        } else {

            Storage.deleteBeverageFromStorage(newBeverage.name, newBeverage.date.toISOString());

        }


    }

    static addTeaToUI(newBeverage) {
        const teaList = document.getElementById("tea-list");
        $("#tea-list").children().css("text-decoration-line", "line-through");

        teaList.innerHTML += `
         <a href="#" class="list-group-item list-group-item-action">${newBeverage.date.toLocaleTimeString()}</a>

       `;
    }

    static addCoffeeToUI(newBeverage) {
        const coffeeList = document.getElementById("coffee-list");
        $("#coffee-list ").children().css("text-decoration-line", "line-through");
        coffeeList.innerHTML += `
        <a href="#" class="list-group-item list-group-item-action">${newBeverage.date.toLocaleTimeString()}</a>

       `;
    }

    static displayMessages(message, type, beverage) {

        const div = document.querySelector(`#${beverage}-div`);

        const messageDiv = document.createElement("div");


        messageDiv.className = `alert alert-${type}`;
        messageDiv.textContent = message;

        div.appendChild(messageDiv);


        setTimeout(function () {
            messageDiv.remove();

        }, 3000);


    }

    static loadAllBeverages(beverages) {
        beverages.forEach(function (beverage) {
            UI.addBeverageToUI(beverage);
        });

    }



}
