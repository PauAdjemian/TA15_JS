let boton = document.getElementById("añadir");
let botonEliminar = document.getElementById("eliminar");
let texto = document.getElementById("texto");
let lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    addValue(); 
});
botonEliminar.addEventListener("click", () => {
    deleteValue();
});


function addValue(){
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto.value;
    lista.appendChild(nuevoElemento);
};
function deleteValue(){
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    };
};