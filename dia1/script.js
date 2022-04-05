let open = true;

document.querySelector('#btnOpen').addEventListener('click', e => {
    open = true;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
})

function toggleMenu() {
    if (open) {
        document.querySelector('#menu').style.display = 'block';
        document.querySelector('header').style.display = 'none';

        return;
    }

    document.querySelector('#menu').style.display= 'none';
    document.querySelector('header').style.display = 'block';

}