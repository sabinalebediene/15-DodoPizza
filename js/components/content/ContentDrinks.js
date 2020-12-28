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
                        <div class="listImgSnaks">
                            <img class = "imgSnaks" src="${this.imgPathDr + item.image}" alt="${item.imagealt}">
                            <h2>${item.title}</h2>
                            <p class="snaksSubtitle">${item.subtitle}</p>
                        </div>
                        <div class="row">
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