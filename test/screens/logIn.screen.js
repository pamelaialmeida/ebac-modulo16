class LogInScreen {
    get #siteAddress(){
        return $('id:input')
    }

    get #continueButton(){
        return $('id:bottom_button')
    }

    async fillInSiteAddress(siteAddress){
        this.#siteAddress.setValue(siteAddress)
    }

    async continue(){
        this.#continueButton.click()
    }
}

module.exports = new LogInScreen()