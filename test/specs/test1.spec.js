// describe("Test App setup", () => {
//     it("check setup", async() => {
//         console.log("Starting test");
//         await $('~App').click();
//         console.log("Clicked on App");
//         await $('~Alert Dialogs').waitForDisplayed();
//         console.log("Alert Dialog is displayed");
//         $('~Alert Dialogs').click();
//         await expect($('~List dialog')).toHaveText('List dialog');
//         console.log("List dialog is displayed");
//         await $('~List dialog').click();
//         console.log("Clicked on List dialog");
//     });
// });
import pageElement from "../pageElement/element"

describe("one basic e2e test",()=> {
    afterEach(async()=> {
        await browser.closeApp()
    })
    beforeEach(async ()=> {
        await browser.launchApp()
    })
    it("run first e2e test", async()=> {
        await pageElement.performEndToEndTesting()
        
    })

    it("read asset", async()=> {
        await pageElement.readAssetText()
    })
})