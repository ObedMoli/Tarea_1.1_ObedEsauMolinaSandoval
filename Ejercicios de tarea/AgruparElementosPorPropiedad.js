function agruparPorPropiedad(arr, propiedad) {
  return arr.reduce((acumulador, objetoActual) => {
    // Desestructuración para obtener la propiedad por la que agrupamos
    const { [propiedad]: valorPropiedad } = objetoActual;
    
    // Si no existe la propiedad en el acumulador, la inicializamos con array vacío
    if (!acumulador[valorPropiedad]) {
      acumulador[valorPropiedad] = [];
    }
    
    // Agregamos el objeto actual al grupo correspondiente
    acumulador[valorPropiedad].push(objetoActual);
    
    return acumulador;
  }, {});
}

// Datos de prueba
const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

// Ejecutamos la función
const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);