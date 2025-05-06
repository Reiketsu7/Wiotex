//меню
const knop = document.querySelector('#knop')
const menu = document.querySelector('#menu')

knop.addEventListener('click', () => {
    if (menu.classList.contains('disp') == true) {
        menu.classList.remove('disp');
    } else {
        menu.classList.add('disp');
    }
})

//галерея
const btList = document.querySelectorAll('.bt');
const fotoList = document.querySelectorAll('.foto');
const shadow = document.querySelector('#shadow');

btList.forEach(bt => {
    bt.addEventListener('click', () => {
        let foto = bt.querySelector('.foto');

        if (foto.classList.contains('big')) {
            foto.classList.remove('big');
        } else {
            foto.classList.add('big');
        }

        if (shadow.classList.contains('disp')) {
            shadow.classList.remove('disp');
        } else {
            shadow.classList.add('disp');
        }
    });
});