import { response } from "express";

window.addEventListener('DOMContentLoaded', event => {
    
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
    
    
    const quantLabel = document.getElementById("quant");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    
    if (quantLabel !== null && minus !== null && plus !== null) {
    
        let quant = 1;
    
        minus.addEventListener('click', () => {
            if(quant > 1) {
                quant--;
                quantLabel.innerText = quant;
            }
        })
    
        plus.addEventListener('click', () => {
            quant++;
            quantLabel.innerText = quant;
        })
    }
    
    
    const finishBtn = document.getElementById("finish");
    if (finishBtn !== null) {
        finishBtn.addEventListener('click', async () => {
            await Swal.fire({
                icon: "warning",
                title: "Página em manutenção"
            });
        })
    }

    const backLink = document.getElementById("backLink")
    if(backLink !== null) {
        backLink.addEventListener('click', event => {
            event.preventDefault();
            history.back();
        })

    }

    
    (async function() {

        try {
            const response = await fetch(`${base_url}/cart/get-num-items`, {
                headers: {"Content-Type": "application/json"},
                method: 'GET'
            })

            if(response.ok) {
                const numItems = await response.json();
                console.log(numItems);
                document.getElementById('cartQuant').innerText = numItems.quant;
            }

        } catch (err) {
            throw new Error(err);
        }

    })();

    const accBtn = document.getElementById('accBtn')
    if (accBtn !== null) {
        accBtn.addEventListener('click', e => {
            e.preventDefault()

            Swal.fire({
                title: "<strong>Conta MyPastry</strong>",
                icon: "info",
                html: `
                    Ainda há muitos <b>pastéis</b> para experimentar!
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `
                    Continuar <i class="fa fa-thumbs-up"></i>!
                `,
                confirmButtonAriaLabel: "They stay, great!",
                cancelButtonText: `
                    <span id="logout">Terminar sessão <i class="fa-solid fa-arrow-right-from-bracket"></i></span>
                `,
                cancelButtonAriaLabel: "Log out"
            });

            const logout = document.getElementById('logout');
            if(logout !== null) {
                logout.addEventListener('click', () => {
                    fetch(`${base_url}/auth/logout`, {
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        body: JSON.stringify({action: 'logout'})
                    })

                        .then(response => {
                            if(response.ok) {
                                location.href = base_url;
                            }
                        })
                })
            }
        })
    }

});




