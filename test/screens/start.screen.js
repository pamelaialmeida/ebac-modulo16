class StartScreen{

    get #skipButton(){
        return $('id:button_skip')
    }

    async skip(){
        this.#skipButton.click()
    }

}

module.exports = new StartScreen()