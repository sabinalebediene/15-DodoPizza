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
                        <div class="listContentImg">
                            <img class = "contentSingleImg" src="${this.imgPathS + item.image}" alt="${item.imagealt}">
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

export { ContentSnaks };