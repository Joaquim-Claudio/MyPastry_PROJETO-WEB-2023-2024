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


    const left_indicator = document.getElementById("left-indicator");
    const right_indicator = document.getElementById("right-indicator");
    const img_wrapper = document.getElementById("img-wrapper");

    if (left_indicator !== null && right_indicator !== null) {
        if (img_wrapper !== null) {

            left_indicator.addEventListener('click', () => {
                let scrollX = img_wrapper.scrollLeft - 280;
                img_wrapper.scroll({
                    left: scrollX,
                    behavior: 'smooth'
                })
            });

            right_indicator.addEventListener('click', () => {
                let scrollX = img_wrapper.scrollLeft + 280;
                img_wrapper.scroll({
                    left: scrollX,
                    behavior: 'smooth'
                })
            });
        }
    }


    const valueLabel = document.getElementById("value");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");

    if (valueLabel !== null && minus !== null && plus !== null) {

        let value = 1;
    
        minus.addEventListener('click', () => {
            if(value > 1) {
                value -= 1;
                valueLabel.innerText = value;
            }
        })
    
        plus.addEventListener('click', () => {
            value += 1;
            valueLabel.innerText = value;
        })
    }


    const addToOrder = document.getElementById("addToOrder");

    if (addToOrder !== null) {
        addToOrder.addEventListener('click', () => {
            Swal.fire({
                title: "Produto adicionado ao pedido", 
                showConfirmButton: false,
                timer: 2000,
                icon: "success"
            });
        })
    }

    const finishBtn = document.getElementById("finish");

    if (finishBtn !== null) {
        finishBtn.addEventListener('click', () => {
            Swal.fire({
                icon: "warning",
                title: "Página em manutenção"
            });
        })
    }

}