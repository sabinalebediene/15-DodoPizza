import { ContentPizza } from './ContentPizza.js';
import { ContentSnaks } from './ContentSnaks.js'

class Content {
    constructor(pizza, snaks){
        this.selector = pizza.selector;
        this.imgPathP = pizza.imgPathP;
        this.singleImgP = pizza.singleImgP;
        this.titleP = pizza.titleP;
        this.selector = snaks.selector;
        this.imgPathS = snaks.imgPathS;
        this.singleImgS = snaks.singleImgS;
        this.titleS = snaks.titleS;

        this.contentPizzaObj = new ContentPizza(pizza);
        this.contentSnaksObj = new ContentSnaks(snaks);

        this.render();
        
    }

    /**
     * Generuoja content elemento HTML.
     */
    generateHTML() { 
        const contentPizzaHTML = this.contentPizzaObj.generateHTML();
        const contentSnaksHTML = this.contentSnaksObj.generateHTML();

        return `<h1 class="title">${this.titleP}</h1>
                ${contentPizzaHTML}
                <h1 class="title">${this.titleS}</h1>
                ${contentSnaksHTML}`;
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