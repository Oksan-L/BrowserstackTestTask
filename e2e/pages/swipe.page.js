class SwipePage {

    get swipeScreen() {
        return $('//android.widget.ScrollView[@content-desc="Swipe-screen"]');
    }

    get currentSlideText() {
        return $('(//android.widget.TextView)[5]');
    }

    get currentSlideText2() {
        return $('(//android.widget.TextView)[5+2]');
    }

    get carousel() {
        return $('//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup');
    }

    getCarouselButtonByIndex(index) {
        return this.carousel.$(`//android.view.ViewGroup[@clickable='true'][${index + 1}]`);
    }

    async clickCarouselButton(index) {
        const button = await this.getCarouselButtonByIndex(index);
        await button.waitForDisplayed({ timeout: 5000 });
        await button.click();
    }
}

export default new SwipePage();
