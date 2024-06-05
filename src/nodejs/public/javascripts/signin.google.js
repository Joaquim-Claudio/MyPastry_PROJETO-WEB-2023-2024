window.addEventListener('DOMContentLoaded', event => {
    
    function handleCredentialResponse(response) {
        // Enviar o token para o servidor
        fetch('https://mypastry.onrender.com/auth/google/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: response.credential })
        }).then(async response => {
            if(response.ok) {
                const data = await response.json()
                console.log(data);
                location.href('https://mypastry.onrender.com');
            }
        })
        .catch(err => {
            throw new Error(err);
        });
    }
    
})