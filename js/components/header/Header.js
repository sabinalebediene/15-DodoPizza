import { Logo } from './Logo.js';

class Header {
    constructor (params) {
        this.selector = params.selector;
        this.logo = params.logo;
        this.countrySelection = params.countrySelection;
        this.activeCountry = params.activeCountry;
        this.countryList = params.countryList;
        this.title = params.title;
        this.deliveryTime = params.deliveryTime;
        this.rating = params.rating;
        this.phoneNumber = params.phoneNumber;

        this.render();
    }
    // generuoju: Logo
    // generuoju: countrySelection

    /**
     * Generuoja viso header elemento HTML.
     */
    generateHTML() {
        const logo = new Logo();
        const logoHTML = logo.generateHTML();
        return logoHTML;
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

export { Header }