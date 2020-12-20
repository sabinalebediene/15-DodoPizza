class ContentForm {
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
            HTML += `<div class="contentForm">
                        <div class="listImgPizza">
                            <img class = "imgPizza" src="${this.imgPath + item.image}" alt="${item.imagealt}">
                        </div>
                    </div>`;
    
        }
            return HTML;

    }
}

export { ContentForm };