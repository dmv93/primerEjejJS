let frutas = ["Manzana","Banana"]


function ponerFruta () {
    let respuesta = prompt("Dime una fruta")
    frutas.push(respuesta)
    alert(frutas)
    //return frutas
}

function quitarFruta () {
    alert("Vamos a borrar el ultimo")
    frutas.pop()
    alert(frutas)
}