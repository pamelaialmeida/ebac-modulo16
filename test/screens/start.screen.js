class StartScreen{

    get #formsTab(){
        return $('~Forms')
    }

    async accessFormsTab(){
        await this.#formsTab.click()
    }

}

module.exports = new StartScreen()