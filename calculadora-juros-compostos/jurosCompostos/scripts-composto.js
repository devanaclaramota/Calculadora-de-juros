
        let btn = document.querySelector('.btn')
        let res = document.querySelector('.res-parcela')

        btn.addEventListener('click', composto)

        function composto(){
            let capital = parseFloat(document.querySelector('#capital').value)
            let tempo = parseFloat(document.querySelector('#tempo').value)
            let juros = parseFloat(document.querySelector('#juro').value) /100
           

            let montante = capital*(1+juros)**tempo
           let total = montante.toFixed(2)

            res.innerHTML = (`Seu rendimento é de: ${total}`)
        }  