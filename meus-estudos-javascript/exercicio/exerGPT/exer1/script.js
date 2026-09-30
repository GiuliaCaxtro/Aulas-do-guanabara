let botao = document.querySelector(".botao")
botao.onclick= function() {
    let nome = prompt(`Digite seu nome: `)
    alert(`Ola, ${nome.toUpperCase()}! Prazer em conhecer você!`)
}