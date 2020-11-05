//Função que calcula o valor de binário para decimal 
        function CalcDecimal(){
            var binario = document.getElementById("binario").value;
            var numeroFinal = 0;
            var confirme = true
            var expo = binario.length-1;
            for(var x=0;x<binario.length;x++){
                if (binario[x]=="1"){
                    numeroFinal = numeroFinal + (2**expo);
                } else if (binario[x]!="0"){
                    var resultado = document.getElementById("resulBinario");
                    resultado.innerText = "Número digitado é inválido";
                    confirme = false
                }
                expo--;
            } // end for 
            if(confirme){
                var resultado = document.getElementById("resulBinario");
                resultado.innerText = "Resultado: " + numeroFinal;
            }
        } // end CalcDecimal()
        // Função que calcula de decimal para binário
        function CalcBinario(){
            var decimal = document.getElementById("decimal").value;
            var cont = 0;
            decimal = parseInt(decimal);
            var resultado = ""
            for(var x=0;2**x<parseInt(decimal);x++);
            for(var i=0;i<=x;i++){
                if(decimal-(2**(x-i))>=0){
                    console.log(i);
                    resultado = resultado + "1";
                    decimal = decimal - (2**(x-i));
                } else{
                    if(resultado[0]=="1"){
                        resultado = resultado + "0";
                    }
                }
            }
            var resultFinal = document.getElementById("resultDecimal");
            resultFinal.innerText = "Resultado: " + resultado;
        }