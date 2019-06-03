$(document).ready(function(){
  $("#btn-get-users").click(function(){
    getUsers();
  });
})
  function getUsers(){
    $.ajax({
      url:"https://mini-shop-rg.herokuapp.com/products",
      type:"GET",
      dataType:"json",
      success:function(response){
        var products=response;
        var divProductos=$("#productos");
        var lista="";
        $("#btn-get-users").hide();
        for (var i = 0; i < products.length; i++) {
          var product=products[i];
          lista+="<div class='col-sm-6 col-12 col-md-4 col-lg-3 col-xl-3'><div class='card text-dark'><div class='card-header bg-info'>"+product.name+"</div><div class='card-body'><img class='card-img-top prod' src='"+product.image+"' alt='Card image cap'><p class='card-text'>"+product.description+"</p></div><div class='card-header text-dark'><strong> $"+product.price+"</strong></div></div></div>";
        }
        divProductos.html(lista);
      },
      error:function(){
        alert("Ocurrió un error al cargar los datos");
      }
    });
  }
