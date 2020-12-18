import { HeaderLogo } from './HeaderLogo.js';

class Header {
    constructor (params) {
        this.selector = params.selector;
        this.logoPath = params.logoPath;
        this.logo = params.logo;
        this.countrySelection = params.countrySelection;
        this.activeCountry = params.activeCountry;
        this.countryList = params.countryList;
        this.title = params.title;
        this.deliveryTime = params.deliveryTime;
        this.rating = params.rating;
        this.phoneTitle = params.phoneTitle;
        this.phoneNumber = params.phoneNumber;
        

        this.logoObj = new HeaderLogo(params);

        this.render();
    }

    /**
     * Generuoja viso header elemento HTML.
     */
    generateHTML() {
        const logoHTML = this.logoObj.generateHTML();
        return `${logoHTML}
                <p class ="headerTitle">${this.title}
                    <a>${this.deliveryTime}</a>
                    <a>${this.rating}</a>
                    <p> class="country">${this.activeCountry}</p></p>
                <p class="phoneTitle">${this.phoneTitle}</p>
                    <a>${this.phoneNumber}</a>`;
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