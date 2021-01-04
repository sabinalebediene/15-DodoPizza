class DelPay { 
    constructor(params){
        this.selector = params.selector;
        this.htitle = params.htitle;
        this.title1 = params.title1;
        this.title2 = params.title2;
        this.subtitle1 = params.subtitle1;
        this.subtitle2 = params.subtitle2;
        this.subtitle3 = params.subtitle3;
        this.subtitle4 = params.subtitle4;
        this.price1 = params.price1;
        this.price2 = params.price2;
        
        

        this.render();

    }
    /**
     * Generuoja viso delPay elemento HTML.
     */
    generateHTML() {

        let HTML = '';
            HTML +=`<div class="delPayHeader">
                        <h1>${this.htitle}</h1>
                    </div>
                    <div class="delPayContainer">
                        <div class="delPayContent">
                            <h1 class="contentHeader">${this.title1}</h1>
                            <p class="contentTitle">${this.subtitle1}</p>
                        </div>
                        <div class="delPayContent">
                            <h1 class="contentHeader">${this.price1}</h1>
                            <p class="contentTitle">${this.subtitle2}</p>
                            <h1 class="contentHeader">${this.price2}</h1>
                            <p class="contentTitle">${this.subtitle3}</p>
                            <p class="contentTitle">${this.subtitle4}</p>
                        </div>
                        <div class="delPayContent">
                            <h1 class="contentHeader">PRISTATYMO ZONA RIBOTA</h1>
                            <img class="map" src="../img/map.jpg" alt="map">
                            <span class="deliveryZoneContent">
                                <span class="deliveryZoneTitle">Pristatymo zona</span>
                            </span>
                        </div>
                    </div>`;
        return HTML;
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


export { DelPay };