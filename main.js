function textToUpperCase() {
    //Recogemos el valor del textarea
    let content = document.querySelector('[name="textarea"]');
    //Lo convertimos en uppercase
    content.value = content.value.toUpperCase();
}

function textToLowerCase() {
    //Recogemos el valor del textarea
    let content = document.querySelector('[name="textarea"]');
    //Lo convertimos en lowercase
    content.value = content.value.toLowerCase();
}

function textToCapitalizedCase() {
    //Recogemos el valor del textarea
    let content = document.querySelector('[name="textarea"]');
    //Usamos split para dividir el texto en un array con tantos índices como espacios tenga
    //Mapeamos y convertimos el primer índice (0) a uppercase, mientras que recortamos el resto de la palabra y la convertimos a lowercase
    //Finalmente usamos .join para unir cada palabra del array añadiendole un espacio entre ellas
    content.value = content.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

function copyToClipBoard() {
    let content = document.querySelector('[name="textarea"]');
    
    //Usamos la funcion de navigator para copiar el contenido del textarea al portapapeles
    navigator.clipboard.writeText(content.value)
    .then(() => {

    })
    .catch((err) => {
        console.log(err)
    })
}