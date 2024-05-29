const base_url = 'http://localhost:5300'

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
                    Swal.fire({
                        title: "Produto adicionado ao pedido", 
                        showConfirmButton: false,
                        timer: 2000,
                        icon: "success"
                    });

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

})