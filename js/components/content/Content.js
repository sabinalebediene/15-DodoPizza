import { ContentPizza } from './ContentPizza.js';
import { ContentSnaks } from './ContentSnaks.js';
import { ContentDesserts } from './ContentDesserts.js';
import { ContentDrinks } from './ContentDrinks.js';

class Content {
    constructor(pizza, snaks, dessert, drinks){
        this.selector = pizza.selector;
        this.imgPathP = pizza.imgPathP;
        this.singleImgP = pizza.singleImgP;
        this.titleP = pizza.titleP;

        this.selector = snaks.selector;
        this.imgPathS = snaks.imgPathS;
        this.singleImgS = snaks.singleImgS;
        this.titleS = snaks.titleS;

        this.selector = dessert.selector;
        this.imgPathD = dessert.imgPathD;
        this.singleImgD = dessert.singleImgD;
        this.titleD = dessert.titleD;

        this.selector = drinks.selector;
        this.imgPathDr = drinks.imgPathDr;
        this.singleImgDr = drinks.singleImgDr;
        this.titleDr = drinks.titleDr;

        this.contentPizzaObj = new ContentPizza(pizza);
        this.contentSnaksObj = new ContentSnaks(snaks);
        this.contentDessertsObj = new ContentDesserts(dessert);
        this.contentDrinksObj = new ContentDrinks(drinks);

        this.render();
        
    }

    /**
     * Generuoja content elemento HTML.
     */
    generateHTML() { 
        const contentPizzaHTML = this.contentPizzaObj.generateHTML();
        const contentSnaksHTML = this.contentSnaksObj.generateHTML();
        const contentDessertsHTML = this.contentDessertsObj.generateHTML();
        const contentDrinksHTML = this.contentDrinksObj.generateHTML();

        return `<h1 class="title">${this.titleP}</h1>
                ${contentPizzaHTML}
                <h1 class="title">${this.titleS}</h1>
                ${contentSnaksHTML}
                <h1 class="title">${this.titleD}</h1>
                ${contentDessertsHTML}
                <h1 class="title">${this.titleDr}</h1>
                ${contentDrinksHTML }`;
    }

    /**
     * Selector validacija ir DOM vietos radimas
     */
    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }
    
    /**
     * Header HTML istatyti i DOM
     */
    render() {
        
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM.innerHTML = this.generateHTML();
    }
}

export { Content };