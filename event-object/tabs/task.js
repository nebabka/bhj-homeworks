const tabs = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tab__content');

function removeTabs() {
    tabs.forEach(tab => {
        tab.classList.remove('tab_active');
    });
};

function removeTabsContent() {
    tabsContent.forEach(tabContent => {
        tabContent.classList.remove('tab__content_active');
    });
};

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        removeTabs();
        removeTabsContent();

        tab.classList.add('tab_active');
        tabsContent[index].classList.add('tab__content_active');
    });
});
