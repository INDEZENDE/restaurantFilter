$(document).ready(function() {
  var $pantalla1 = $('#pantalla1');
  var $pantalla2 = $('#pantalla2');
  setTimeout(splash, 500);
  //initialize  modals
  $('.trigger-modal').modal;
  function loadPage() {
    $("#searcher").keyup(filterRestaurante);
    paintRestauranteInHtml(restaurante);
    var instance = M.Carousel.getInstance(elem);
  }

  function splash() {
    $('#pantalla1').fadeOut('slow');
    $('#pantalla2').fadeIn('slow');
  }

  function paintRestauranteInHtml(restaurante) {
    var $newRestaurante = $("<article />", {"class": "card-panel hoverable"});
    var $containerRestauranteName = $("<h4 />");
    var $containerImg = $("<div />", {"class": "s12 m6"});
    var $imgLogo = $("<img />", {"width": "80% ", "class": "center", "src": restaurante.photo});
    var $textName = $("<h3 />", {"class": "center"}).text(restaurante.name);
    var $textAdress = $("<h6 />").text(restaurante.adress);
    var $textFood = $("<h5 />", {"class": "amber-text"}).text(restaurante.food);
    // Creación del modal
    if (restaurante.adress.length > 0) {
      console.log('si');
      var $modalButton = $("<button />", {"class": "btn modal-trigger waves-light","data-target": "modal1"}).text("ver mapa");
      $newRestaurante.append($modalButton);
    }
    // var $modalButton=document.getElementById('modalButton');
    var $iframe = document.getElementById('iframe');
    $iframe.src = restaurante.src;
    // $modalButton.text="ver mapa";
    $modalButton.className = "waves-light";
    $newRestaurante.append($textName);
    $newRestaurante.append($textFood);
    $newRestaurante.append($textAdress);
    $newRestaurante.append($imgLogo);
    var elem = document.querySelector('.modal');
    var instance = M.Modal.init(elem, options);
    $("#padre").prepend($newRestaurante);
  }

  function filterRestaurante() { /*Función filtro de comida*/
    $("#padre").empty();
    var searchRestaurante = $("#searcher").val().toLowerCase(); /*Trae el valor del input de entrada (busqueda) y lo convierte a minusculas*/
    if ($("#searcher").val().trim().length > 0) { /*Si el valor de entrada (sin espacios) es mayor a cero*/
      var filteredRestaurante = data.filter(function(restaurante) { /*Del arreglo total "data", filtra de acuerdo a una función que depende de contact (cada objeto o valor agregado)*/
        return restaurante.food.toLowerCase().indexOf(searchRestaurante) >= 0; /*Regresa el nombre del contacto que coincide con el valor buscado el cual es convertido previamente en minúscula*/
      });
      $("#publish-restaurante").empty(); /*limpia el contenedor donde se pintarán los contactos*/
      filteredRestaurante.forEach(function(restaurante) { /*recorre el arreglo que contiene los datos insertados filtados (linea 80) y va ejecutando la funcion PaintContact*/
        paintRestauranteInHtml(restaurante);
      });
    }
    else { /*Si el valor de entrada (sin espacios es menor a cero)*/
      $("#publish-restaurante").empty(); /*Deja el espacio que se mostrará con el resultado vacío*/
      data.forEach(function(restaurante) { /*Por medio de forEach se llama por cada elemento del arreglo data(cada contacto) a la función paintRestauranteInHtml*/
        paintRestauranteInHtml(filteredRestaurante);
      });
    }

  }//Cierra la función restaurante

  // Carrusel
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, options);

  // Or with jQuery

  $(document).ready(function() {
    $('.carousel').carousel();
  });
  autoplay();

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
  }

  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, options);

  // Or with jQuery
  function options() {
    instance.open();
  }

  $(document).ready(loadPage); /*Ejecuta la función loadPage que tiene todas las funciones dentro*/
});
