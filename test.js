function adicionarHttp(url) {
    return ("http://"+ url)
  }
  
  function processar(array, callback){
    // var lista = array;
    var valoresLista = [] 
    for (i= 0; i < array.length;i++){
       
    valoresLista.push(callback(array[i]));
    } 
        
        return valoresLista;
      
      }
      
      processar (["uol.com", "terra.com"], adicionarHttp)