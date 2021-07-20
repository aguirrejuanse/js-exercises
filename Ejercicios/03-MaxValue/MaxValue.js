const maxValue = (stocks) => {
  // guardamos la primer diferencia
  let max = stocks[1] - stocks[0];
  // iteramos sobre cada posibilidad de compra
  for (let i = 0; i < stocks.length - 1; i += 1) {
      // e iteramos sobre cada posibilidad de venta
      for (let j = i + 1; j < stocks.length; j += 1){
          // sacamos ganancia potencial
          const potential = stocks[j] - stocks[i];
          // y deducimos si nos quedamos con el potencial o con el viejo máximo      
          max = potential > max ? potential : max;    
      }  
  }
  // devolvemos el máximo
  return max;
};
