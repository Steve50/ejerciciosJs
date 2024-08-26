var hello = "Hola Mundo!!!";
alert(hello);
document.write("<h1>Hola Mundo!!!</h1>");
result = 5 + 3;
document.write("<h3>5 + 3 = " + result + "</h3>");

// Modal name
const showModalName = document.getElementById('showModalName');
const showName = document.getElementById('showName');
const modalName = document.getElementById('modalName');
const span = document.getElementsByClassName('cerrar')[0];

showModalName.onclick = function() {
    modalName.style.display = 'block';
}
showName.addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('showN').innerHTML = 'Hola buen día '+name;
});
span.onclick = function() {
    modalName.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modalName) {
        modalName.style.display = 'none';
    }
}

//modal suma
const showModalSum = document.getElementById('showModalSum');
const showSum = document.getElementById('sum');
const modalSum = document.getElementById('modalSuma');
const spanS = document.getElementsByClassName('cerrarS')[0];

showModalSum.onclick = function() {
    modalSum.style.display = 'block';
}
showSum.addEventListener('submit',function(event){
    event.preventDefault();
    const first = parseInt(document.getElementById('first').value);
    const second = parseInt(document.getElementById('second').value);
    let result = first + second;
    document.getElementById('resultSum').innerHTML = 'El resultado es: ' + result;
});
spanS.onclick = function() {
    modalSum.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modalSum) {
        modalSum.style.display = 'none';
    }
}