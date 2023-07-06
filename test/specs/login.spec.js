const startScreen = require("../screens/start.screen")
const homeScreen = require("../screens/home.screen")
const logInScreen = require("../screens/logIn.screen")

describe('Access Admin Painel', ()=> {

    it('Should login with valid credentials', async ()=> {
   //     await startScreen.skip()
        await homeScreen.logIn()
        await logInScreen.fillInSiteAddress('http://lojaebac.ebaconline.art.br/')
  //      await logInScreen.continue()
    })
})