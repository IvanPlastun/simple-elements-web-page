(function() {
    const TAB_BAR_ITEMS = document.querySelectorAll('.tab-bar__item');
    const TAB_CONTENT = document.querySelectorAll('.tab-content');

    function displayContent(event) {
        event.preventDefault();
        let tabIndex = this.dataset.tabIndex;
        for(let i = 0; i < TAB_CONTENT.length; i++) {
            if(TAB_CONTENT[i].dataset.tabIndex === tabIndex) {
                TAB_CONTENT[i].classList.add('is-visible');
            } else {
                TAB_CONTENT[i].classList.remove('is-visible');
            }
        }

        for(let j = 0; j < TAB_BAR_ITEMS.length; j++) {
            if(this !== TAB_BAR_ITEMS[j]) {
                TAB_BAR_ITEMS[j].classList.remove('is-active');
            } else {
                TAB_BAR_ITEMS[j].classList.add('is-active');
            }
        }
    }

    TAB_BAR_ITEMS.forEach(item => item.addEventListener('click', displayContent));
})();