window.onload = function() {
    
    const ic_mouse = document.getElementById("ic-mouse");
    ic_mouse.addEventListener('click', function() {
       window.scroll({
        top: 600,
        left: 0,
        behavior: "smooth"
       });
    });
}