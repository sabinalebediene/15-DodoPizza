class ContentDrinks { 
    constructor(drinks) {
        this.imgPathDr = drinks.imgPathDr;
        this.singleImgDr = drinks.singleImgDr;
    }

    /**
     * Generuoja content form elementus HTML.
     */
    generateHTML() { 
        let HTML = '';
        for (let item of this.singleImgDr) {
            
            HTML += `<div class="listItem">
                        <div class="listImgDrinks">
                            <img class = "imgDrinks" src="${this.imgPathDr + item.image}" alt="${item.imagealt}">
                        </div>
                        <div class="rowContent">
                            <h2 class="contentRowTitle">${item.title}</h2>
                            <p class="drinksSubtitle">${item.subtitle}</p>
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

export { ContentDrinks };