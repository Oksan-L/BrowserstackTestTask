import { RandomGenerator } from '../utils/generators.js';

class LoginPage {
    get emailInput() {
        return $('~input-email');
    }

    get passwordInput() {
        return $('~input-password');
    }

    get loginBtn() {
        return $('~button-LOGIN');
    }

    get emailWarning() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get passwordWarning() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    get loginScreen() {
        return $('~Login-screen');
    }

    get successMessage() { 
        return $('android=new UiSelector().resourceId("android:id/message")'); 
    }

    // Кнопка "OK" в попапі
    get successOkBtn() { 
        return $('android=new UiSelector().resourceId("android:id/button1")'); 
    }

    async openLogin() {
        const btn = await $('~Login');
        await btn.waitForDisplayed();
        await btn.click();
    }

    async clearFields() {
        await this.emailInput.waitForDisplayed();
        await this.emailInput.clearValue();
        await this.passwordInput.clearValue();
    }

    async tapLogin() {
        await this.loginBtn.click();
    }

    async enterRandomCredentials() {
        const username = RandomGenerator.generateEmail(8, 50);
        const password = RandomGenerator.generatePassword(8, 50);

        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);

        return { username, password };
    }

    async isLoginScreenDisplayed() {
        return await this.loginScreen.isDisplayed();
    }

    async waitForSuccessPopup() {
        await this.successMessage.waitForDisplayed({ timeout: 5000 });
        return await this.successMessage.getText();
    }

    // Метод для закриття попапу
    async closeSuccessPopup() {
        await this.successOkBtn.click();
    }

}

export default new LoginPage();
