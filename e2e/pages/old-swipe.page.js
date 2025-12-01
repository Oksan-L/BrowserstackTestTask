class SwipePage {
    // Кнопка для відкриття Swipe screen
    get swipeScreenBtn() { 
        return $('~Swipe'); 
    }

    // Контейнер екрану свайпу
    get swipeScreen() { 
        return $('~Swipe-screen'); 
    }

    // Карусель свайпів
    get carousel() {
        return $('~Carousel');
    }

    // Заголовок першого слайду
    get slideTitle() {
        return $('//android.widget.TextView[@text="FULLY OPEN SOURCE"]');
    }

    // Відкриваємо екран свайпу
    async openSwipeScreen() {
        await (await this.swipeScreenBtn).waitForDisplayed({ timeout: 5000 });
        await (await this.swipeScreenBtn).click();
        await (await this.swipeScreen).waitForDisplayed({ timeout: 5000 });
    }

    // // Свайп вправо (до наступного слайду)
    // async swipeRight() {
    //     const carouselEl = await this.carousel;
    //     const rect = await carouselEl.getRect();
    //     const startX = rect.x + rect.width * 0.8;
    //     const endX = rect.x + rect.width * 0.2;
    //     const y = rect.y + rect.height / 2;

    //     await driver.touchAction([
    //         { action: 'press', x: startX, y },
    //         { action: 'wait', ms: 200 },
    //         { action: 'moveTo', x: endX, y },
    //         { action: 'release' }
    //     ]);
    // }

    // // Свайп вліво (повернення до попереднього слайду)
    // async swipeLeft() {
    //     const carouselEl = await this.carousel;
    //     const rect = await carouselEl.getRect();
    //     const startX = rect.x + rect.width * 0.2;
    //     const endX = rect.x + rect.width * 0.8;
    //     const y = rect.y + rect.height / 2;

    //     await driver.touchAction([
    //         { action: 'press', x: startX, y },
    //         { action: 'wait', ms: 200 },
    //         { action: 'moveTo', x: endX, y },
    //         { action: 'release' }
    //     ]);
    // }

    async swipeRight() {
    const el = await this.carousel;
    const loc = await el.getLocation(); // { x, y }
    const size = await el.getSize();    // { width, height }

    const startX = loc.x + size.width * 0.8;
    const endX = loc.x + size.width * 0.2;
    const y = loc.y + size.height / 2;

    await driver.touchAction([
        { action: 'press', x: startX, y },
        { action: 'wait', ms: 200 },
        { action: 'moveTo', x: endX, y },
        'release'
    ]);
}

async swipeLeft() {
    const el = await this.carousel;
    const loc = await el.getLocation();
    const size = await el.getSize();

    const startX = loc.x + size.width * 0.2;
    const endX = loc.x + size.width * 0.8;
    const y = loc.y + size.height / 2;

    await driver.touchAction([
        { action: 'press', x: startX, y },
        { action: 'wait', ms: 200 },
        { action: 'moveTo', x: endX, y },
        'release'
    ]);
}

}

module.exports = new SwipePage();
