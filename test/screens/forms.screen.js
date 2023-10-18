class FormsScreen {
    
    get #inputField(){
        return $('~text-input')
    }

    get youHaveTypedField(){
        return $('~input-text-result')
    }

    get #switchButton(){
        return $('~switch')
    }

    get #dropdownMenu(){
        return $('~Dropdown')
    }

    get #selectOptions(){
        return $$('//android.widget.CheckedTextView')        
    }

    get #activeButton(){
        return $('~button-Active')
    }

    get #okButton(){
        return $('//android.widget.LinearLayout/android.widget.Button[3]')
    }

    get displayedMessage(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')
    }

    async fillInInputField(text){
        await this.#inputField.setValue(text)
    }

    async clickOnSwitchButton(){
        await this.#switchButton.click()
    }

    async selectOptionInDropdownMenu(item){
        await this.#dropdownMenu.click()
        await this.#selectOptions[item].click()
    }

    async clickOnActiveButton(){
        await this.#activeButton.click()
    }

    async clickOnOKButton(){        
        await this.#okButton.click()
    }

}

module.exports = new FormsScreen()