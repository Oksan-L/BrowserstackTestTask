class HomePage {
    get formsButton() { 
        return $('~Forms'); 
    }

    async openForms() {
        await this.formsButton.waitForDisplayed({ timeout: 5000 });
        await this.formsButton.click();
    }
}

export default new HomePage();
