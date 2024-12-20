function cambiaImagen(){
    var link1 = "https://images.unsplash.com/photo-1610024552791-c92de4e0394b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80";
    var link2 = "https://images.unsplash.com/photo-1609894836394-512d7c1a375b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    var imagen = document.getElementById("imagen1");
    if(imagen.src == link1){
      imagen.src = link2;
    } else{
      imagen.src = link1;
    }
  };