import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

import Main from '../Main/Main'
import InputOutput from '../Input-Output/InputOutput';

function EscrowGenerator() {
  const [ description, setDescription ] = useState("");
  const [ expirationDate, setExpirationDate ] = useState("");
  const [ expirationTime, setExpirationTime ] = useState("");
  const [ examplesArray, setExamplesArray ] = useState([]);

  const handleOnChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    
    switch(name) {
      case 'escrowDescription':
        setDescription(value);
        break;
      case 'escrowExpirationDate':
        setExpirationDate(value);
        break;
      case 'escrowExpirationTime':
        setExpirationTime(value);
        break;
    }
  }

  const addExample = () => {
    const local = [...examplesArray]
    const limit = local.length === 0 ? 4 : 1;
    for (let i = 0; i < limit; i++) {
      local.push({
        id: limit === 4 ? i : local.length,
        input: '',
        output: ''
      })
    }

    setExamplesArray(local)
  }

  const handleInputOutputChange = (value, index, type) => {
    const modified = examplesArray.map((example, i) => {
      if (i === index) {
        if (type === 'output') {
          example.output = value;
        } else {
          example.input = value;
        }
      }
      return example;
    })

    setExamplesArray(modified);
  }

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <h1>Fideicomiso Nuevo</h1>
        <div className='d-flex flex-column mb-4'>
          <Alert variant='info' className='mb-4'>
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
                  Expiraci&oacute;n: Una fecha y hora en la que el contrato dejar&aacute; de ser v&aacute;lido.
                </li>
                <li>
                  Entradas y Salidas: Por favor provea entradas con sus respectivos resultados esperados.
                  Debe proveer al menos cuatro entradas diferentes, pero pueden ser m&aacute;s. El desarrollador 
                  podr&aacute; ver solo dos de estas entradas.
                </li>
              </ul>
            </p>
          </Alert>
          <h2>Datos Generales</h2>
          <div className="mb-3">
            <label>Descripci&oacute;n del Contrato</label>
            <textarea 
              className="form-control" 
              name="escrowDescription" 
              rows={10}
              value={description}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label>Fecha de Expiraci&oacute;n</label>
            <input
              className="form-control" 
              name="escrowExpirationDate" 
              type='date'
              value={expirationDate}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label>Hora de Expiraci&oacute;n</label>
            <input
              className="form-control" 
              name="escrowExpirationTime" 
              type='time'
              value={expirationTime}
              onChange={handleOnChange}
            />
          </div>
          <div className='d-flex justify-content-between align-items-end'>
            <h2>Entradas y Salidas</h2>
            <button 
              className='btn btn-outline-secondary'
              onClick={addExample}
            >
              Agregar+
            </button>
          </div>
          {
              examplesArray.map((example) => (
                <InputOutput
                  key={example.id}
                  readOnly={false}
                  index={example.id}
                  input={example.input}
                  output={example.output}
                  onChange={handleInputOutputChange}
                />
              ))
          }
        </div>
      </div>
    </Main>
  );
}

export default EscrowGenerator;