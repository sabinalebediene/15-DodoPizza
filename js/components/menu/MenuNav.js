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
        HTML += `<nav class="menuNav">
                    <a href="#">${item.text}</a> 
                </nav>`;
            }
        return HTML;
    }

    
}

export { MenuNav };