const selectEl = (el) => document.querySelector(el);

const selectElAll = (el) => document.querySelectorAll(el);

const toggleEl = (btnEl, el) => {
    btnEl.addEventListener('click', () => {
        el.classList.toggle('active');
    });
}

const toggleElAll = (el) => {
    el.forEach(eachEl => {
        eachEl.addEventListener('click', () => {
            eachEl.classList.toggle('active');
        });
    });
};

toggleEl(selectEl('.burger'), selectEl('.navbar-nav'));

toggleElAll(selectElAll('.menu-item-has-children > a'));
