export const generalEscrowGenerationGuide = {
  title: 'Fideicomiso: Datos Generales',
  summary: 'Para poder crear un nuevo contrato por favor introduzca la siguiente información:',
  steps: [
    `Nombre: Un nombre o título para identificar el fideicomiso.`,
    `Descripción: Una explicación clara de lo que se espera que la aplicación resuelva. 
    Por favor proveea todas las condiciones necesarias para el desarrollo satisfactorio de la aplicación.`,
    `Expiración: Una fecha y hora en la que el contrato dejará de ser válido, siempre y cuando no haya sido cumplido aún.`,
    `Precio: la cantidad de dinero en dolares que el contrato pagará.`
  ]
}

export const escrowDetailsGenerationGuide = {
  title: 'Fideicomiso: Detalles',
  summary: 'Para que la evaluación del producto pueda ser automatizada por favor llene la siguiente información',
  steps: [
    `Endpoint: Esta es la dirección del controlador en el servicio web.`,
    `Operación: El tipo de operación RESTful que se realiza en el endpoint proveido. En este momento solamente cuatro operaciones son soportadas: GET, POST, PUT y DELETE.`,
    `Tipo de Respuesta: Si la respuesta es un array o un objeto.`,
    `Atributos de la Respuesta: Un atributo es compuesto por un nombre y un tipo de dato. Si la respuesta es un array entonces son los atributos que cada elemento 
      del array puede tener, si la respuesta es un objeto entonces son los atributos que ese objeto debe tener al ser recibido.`
  ]
};

export const escrowValidatorsGenerationGuide = {
  title: 'Fideicomiso: Validaciones',
  summary: `Cuando el desarrollador entregue el producto finalizado este debe poder ser evaluado para determinar si cumple con las caracteristicas especificadas originalmente. 
  Con este fin debe incluir una serie de pruebas para cada ruta y operación definida para el fideicomiso. Por favor tome en cuenta las siguientes observaciones:`,
  steps: [
    `Las validaciones se realizaran empezando con todas aquellas que hagan uso de la operación POST.`,
    `Las validaciones de tipo GET pueden y deberían realizarse después de cada operación de tipo POST, PUT o DELETE, así que al definirla deberá especificar después de qué 
    operación debe ser realizada.`,
    `Para cada ruta y operación debe definir cuál es el código de respuesta esperado (200, 404, etc).`,
    `Que las validaciones sean definidas correctamente es su responsabilidad, si estas no son exitosas el producto no será liberado.`,
    `Dada la naturaleza de los fideicomisos, este no puede cambiar su información una vez haya sido iniciado, si necesitan modificar especificaciones deberán crear un fideicomiso nuevo.`
  ]
};

export const escrowProductDeliveryGuide = {
  title: 'Instrucciones de Entrega',
  summary: `Para entregar el producto por favor asegurate de seguir los siguientes pasos:`,
  steps: [
    `El unico formato de entrega permitido es el formato .zip`,
    `Luego de ser entregada tu aplicacion sera evaluada por nuestro mecanismo de verificacion, si todas las pruebas pasan exitosamente los fondos seran liberados automaticamente 
      y la aplicacion le sera entregada al solicitante.`,
    `Si las pruebas no pasan te sera notificado para que hagas los cambios correspondientes.`
  ]
};