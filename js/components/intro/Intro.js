import { IntroImg } from './IntroImg.js';

class Intro {
    constructor(params) {
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;
        this.itemPerView = params.itemPerView;
        this.activeItem = 0;

        this.singleImgObj = new IntroImg(params);
;

        this.render();
        this.dotClick();
        this.addEvents();
    }

    /**
     * Generuoja intro elemento HTML.
     */
    generateHTML() {
        const singleImgHTML = this.singleImgObj.generateHTML();

        const total = this.singleImg.length;
        let dotsCount = total - this.itemPerView;
        dotsCount = dotsCount > 0 ? dotsCount : 0;

        let dotsHTML = '<div class="dot active" data-index="0"></div>';
        for (let i=1; i <=dotsCount; i++) {
            dotsHTML += `<div class="dot" data-index="${i}"></div>`;
        }
        
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
        this.listImgDOM = this.DOM.querySelector('.content > .listImg');
    }  

    dotClick() {
        const dots = document.querySelectorAll('.dot');
        for (let dot of dots) {
            dot.addEventListener('click', () => {
                dots[this.activeItem].classList.remove('active');
                const index = dot.dataset.index;
                this.activeItem = index;
                dots[this.activeItem].classList.add('active');
                this.listImgDOM.style.marginLeft = this.activeItem * -100 / this.itemPerView + '%';    
            })
        }
    }

    addEvents() {
        this.dotClick();

    }
}

export { Intro }