class ContentPizza {
    constructor(pizza) {
        this.imgPathP = pizza.imgPathP;
        this.singleImgP = pizza.singleImgP;

    }

    /**
     * Generuoja content form elementus HTML.
     */
    generateHTML() { 
        let HTML = '';
        for (let item of this.singleImgP) {
            HTML += `<div class="listItem">
                        <div class="listContentImg">
                            <img class = "contentSingleImg" src="${this.imgPathP + item.image}" alt="${item.imagealt}">
                        </div>
                        <div class="rowContent">
                            <h2 class="contentRowTitle">${item.title}</h2>
                            <p class="contentRowSubtitle">${item.subtitle}</p>
                            <div class="priceLeft">${item.price}</div>
                            <div class="priceRigth">
                            <button class="contentBtn">Pasirinkti</button>
                        </div>
                    </div>
                </div>`;
    
        }
            return HTML;

    }
}

export { ContentPizza };