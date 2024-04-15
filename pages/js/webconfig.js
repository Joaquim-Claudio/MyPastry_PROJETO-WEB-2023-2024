window.onload = function() {

    const btnOpenMenu = document.getElementById("ic-menu");
    if (btnOpenMenu !== null) {
        btnOpenMenu.addEventListener ('click', function() {
            const menu_layout = document.getElementById("menu");
            menu_layout.style.display = 'block';
            document.body.style.overflow = 'hidden';
        })
    } 
    
    const btnCloseMenu = document.getElementById("close-menu");
    if (btnCloseMenu !== null) {

        btnCloseMenu.addEventListener('click', function () {
            const menu_layout = document.getElementById("menu");
            menu_layout.style.display = 'none';
            document.body.style.overflow = 'visible';
        })
    }
    
    const ic_mouse = document.getElementById("ic-mouse");
    if (ic_mouse !== null) {

        ic_mouse.addEventListener('click', function() {
           window.scroll({
            top: 600,
            left: 0,
            behavior: "smooth"
           });
        });

    }



}