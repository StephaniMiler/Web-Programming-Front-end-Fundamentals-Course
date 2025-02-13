(function(){
    const nameUser = null
    const element = document.querySelector(".top-bar p")

    if(nameUser){
        console.log(element.textContent)
        //document.querySelector(".top-bar p").textContent = "Bem vindo(a), " + nameUsert.querySelector(".top-bar p")
        element.innerHTML += "<b>" + nameUser + "</b>"
    }else{
        //element.parentElement.style.display = "none"
        //element.parentElement.remove()
        const elementRemove = element.parentElement
        elementRemove.parentElement.removeChild(elementRemove)
    }

})()