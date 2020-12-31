class ContentDesserts { 
    constructor(dessert) {
        this.imgPathD = dessert.imgPathD;
        this.singleImgD = dessert.singleImgD;
        console.log(this.singleImgD);
    }

    /**
     * Generuoja content form elementus HTML.
     */
    generateHTML() { 
        let HTML = '';
        for (let item of this.singleImgD) {
            
            HTML += `<div class="listItem">
                        <div class="listImgDessert">
                            <img class = "imgDessert" src="${this.imgPathD + item.image}" alt="${item.imagealt}">
                        </div>
                        <div class="rowContent">
                            <h2 class="contentRowTitle">${item.title}</h2>
                            <p class="dessertSubtitle">${item.subtitle}</p>
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

export { ContentDesserts };