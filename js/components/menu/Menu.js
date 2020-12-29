import { MenuLogo } from './MenuLogo.js';
import { MenuNav } from './MenuNav.js'

class Menu {
    constructor (params) {
        this.selector = params.selector;
        this.logoPath = params.logoPath;
        this.logo = params.logo;
        this.menu = params.menu;

        this.navObj = new MenuNav(params);
        this.logoObj = new MenuLogo(params);

        this.render();
        // this.onScroll();
        this.addEvents();
    }
    
    /**
     * Generuoja viso menu elemento HTML.
     */
    generateHTML() {
        const navHTML = this.navObj.generateHTML();
        const logoHTML = this.logoObj.generateHTML();

        return `${logoHTML} 
                <nav class="menuNav">${navHTML}</nav>
                <button class="menuBtn">Krepšelis</button>`;
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
    
    addEvents() {
        const topVisibilityHeight = 200;
        const topHeaderDOM = document.querySelector('.topHeader');
        const stickyDOM = document.querySelector('.sticky');
        addEventListener('scroll', () => {
            if (scrollY > 2000) {
                topHeaderDOM.classList.add('remove');
                stickyDOM.classList.remove('show');
            } else {
                topHeaderDOM.classList.remove('remove');
                stickyDOM.classList.add('show');
            }
        })
    }

}

export { Menu }