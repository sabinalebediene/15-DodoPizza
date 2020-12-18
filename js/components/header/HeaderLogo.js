class HeaderLogo {
    constructor(params) {
        this.data = params.logo;
        this.logoPath = params.logoPath;
    }

    /**
     * Generuoja Logo elemento HTML.
     */
    generateHTML() {
        let HTML = '';
            HTML += `<img src="${this.logoPath + this.data.logoHeader}" alt="${this.data.logoalt}">`;
        return HTML;
    }
}
export { HeaderLogo };