
function rolarDado() {
    return Math.floor(Math.random() * 6 + 1)
} 

function somar2dados() {
    return rolarDado() + rolarDado()
}

const somasPossiveis = [2,3,4,5,6,7,8,9,10,11,12]

let listaResult = document.getElementById('resultados')

let rolar = document.getElementById('rolar')
rolar.addEventListener('click', function () {
    listaResult.innerHTML = ''
    let contador = [0,0,0,0,0,0,0,0,0,0,0]
    for (let i = 0; i < 1000; i++) {
        contador[(somar2dados() - 2)]++        
    }
    for (let i = 0; i < contador.length; i++) {
        let resultado = document.createElement('li')
        let barraResultado = document.createElement('li')
        barraResultado.classList.add('grafico')
        resultado.innerText = `A soma "${somasPossiveis[i]}" foi encontrada ${contador[i]} vezes`
        barraResultado.setAttribute('style', `width: ${contador[i]*1.6}px;`)
        barraResultado.innerText = `${contador[i]/10}%`

        listaResult.append(resultado,barraResultado)
    }
})