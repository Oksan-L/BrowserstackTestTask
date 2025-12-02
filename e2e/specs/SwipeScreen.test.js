// import SwipePageOld from '../pages/old-swipe.page.js';
// import SwipePage from '../pages/swipe.page.js';

// describe('Swipe Screen', () => {
//     xit('005 - Swipe gesture verification', async () => {

//         await SwipePageOld.openSwipeScreen();

//         await (await SwipePageOld.slideTitle).waitForDisplayed({ timeout: 5000 });
//         await expect(SwipePageOld.slideTitle).toBeDisplayed();

//         await SwipePageOld.swipeRight();

//         await expect(SwipePageOld.slideTitle).not.toBeDisplayed();

//         await SwipePageOld.swipeLeft();

//         await (await SwipePageOld.slideTitle).waitForDisplayed({ timeout: 5000 });
//         await expect(SwipePageOld.slideTitle).toBeDisplayed();
//     });

// });

import SwipePage from '../pages/swipe.page.js';

describe('Swipe Screen', () => {
    it('005 - swipe gesture verification via carousel buttons', async () => {
        const swipeButton = await $('~Swipe');
        await swipeButton.waitForDisplayed({ timeout: 5000 });
        await swipeButton.click();
        await SwipePage.swipeScreen.waitForDisplayed({ timeout: 5000 });
        await expect(SwipePage.swipeScreen).toBeDisplayed();

        // Save the text of the first slide
        const textBefore = await SwipePage.currentSlideText.getText();

        // Click to the second slide
        await SwipePage.clickCarouselButton(1);
        await browser.pause(2000);

        // Verify that the slide text has changed
        const textAfter = await SwipePage.currentSlideText2.getText();
        await expect(textAfter).not.toEqual(textBefore);

        // Return to the first slide
        await SwipePage.clickCarouselButton(0);
        await browser.pause(2000);

        // Check that we are back to the original slide
        const textBack = await SwipePage.currentSlideText.getText();
        await expect(textBack).toEqual(textBefore);
    });
});
