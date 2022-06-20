export function validateTextInput(inputValue, type) {
  if (!inputValue) {
    let errorMessage = '';
    switch (type) {
      case 'email':
        errorMessage = 'Por favor introduzca una dirección de correo electrónico';
        break;
      case 'password':
        errorMessage = 'Por favor indique su contraseña';
        break;
      case 'passwordConfirmation':
        errorMessage = 'Por favor indique la confirmación de su contraseña';
        break;
      case 'walletAddress':
        errorMessage = 'Por favor introduzca una dirección de billetera electrónica válida';
        break;
      case 'escrowName':
        errorMessage = 'Por favor indique un nombre para el fideicomiso';
        break;
      case 'expirationDate':
        errorMessage = 'Por favor indique la fecha en la que el fideicomiso expira';
        break;
      case 'expirationTime':
        errorMessage = 'Por favor indique la hora en la que el fideicomiso expira';
        break;
      default:
        errorMessage = 'Por favor asegurese de haber llenado todos los campos correctamente'
    }
    return { status: 'failed', errorMessage };
  }

  return { status: 'ok' };
}

export function validatePasswordAndConfirmationMatch(password, confirmation) {
  if (password !== confirmation) {
    return { status: 'failed', errorMessage: 'Su contraseña y confirmación deben ser iguales'};
  }

  return { status: 'ok' };
}

export function validatePriceInput(price) {
  if (price < 10) {
    return { status: 'failed', errorMessage: 'El precio mínimo por contrato es de 10 dolares' };  
  }

  return { status: 'ok' };
}

export function validateEscrowDetails(escrowDetails) {
  debugger
  for (let i = 0; i < escrowDetails.length; i++) {
    const route = escrowDetails[i];
    const repeatedElements = escrowDetails.filter(singleRoute => singleRoute.endpointRoute === route.endpointRoute && singleRoute.operation === route.operation);
    if (repeatedElements.length > 1) {
      return { status: 'failed', errorMessage: `Solo puede existir un endpoint con la misma ruta y el mismo metodo` };
    } 
    if (!route.endpointRoute) {
      return { status: 'failed', errorMessage: `Debe definir una ruta para el endpoint no. ${i+1}` };
    }
    if (route.operation === 'get' && route.attributes.length === 0) {
      return { status: 'failed', errorMessage: 'Las operaciones de tipo get deben tener respuestas con un atributo como mínimo' };
    }
    for (let j = 0; j < route.attributes.length; j++) {
      const attribute = route.attributes[j];
      if (!attribute.name) {
        return { status: 'failed', errorMessage: `Debe definir un nombre para el atributo no. ${j+1} del endpoint ${i+1}` };
      }
    }
  }

  return { status: 'ok' };
}