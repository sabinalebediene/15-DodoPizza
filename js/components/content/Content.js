import { ContentPizza } from './ContentPizza.js'

class Content {
    constructor(params){
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;
        this.title = params.title;

        this.contentPizzaObj = new ContentPizza(params);

        this.render();
        
    }

    /**
     * Generuoja content elemento HTML.
     */
    generateHTML() { 
        const contentPizzaHTML = this.contentPizzaObj.generateHTML();

        return `<h1 class="title">${this.title}</h1>
                ${contentPizzaHTML}`;
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