class IntroImg {
    constructor(params) {
        this.data = params.singleImg;
        this.imgPath = params.imgPath;
        

    }
    /**
     * Generuoja intro singleImg elementus HTML.
     */
    generateHTML() {
    
        let HTML = '';
        for (let item of this.data) {
             HTML += `<img class="img" src="${this.imgPath + item.image}" alt="${item.imagealt}">`;
        }
        return HTML;
    }
}

export { IntroImg };