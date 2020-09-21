//Função que calcula o valor de binário para decimal 
        function myFunction(){
            var binario = document.getElementById("binario").value;
            var numeroFinal = 0;
            var expo = binario.length-1;
            for(var x=0;x<binario.length;x++){
                console.log(binario[x]);
                if (binario[x]=="1"){
                    numeroFinal = numeroFinal + (2**expo);
                }
                expo--;
            }
            var resultado = document.getElementById("resulBinario");
            resultado.innerText = "Resultado: " + numeroFinal;
        }
        // Função que calcula de decimal para binário
        function myFunction2(){
            var decimal = document.getElementById("decimal").value;
            var cont = 0;
            decimal = parseInt(decimal);
            var resultado = ""
            for(var x=0;2**x<parseInt(decimal);x++);
            console.log(x);
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