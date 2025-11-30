import HomePage from '../pages/home.page.js';
import FormsPage from '../pages/forms.page.js';
import { randomText } from '../utils/generators.js';

describe('Forms Screen Tests', () => {
    it('Should fill form, select dropdown, toggle switch and submit', async () => {

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
});

