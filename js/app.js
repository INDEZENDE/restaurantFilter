//Cambia de la pantalla1 a la pantalla 2-->
$(document).ready(function() {
    var restaurante={};
    var $pantalla1 = $('#pantalla1');
    var $pantalla2 = $('#pantalla2');
    $pantalla1.fadeOut(5000);
    $pantalla2.fadeIn(10000);

function loadPage() { /*Función que contiene funciones*/
  $("#searcher").keyup(filterRestaurante);//Filtra los contactos
}

function addContact(e) {/*La función add contact se detona con un evento*/
  e.preventDefault();/*Elimina el evento por default*/
  // Esta funcion pinta en el html
  paintRestauranteInHtml(restaurante);/*Llamaa a la función que depende de contact (cada objeto)*/
}

function paintRestauranteInHtml (restaurante) {/*La función paintRestauranteInHtml depende de "contact"*/
var $newRestaurante = $("<article />", {
  "class": "card-panel hoverable"
});
 var $containerRestauranteName = $("<h4 />");


// // Asignando valores
// $containerRestauranteName.text(restaurante.name);
/* Crear elementos con DOM html al publicar restaurante */
  var $containerImg = $("<div />", { "class": "s12 m6"});
  var $imgLogo = $("<img />", { "src": restaurante.photo, "href": "modal", "width": "100% " });

$newRestaurante.append($imgLogo);
console.log($newRestaurante);
 $("#padre").prepend($newRestaurante);

}

function filterRestaurante (){ /*Función filtro de contactos*/
$("#padre").empty();
  var searchRestaurante = $("#searcher").val().toLowerCase();/*Trae el valor del input de entrada (busqueda) y lo convierte a minusculas*/
    if($("#searcher").val().trim().length > 0) {/*Si el valor de entrada (sin espacios) es mayor a cero*/
        var filteredRestaurante = data.filter(function(restaurante) {/*Del arreglo total "data", filtra de acuerdo a una función que depende de contact (cada objeto o valor agregado)*/
           // console.log(contact);
            return restaurante.name.toLowerCase().indexOf(searchRestaurante) >= 0;/*Regresa el nombre del contacto que coincide con el valor buscado el cual es convertido previamente en minúscula*/
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



$(document).ready(loadPage);/*Ejecuta la función loadPage que tiene todas las funciones dentro*/



});
