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

             HTML += `<div class="singleImg ">
                        <div class="spacing">
                            <img class="img" src="${this.imgPath + item.image}" alt="${item.imagealt}">
                        </div>
                    </div>`;
        }
        return HTML;
    }
}

export { IntroImg };