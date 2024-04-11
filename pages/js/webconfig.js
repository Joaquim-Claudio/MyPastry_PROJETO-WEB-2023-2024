

window.onload = function() {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        swal({
            title: "Bem vindo",

            confirmButtonText: "OK",
            confirmButtonColor: "warning"
        })
    })
}