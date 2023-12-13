document.getElementById('descargarArchivo').addEventListener('click', function() {
    var enlace = document.createElement('a');
    enlace.setAttribute('href', 'CVJuanfra.pdf');
    enlace.setAttribute('download', 'CVJuanfra.pdf');

    //simula click
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  });

window.onscroll = function() {
    var header = document.getElementById('header');

    // Si el scroll vertical es mayor a 50px, añade la clase 'opaco', de lo contrario, elimínala
    if (window.scrollY > 50) {
        header.classList.add('opaco');
    } else {
        header.classList.remove('opaco');
    }
};