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