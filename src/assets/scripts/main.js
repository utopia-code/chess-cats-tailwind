/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
    /* add active class navigation based on url */
    var current = location.pathname.split('/')[1];
    var menuItems = document.querySelectorAll('.js-nav__link');
    
    if (current === "") {
        menuItems[3].classList.add('nav__link--active')
        return;
    }

    for (var i = 0, l = menuItems.length; i < l; i++) {
        if (menuItems[i].getAttribute('href').indexOf(current) !== -1) {
            menuItems[i].classList.add('nav__link--active');
        }
    }
} )();

+( function() {
    /* visible body click event button accordion */

    if (document.body.classList.contains('accordion')) {
        const accordion = document.getElementById('accordion');
        const items = accordion.querySelectorAll('.accordion__item');

        items.forEach((item) => {
            const header = item.querySelector('.accordion__header');
            
            header.addEventListener('click', (e) => {
                const opened_item = accordion.querySelector('.accordion__item--open');
                toggle_item(item); 
                
                if (opened_item && opened_item !== item) {
                    toggle_item(opened_item);
                }
            });
        });

        const toggle_item = (item) => {
            const body = item.querySelector('.accordion__body');
                    
            if (item.classList.contains('accordion__item--open')) {
                body.removeAttribute('style');
                item.classList.remove('accordion__item--open');
            } else {
                body.style.height = body.scrollHeight + 'px';
                item.classList.add('accordion__item--open');
            }
        }
    }
    
} )();

