class HomeScreen {
    // Para fazer com que o método vire privado, add # no nome
    get #logInButton(){
        return $('id:button_login_store')
    }

    async logIn(){
        this.#logInButton.click()
    }
}

module.exports = new HomeScreen()