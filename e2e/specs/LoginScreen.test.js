import LoginPage from '../pages/login.page.js';

describe('002 - Login empty text', () => {

    it('should show warnings when username and password fields are empty', async () => {

        // Navigate to login
        await LoginPage.openLogin();
        await expect(LoginPage.emailInput).toBeDisplayed();
        await expect(LoginPage.passwordInput).toBeDisplayed();

        // Clear both fields
        await LoginPage.clearFields();
        await expect(LoginPage.emailInput).toHaveText('Email');
        await expect(LoginPage.passwordInput).toHaveText('Password');

        // Tap Login
        await LoginPage.tapLogin();

        // Warnings appear
        await expect(LoginPage.emailWarning).toBeDisplayed();
        await expect(LoginPage.passwordWarning).toBeDisplayed();
    });

    it('should accept username and password within allowed length range', async () => {

        // Navigate to login
        if (!(await LoginPage.isLoginScreenDisplayed())) {
            throw new Error('Login screen did NOT load correctly');
        }

        // Generate and enter random credentials
        const { username, password } = await LoginPage.enterRandomCredentials();

        console.log('Generated username:', username);
        console.log('Generated password:', password);

        await LoginPage.loginBtn.click();

        // Verify fields are not empty
        if ((await LoginPage.emailInput.getText()) === '') {
            throw new Error('Username field is empty after entering random text');
        }
        if ((await LoginPage.passwordInput.getText()) === '') {
            throw new Error('Password field is empty after entering random text');
        }

        // Verify lengths are within allowed ranges
        if (username.length < 8 || username.length > 60) {
            throw new Error(`Username length ${username.length} is out of allowed range`);
        }
        if (password.length < 8 || password.length > 50) {
            throw new Error(`Password length ${password.length} is out of allowed range`);
        }

        // Wait for and verify success popup
        const messageText = await LoginPage.waitForSuccessPopup();
        if (messageText !== 'You are logged in!') {
            throw new Error(`Success popup did NOT appear or text is incorrect: ${messageText}`);
        }

        // Close popup
        await LoginPage.closeSuccessPopup();
    });

});
