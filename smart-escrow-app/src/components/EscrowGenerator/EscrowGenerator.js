import Alert from 'react-bootstrap/Alert'
import Main from '../Main/Main'

function EscrowGenerator() {
  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <h1>Fideicomiso Nuevo</h1>
        <div className='d-flex flex-column'>
          <Alert variant='info' className='mt-3'>
            <Alert.Heading>
              C&oacute;mo Crear un Fideicomiso Nuevo
            </Alert.Heading>
            <p>
              Para poder crear un nuevo contrato por favor introduzca la siguiente informaci&oacute;n:
              <ul>
                <li>
                  Descripci&oacute;n: Una explicaci&oacute;n clara de lo que se espera que la aplicaci&oacute;n resuelva.
                  Por favor proveea todas las condiciones necesarias para el desarrollo satisfactorio de la aplicaci&oacute;n
                </li>
                <li>
                  Expiraci&oacute;n: Una fecha y hora en la que el contrato dejar&aacute; de ser v&aacute;lido, o bien,
                  una cantidad limitada de d&iacute;as para completar la tarea antes de que el contrato 
                  pierda validez.
                </li>
                <li>
                  Entradas y Salidas: Por favor provea entradas con sus respectivos resultados esperados.
                  Debe proveer al menos cuatro entradas diferentes, pero pueden ser m&aacutes;. El desarrollador 
                  podr&aacute; ver solo dos de estas entradas.
                </li>
              </ul>
            </p>
          </Alert>
          <div className="mb-3">
            <label>Descripci&oacute;n del Contrato</label>
            <textarea 
              className="form-control" 
              name="escrowDescription" 
              rows={10}
            />
          </div>
          <div className="mb-3">
            <label>Fecha de Expiraci&oacute;n</label>
            <input
              className="form-control" 
              name="escrowExpirationDate" 
              type='date'
            />
          </div>
          <div className="mb-3">
            <label>Hora de Expiraci&oacute;n</label>
            <input
              className="form-control" 
              name="escrowExpirationTime" 
              type='time'
            />
          </div>
          <div className="mb-3">
            <label>Dias para Trabajar</label>
            <input
              className="form-control" 
              name="escrowExpirationDays" 
              type='number'
            />
          </div>
        </div>
      </div>
    </Main>
  );
}

export default EscrowGenerator;