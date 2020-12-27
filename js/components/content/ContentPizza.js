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
                        <div class="listImgPizza">
                            <img class = "imgPizza" src="${this.imgPathP + item.image}" alt="${item.imagealt}">
                            <h2>${item.title}</h2>
                            <p class="pizzaSubtitle">${item.subtitle}</p>
                        </div>
                        <div class="row">
                            <div class="priceLeft">${item.price}</div>
                            <div class="priceRigth">Pasirinkti</div>
                        </div>
                    </div>`;
    
        }
            return HTML;

    }
}

export { ContentPizza };