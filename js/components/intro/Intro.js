import { IntroImg } from './IntroImg.js';

class Intro {
    constructor(params) {
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;

        this.singleImgObj = new IntroImg(params);

        this.render();
    }

    /**
     * Generuoja intro elemento HTML.
     */
    generateHTML() {
        const singleImgHTML = this.singleImgObj.generateHTML();

        return singleImgHTML;
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

export { Intro }