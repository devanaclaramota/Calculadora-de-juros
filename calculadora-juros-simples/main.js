let btn = document.querySelector('button')
let res = document.querySelector('.res')
let resParcela = document.querySelector('.res-parcela')

btn.addEventListener('click', valorBem)
function valorBem(){ 

let bem =  parseInt(document.querySelector('#bem').value)
let entrada = parseInt(document.querySelector('#entrada').value)
let parcelas = parseInt(document.querySelector('#parcela').value)
let juros = parseInt(document.querySelector('#juro').value)   

    let valorFinanc = bem - entrada
    let calcJuros = valorFinanc * juros/100 * parcelas
    let totalcomJuros = valorFinanc + calcJuros 
    let valorParcela = totalcomJuros / parcelas



 
    resParcela.innerHTML = (`R$ ${valorParcela}`);


let details = document.querySelector('.details')
details.addEventListener('click', mostrarDetalhes)

function mostrarDetalhes(){
   
       res.innerHTML = (`O valor a ser financiado é de : <strong> ${valorFinanc}</strong> <br> O Cálculo juros é de: <strong>${calcJuros}</strong>  <br> O total com juros é de: <strong>${totalcomJuros}</strong> `)
       
}}
