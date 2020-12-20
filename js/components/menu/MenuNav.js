class MenuNav {
    constructor(params) {
        this.menu = params.menu;
    }

    /**
     * Generuoja menu navigacijos elemento HTML.
     */
    generateHTML() {

        let HTML = '';
        for (let item of this.menu) {
        HTML += `<a class="singleNav" href="#">${item.text}</a>`;

    }
        return HTML;
    }

    
}

export { MenuNav };