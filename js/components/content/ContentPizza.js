class ContentPizza {
    constructor(params) {
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.singleImg = params.singleImg;

    }

    /**
     * Generuoja content form elementus HTML.
     */
    generateHTML() { 
        let HTML = '';
        for (let item of this.singleImg) {
            HTML += `<div class="listItem">
                        <div class="listImgPizza">
                            <img class = "imgPizza" src="${this.imgPath + item.image}" alt="${item.imagealt}">
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