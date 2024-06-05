const base_url = 'https://mypastry.onrender.com'

window.addEventListener('DOMContentLoaded', event => {


    const addToCart = document.getElementById("addToCart");
    
    if (addToCart !== null) {
        addToCart.addEventListener('click', async () => {
            
            const prod = document.getElementById("prod-data");
            const pid = prod.getAttribute('pid');
            const price = prod.getAttribute('price');
            const quant = document.getElementById('quant').innerText;

            console.log({"pid": pid, "price": parseFloat(price), "quant": parseInt(quant)});

            try{
                const response = await fetch(`${base_url}/cart/add-to-cart`, {
                    headers: {"Content-Type": "application/json"},
                    method: 'POST',
                    body: JSON.stringify({"pid": pid, "price": parseFloat(price), "quant": parseInt(quant)})
                })

                if(response.ok) {
                    await Swal.fire({
                        title: "Produto adicionado ao pedido", 
                        showConfirmButton: false,
                        timer: 2000,
                        icon: "success"
                    });

                    try {
                        /*
                        const response = await fetch(`${base_url}/cart/get-num-items`, {
                            headers: {"Content-Type": "application/json"},
                            method: 'GET'
                        })
            
                        if(response.ok) {
                            const numItems = await response.json();
                            console.log(numItems);
                            document.getElementById('cartQuant').innerText = numItems.quant;
                        }*/

                        location.href = 'https://mypastry.onrender.com/cart/'
            
                    } catch (err) {
                        throw new Error(err);
                    }

                } else {
                    Swal.fire({
                        title: "Erro ao adicionar produto", 
                        showConfirmButton: false,
                        timer: 3000,
                        icon: "error"
                    });
                }

            } catch (err) {
                throw new Error(err)
            }

        })
    }

    const minusBtnList = document.getElementsByClassName('minus');
    if(minusBtnList.length) {
        for(let minusBtn of minusBtnList) {
            minusBtn.addEventListener('click', async() => {
                const pack = {
                    pid: minusBtn.getAttribute('pid'),
                    action: 'decrease'
                }

                try {
                    const response = await fetch(`${base_url}/cart/update-cart-item`, {
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        body: JSON.stringify(pack)
                    })

                    if(response.ok) {
                        location.reload();
                    }

                } catch (err) {
                    throw new Error(err);
                }
            })
        }
    }

    const plusBtnList = document.getElementsByClassName('plus');
    if(plusBtnList.length) {
        for(let plusBtn of plusBtnList) {
            plusBtn.addEventListener('click', async() => {
                const pack = {
                    pid: plusBtn.getAttribute('pid'),
                    action: 'increase'
                }

                try {
                    const response = await fetch(`${base_url}/cart/update-cart-item`, {
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        body: JSON.stringify(pack)
                    })

                    if(response.ok) {
                        location.reload();
                    }

                } catch (err) {
                    throw new Error(err);
                }
            })
        }
    }

    const trashBtnList = document.getElementsByClassName('trash');
    if(trashBtnList.length) {
        for(let trashBtn of trashBtnList) {
            trashBtn.addEventListener('click', async() => {
                const pack ={
                    pid: trashBtn.getAttribute('pid')
                }

                try {
                    const response = await fetch(`${base_url}/cart/delete-cart-item`, {
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        body: JSON.stringify(pack)
                    })

                    if(response.ok) {
                        location.reload();
                    }

                } catch (err) {
                    throw new Error(err);
                }

            })
        }
    }

});