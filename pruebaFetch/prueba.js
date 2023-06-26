//let formulario = document.querySelector("form")
//document.addEventListener('click').
//let seleccion = "margarita" //${seleccion}

fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json())
    .then(data => {
        //document.querySelector("img").setAttribute("src", data.message)
        console.log(data)
    })
    .catch(error => {console.log(error)})

