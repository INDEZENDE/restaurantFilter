//Cambia de la pantalla1 a la pantalla 2-->
$(document).ready(function() {
    var restaurante={};
    var $pantalla1 = $('#pantalla1');
    var $pantalla2 = $('#pantalla2');
    $pantalla2.fadeOut();
    $pantalla1.fadeOut(5000);
    $pantalla2.fadeIn(10000);

    //initialize  modals
    $('.trigger-modal').modal();

function loadPage() {
  $("#searcher").keyup(filterRestaurante);
  paintRestauranteInHtml(restaurante);
  // getLocation();
  var instance = M.Carousel.getInstance(elem);
}


function paintRestauranteInHtml (restaurante) {
var $newRestaurante = $("<article />", {
  "class": "card-panel hoverable"
});

  var $containerRestauranteName = $("<h4 />");
  var $containerImg = $("<div />", { "class": "s12 m6"});
  var $imgLogo = $("<img />", {  "width": "80% ","class":"center", "src": restaurante.photo});
  var $textName =$("<h3 />",{"class":"center" }).text(restaurante.name);
  var $textAdress =$("<h6 />").text(restaurante.adress);
  var $textFood =$("<h5 />",{"class":"amber-text" }).text(restaurante.food);
// Creación del modal
  var $modalButton=$("<button />", {"class":"btn modal-trigger","data-target":"modal1"}).text("ver mapa");
  var $iframe=document.getElementById('iframe')
  $iframe.src=restaurante.src;


$newRestaurante.append($textName);
$newRestaurante.append($textFood);
$newRestaurante.append($textAdress);
$newRestaurante.append($imgLogo);
$newRestaurante.append($modalButton);


var elem = document.querySelector('.modal');
  var instance = M.Modal.init(elem, options);

$("#padre").prepend($newRestaurante);

}

function filterRestaurante (){ /*Función filtro de comida*/
$("#padre").empty();
  var searchRestaurante = $("#searcher").val().toLowerCase();/*Trae el valor del input de entrada (busqueda) y lo convierte a minusculas*/
    if($("#searcher").val().trim().length > 0) {/*Si el valor de entrada (sin espacios) es mayor a cero*/
        var filteredRestaurante = data.filter(function(restaurante) {/*Del arreglo total "data", filtra de acuerdo a una función que depende de contact (cada objeto o valor agregado)*/
            return restaurante.food.toLowerCase().indexOf(searchRestaurante) >= 0;/*Regresa el nombre del contacto que coincide con el valor buscado el cual es convertido previamente en minúscula*/
        });
      $("#publish-restaurante").empty();/*limpia el contenedor donde se pintarán los contactos*/
      filteredRestaurante.forEach(function(restaurante){/*recorre el arreglo que contiene los datos insertados filtados (linea 80) y va ejecutando la funcion PaintContact*/
        paintRestauranteInHtml(restaurante);
      });
    } else {/*Si el valor de entrada (sin espacios es menor a cero)*/
      $("#publish-restaurante").empty();/*Deja el espacio que se mostrará con el resultado vacío*/
      data.forEach(function(restaurante){/*Por medio de forEach se llama por cada elemento del arreglo data(cada contacto) a la función paintRestauranteInHtml*/
        paintRestauranteInHtml(filteredRestaurante);
      });
    }

  // console.log(filteredRestaurante);
}
//Geolocalización
// var x = document.getElementById("demo");
//
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
//
// function showPosition(position) {
//     var latlon = position.coords.latitude + "," + position.coords.longitude;
//     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
//     +latlon+"&zoom=14&size=200x200&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
//     document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
// }
// //To use this code on your website, get a free API key from Google.
// //Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
//
// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             x.innerHTML = "User denied the request for Geolocation."
//             break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML = "Location information is unavailable."
//             break;
//         case error.TIMEOUT:
//             x.innerHTML = "The request to get user location timed out."
//             break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML = "An unknown error occurred."
//             break;
//     }
// }

// Carrusel
var elem = document.querySelector('.carousel');
 var instance = M.Carousel.init(elem, options);

 // Or with jQuery

 $(document).ready(function(){
   $('.carousel').carousel();
 });
 autoplay()
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
}
 var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, options);

  // Or with jQuery
  function options (){
    instance.open();
  }


$(document).ready(loadPage);/*Ejecuta la función loadPage que tiene todas las funciones dentro*/



});
