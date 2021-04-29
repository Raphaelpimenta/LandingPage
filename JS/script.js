(function(){
    'use strict'

    let menu = document.querySelector('.menu');

    let btnOpen = document.querySelector('.btnMenu_Open');
    let btnClose = document.querySelector('.btnMenu_Close');


    btnOpen.addEventListener('click', function(){
        menu.classList.add('menu_Open');
    });


    btnClose.addEventListener('click', function(){
        menu.classList.remove('menu_Open');
    });

})()