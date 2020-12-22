import { IntroImg } from './IntroImg.js';

class Intro {
    constructor(params) {
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;
        this.itemPerView = params.itemPerView;

        this.singleImgObj = new IntroImg(params);
;

        this.render();
        this.dotClick();
    }

    /**
     * Generuoja intro elemento HTML.
     */
    generateHTML() {
        const singleImgHTML = this.singleImgObj.generateHTML();

        const total = this.singleImg.length;
        const dotsCount = total - this.itemPerView;
        let dotsHTML = '<div class="dot active"></div>';
        dotsHTML += '<div class="dot"></div>'.repeat(dotsCount);
        const listWidth = 100 * total / this.itemPerView;
        const singleImgWidth = 100 / this.singleImg.length;
        

        return `<div class="carousel">
                    <div class="content">
                        <div class="listImg" style="width: ${listWidth}%">
                            ${singleImgHTML}
                        </div>
                    </div>
                    <div class="action">
                        ${dotsHTML}
                    </div>
                </div>`;
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

    dotClick() {
        
    }

    addEvents() {
        // paspaudus taskiukus turi judeti/slinktis turinys

        addEventListener()
    }
}

export { Intro }