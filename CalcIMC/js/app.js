function calcularIMC(){
    var name = document.getElementById("input-name").value
    var altura = document.getElementById("input-altura").value
    var peso = document.getElementById("input-peso").value
    if(isValidoForm(name,altura,peso)){
        altura = parseFloat(altura)
        peso = parseFloat(peso)
        var IMC = peso/(altura*altura)
        IMC = IMC.toFixed(2)
        var classificao =  definirClassificacao(IMC)
        var valorFuturo =  "Resutado:" + " " + IMC + " " + classificao
        document.getElementById("result").innerHTML = valorFuturo
    } 
}

function definirClassificacao(IMC){
    if(IMC<18.5) return "Magreza";
    if(IMC>18.5 && IMC<24.99) return "Normal";
    if(IMC>25 && IMC<29.99) return "Sobrepeso";
    if(IMC>30 && IMC<39.99) return "Obesidade grau I";
    return "Obesidade grau II"
}

function isValidoForm(name,altura,peso){
    if(name==""){
        alert("Informe seu nome")
        return false
    } 
    if(altura==""){
        alert("Informe sua altura")
        return false
    } 
    if(peso==""){
        alert("Informe seu peso")
        return false
    }
    return true
}