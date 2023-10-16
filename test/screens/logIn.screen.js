class LogInScreen {
    get #siteAddress(){
        return $('id:input')
    }

    get #continueButton(){
        return $('id:bottom_button')
    }

    async fillInSiteAddress(siteAddress){
        await this.#siteAddress.setValue(siteAddress)
    }

    async continue(){
        await this.#continueButton.click()
    }
}

module.exports = new LogInScreen()