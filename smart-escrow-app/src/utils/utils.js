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