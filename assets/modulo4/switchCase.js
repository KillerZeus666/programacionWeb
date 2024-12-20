function checaValor(){
    var res = document.getElementById("respuesta");
    var text = "";
    
    switch(res.value){
      case "1":
        text = "El valor es 1";
        break;
      case "2":
        text = "El valor es 2";
        break;
      case "3":
        text = "El valor es 3";
        break;
      default:
        text = "No ingresaste un valor válido";
    }
    document.getElementById("resultado").innerHTML = text;
  };