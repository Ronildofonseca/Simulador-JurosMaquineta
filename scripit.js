
function simular(){

let valorInformado = document.getElementById('valorAdic')
let valorTransf = Number(valorInformado.value)
let parcelaInformada = document.getElementById('jurosPorParcela')
let parcelaTrans = Number(parcelaInformada.value)
let select1 = document.getElementById("typeSale");
let opcaoTexto1 = select1.options[select1.selectedIndex].text;
let select = document.getElementById("prazoRecebimento");
let opcaoTexto = select.options[select.selectedIndex].text;


switch (opcaoTexto1) {
    case 'Débito':
        let taxaMaqui = 0.0148
        let calcJuros = valorTransf*taxaMaqui
        let valorRecebido = valorTransf - calcJuros
        let newSpan = document.getElementById('textItem')
        newSpan.innerHTML  = `R$ ${valorRecebido.toFixed(2)}`
        let newSpan2 = document.getElementById('textItem2')
        newSpan2.innerHTML  = `Taxa de 1,48%`
        break;
    case 'Crédito':
        switch (opcaoTexto) {
            case '1 dia útil':
                if(parcelaTrans == "1"){
                    let taxaMaqui = 0.0345
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${valorRecebido.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 3,45%`
                }else if(parcelaTrans == "2"){
                    let taxaMaqui = 0.0566
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let duasX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${duasX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 5,66%`
                } else if(parcelaTrans == "3"){
                    let taxaMaqui = 0.0812
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let tresX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${tresX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 8,12%`
                } else if(parcelaTrans == "4"){
                    let taxaMaqui = 0.0902
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let quatroX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${quatroX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 9,02%`
                } else if(parcelaTrans == "5"){
                    let taxaMaqui = 0.0992
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let cincoX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${cincoX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 9,92%%`
                } else if(parcelaTrans == "6"){
                    let taxaMaqui = 0.1082
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let seisX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${seisX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 10,82%`
                } else if(parcelaTrans == "7"){
                    let taxaMaqui = 0.1172
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let seteX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${seteX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 11,72%`
                } else if(parcelaTrans == "8"){
                    let taxaMaqui = 0.1262
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let oitoX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${oitoX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 12,62%`
                } else if(parcelaTrans == "9"){
                    let taxaMaqui = 0.1464
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let noveX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${noveX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 14,64%`
                }else if(parcelaTrans == "10"){ 
                    let taxaMaqui = 0.1572
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let dezX = valorRecebido 
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${dezX.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 15,72%`   
                }else{
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `[**ERRO**]`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Valor de parcelas inválido!`   

                }
        break;
                    
            case '30 dias úteis':
               
                if(parcelaTrans == "1"){
                    let taxaMaqui = 0.0314
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${valorRecebido.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 3,14%`
                }else if(parcelaTrans >= '2' && parcelaTrans <= '10'){
                    let taxaMaqui = 0.0400
                    let calcJuros = valorTransf*taxaMaqui
                    let valorRecebido = valorTransf - calcJuros
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `R$ ${valorRecebido.toFixed(2)}`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Taxa de 4,0%`
                }else{
                    let newSpan = document.getElementById('textItem')
                    newSpan.innerHTML  = `[**ERRO**]`
                    let newSpan2 = document.getElementById('textItem2')
                    newSpan2.innerHTML  = `Valor de parcelas inválido!` }
                
        break;
        }
        break;
    }
}
    
       

      