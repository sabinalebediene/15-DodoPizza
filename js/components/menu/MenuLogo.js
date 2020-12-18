class MenuLogo {
    constructor(params) {
        this.data = params.logo;
        this.logoPath = params.logoPath;
        console.log(this.data);
    }
    /**
     * Generuoja Menu Logo elemento HTML.
     */
    generateHTML() {
        let HTML = '';
            HTML += `<img class="logoMenu" src="${this.logoPath + this.data.logoMenu}" alt="${this.data.logoalt}">`;
        return HTML;
    }
}


export { MenuLogo };