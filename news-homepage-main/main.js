function abrirMenu(){
    const navegador = document.getElementById("navegador")

    if (navegador.style.display === "block"){
        navegador.style.display = "none"
    } else {
        navegador.style.display = "block"
    }
}