class ContentSnaks { 
    constructor(snaks) {
        this.imgPathS = snaks.imgPathS;
        this.singleImgS = snaks.singleImgS;
    }

    /**
     * Generuoja content form elementus HTML.
     */
    generateHTML() { 
        let HTML = '';
        for (let item of this.singleImgS) {
            
            HTML += `<div class="listItem">
                        <div class="listImgSnaks">
                            <img class = "imgSnaks" src="${this.imgPathS + item.image}" alt="${item.imagealt}">
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

export { ContentSnaks };