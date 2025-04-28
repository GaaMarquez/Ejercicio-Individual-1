const main = function(){
    const Bmas = document.getElementById("mas")
    Bmas.addEventListener("click", BmasOnClick)

    const Bmenos = document.getElementById("menos")
    Bmenos.addEventListener("click", BmenosOnClick)

    const Bpor = document.getElementById("por")
    Bpor.addEventListener("click", BporOnClick)

    const Bentre = document.getElementById("entre")
    Bentre.addEventListener("click", BentreOnClick)
}


const BmasOnClick = function(){
    const resultado=document.getElementById("resultado")
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resul= n1+n2
    resultado.innerText=resul
}

const BmenosOnClick = function(){
    const resultado=document.getElementById("resultado")
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resul= n1-n2
    resultado.innerText=resul
    
}

const BporOnClick = function(){
    const resultado=document.getElementById("resultado")
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resul= n1*n2
    resultado.innerText=resul
}

const BentreOnClick= function(){
    const resultado=document.getElementById("resultado")
    const n1 = document.getElementById("n1")
    const n2 = document.getElementById("n2")
    const resul= n1/n2
    resultado.innerText=resul
}
