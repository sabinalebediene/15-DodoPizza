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
                        <div class="listImgOtherGoods">
                            <img class = "imgOtherGoods" src="${this.imgPathO + item.image}" alt="${item.imagealt}">
                            <h2>${item.title}</h2>
                            <p class="otherGoodsSubtitle">${item.subtitle}</p>
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

export { ContentOtherGoods };