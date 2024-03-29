/**
 * Wait for an element existing in the DOM.
 * Example: const htmlElement = await waitForElement("#footer .link");
 * */
export const waitForElement = async (selector: string): Promise<HTMLElement | null> => {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            resolve(document.querySelector(selector) as HTMLElement | null);
            return;
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector) as HTMLElement | null);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
};
