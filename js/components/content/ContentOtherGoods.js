class ContentOtherGoods {
    constructor(otherGoods) {
        this.imgPathO = otherGoods.imgPathO;
        this.singleImgO = otherGoods.singleImgO;
        console.log(otherGoods);
    }

    /**
     * Generuoja content form elementus HTML.
     */
    generateHTML() { 
        let HTML = '';
        for (let item of this.singleImgO) {
            HTML += `<div class="listItem">
                        <div class="listContentImg">
                            <img class = "contentSingleImg" src="${this.imgPathO + item.image}" alt="${item.imagealt}">
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

export { ContentOtherGoods };