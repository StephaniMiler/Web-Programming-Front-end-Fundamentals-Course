(function(){
    const nameUser = "Stephani"

    if(nameUser){
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p> Olá, <b> ${nameUser} </b></p> `

        //elementoPai.insertBefore(novoElemento, elementoReferencia)
        const pai = document.querySelector(".hero")
        const referencia = document.querySelector(".hero-content")
        pai.insertBefore(topBarElement, referencia)
    }

})()