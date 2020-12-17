class Logo {
    constructor(params) {
        console.log(params);
    }

    /**
     * Generuoja Logo elemento HTML.
     */
    generateHTML() {
        return `<img src="#" alt="Logo">`;
    }
}

export { Logo };