import HomePage from '../pages/home.page.js';
import FormsPage from '../pages/forms.page.js';
import { randomText } from '../utils/generators.js';

describe('Forms Screen', () => {
    it('001 - should fill form, select dropdown, toggle switch and submit', async () => {
        await HomePage.openForms();
        await expect(FormsPage.inputField).toBeDisplayed();

        const text = randomText();
        await FormsPage.enterText(text);
        await expect(FormsPage.inputField).toHaveText(text);

        const currentState = await FormsPage.switchButton.getAttribute('checked');
        await FormsPage.tapSwitch();

        const newState = await FormsPage.switchButton.getAttribute('checked');
        expect(newState).toBe(currentState === 'true' ? 'false' : 'true');
        
        await FormsPage.openDropdown();
        await FormsPage.selectDropdownOption();

        const selectedText = await FormsPage.getSelectedDropdownText();
        await expect(selectedText).toBe("Appium is awesome");

        await FormsPage.submit();
        await FormsPage.popup.waitForDisplayed({ timeout: 5000 });
        await expect(FormsPage.popup).toBeDisplayed();


        await FormsPage.closePopup();
        await expect(FormsPage.popup).not.toBeDisplayed();
    });

    it('004 - switch negative test', async () => {
        await HomePage.openForms();
        await expect(FormsPage.inputField).toBeDisplayed();

        // Get initial state of the switch
        const initialState = await FormsPage.switchState;

        // Toggle the switch and verify the state has changed
        await FormsPage.tapSwitch();
        await expect(await FormsPage.switchState).not.toEqual(initialState);

        // Toggle the switch back and verify it returns to the initial state
        await FormsPage.tapSwitch();
        await expect(await FormsPage.switchState).toEqual(initialState);
    });

});
