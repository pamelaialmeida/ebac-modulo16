const startScreen = require("../screens/start.screen")
const formsScreen = require("../screens/forms.screen")


describe('Fill in Forms tab', ()=> {

    it('Should fill in the Forms tab', async ()=> {
        await startScreen.accessFormsTab()
        await formsScreen.fillInInputField('Testando')
        await expect(formsScreen.youHaveTypedField).toHaveText('Testando')
        await formsScreen.clickOnSwitchButton()
        await formsScreen.selectOptionInDropdownMenu(3)
        await formsScreen.clickOnActiveButton()
        await formsScreen.clickOnOKButton()
    })
})