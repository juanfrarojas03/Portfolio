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