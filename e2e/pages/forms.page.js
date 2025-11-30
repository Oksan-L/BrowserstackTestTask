class FormsPage {
    get inputField() {
        return $('~text-input');
    }

    get switchButton() {
        return $('~switch');
    }

    get dropdown() {
        return $('~Dropdown');
    }

    get dropdownOption() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]');
    }

    get activeBtn() {
        return $('~button-Active');
    }

    get popup() {
        return $('//*[@resource-id="android:id/message"]');
    }

    get okBtn() {
        return $('//*[@text="OK"]');
    }

    get dropdownTextField() {
        return $('~Dropdown').$('android.widget.EditText');
    }

    async enterText(text) {
        await this.inputField.waitForDisplayed();
        await this.inputField.clearValue();
        await this.inputField.setValue(text);
    }

    async tapSwitch() {
        await this.switchButton.waitForDisplayed();
        await this.switchButton.click();
    }

    async openDropdown() {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.click();
    }

    async selectDropdownOption() {
        await this.dropdownOption.waitForDisplayed();
        await this.dropdownOption.click();
    }

    async submit() {
        await this.activeBtn.waitForDisplayed();
        await this.activeBtn.click();
    }

    async closePopup() {
        await this.okBtn.waitForDisplayed();
        await this.okBtn.click();
    }

    async getSelectedDropdownText() {
        await this.dropdownTextField.waitForDisplayed();
        return await this.dropdownTextField.getText();
    }

}

export default new FormsPage();
