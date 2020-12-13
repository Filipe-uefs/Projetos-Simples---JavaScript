const foto = document.querySelector("img")
const ligar = document.getElementById("ligar")
const desligar = document.getElementById("desligar")
foto.addEventListener("click",function(){
    foto.setAttribute('src','img/quebrada.jpg')
    ligar.value = ""
    desligar.value = ""

})
function ligarOnMouse() {
    if(ligar.value!=""){
        foto.setAttribute("src",'img/ligada.jpg')
        ligar.value = "true"
        desligar.value = "false"
    }
}
function desligarOnMouse(){
    if(desligar.value!=""){
        foto.setAttribute("src",'img/desligada.jpg')
        ligar.value = "false"
        desligar.value = "true"
    }
}

ligar.addEventListener("click",function(){
    if(ligar.value=="false" && foto.src!="img/quebrada.jpg"){
        foto.setAttribute("src","img/ligada.jpg")
        ligar.value = "true"
        desligar.value = "false"
    }
})
desligar.addEventListener("click",function(){
    if(desligar.value=="false" && foto.src!="img/quebrada.jpg"){
        foto.setAttribute("src","img/desligada.jpg")
        ligar.value = "false"
        desligar.value = "true"
    }
})
