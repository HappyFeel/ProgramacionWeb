$(document).ready(function(){
    $("#vaciar").click(function(){
        $.post("../GestionCarro",
        {
          accion: "2",
        },function(){
        	$("#div1").load("carrito.jsp"+" #div1");
        });
    });

});
function removeCompra(producto){
var size = document.getElementById("size").value;
var index = document.getElementById("index").value;
for(var i=0;i<=size;i++){	
$("#borrar"+i).click(function(){
	alert("Eliminado");
    $.post("../GestionCarro",
    {
      accion: "1",
      i : index
    },function(){
    	$("#div1").load("carrito.jsp"+" #div1");
    });
});
}
}
