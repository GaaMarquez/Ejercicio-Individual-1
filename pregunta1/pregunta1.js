const butMOnClick = function(){
    const l = document.getElementById("lista")
    if (l.style.display == "block"){
        l.style.display = "none"
    }
    else{
        l.style.display = "block"
    }
}

const butAOnClick = function(){
    const l = document.getElementById("lista")
    const texto = document.getElementById("input")
    const e = document.createElement("li")
    e.innerText = texto.value
    l.appendChild(e)

}

const main = function(){
    const BotonMenu = document.getElementById("BMenu")
    BotonMenu.addEventListener("click", butMOnClick)

    const BotonAgre = document.getElementById("BAgregar")
    BotonAgre.addEventListener("click", butAOnClick)
}

main()