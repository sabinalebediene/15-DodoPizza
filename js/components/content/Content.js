import { ContentForm } from './ContentForm.js'

class Content {
    constructor(params){
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;

        this.contentFormObj = new ContentForm(params);

        this.render();
        
    }

    /**
     * Generuoja content elemento HTML.
     */
    generateHTML() { 
        const contentFormHTML = this.contentFormObj.generateHTML();

        return `<div class="contentForm">
                        ${contentFormHTML}         
                </div>`
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