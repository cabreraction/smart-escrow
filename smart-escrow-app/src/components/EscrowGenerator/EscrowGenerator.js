import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Modal from 'react-bootstrap/Modal';

import Main from '../Main/Main'
import InputOutput from '../Input-Output/InputOutput';
import { escrowGenerationGuide } from '../../content/content';
import ProcessInfo from '../ProcessInfo/ProcessInfo'

function EscrowGenerator() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ expirationDate, setExpirationDate ] = useState('');
  const [ expirationTime, setExpirationTime ] = useState('');
  const [ examplesArray, setExamplesArray ] = useState([]);
  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    
    switch(name) {
      case 'escrowName':
        setName(value);
        break;
      case 'escrowDescription':
        setDescription(value);
        break;
      case 'escrowExpirationDate':
        setExpirationDate(value);
        break;
      case 'escrowExpirationTime':
        setExpirationTime(value);
        break;
      default:
        return;
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
        <Modal 
          show={show} 
          onHide={handleClose} 
          backdrop="static"
          keyboard={false} 
        >
          <Modal.Header >
            <Modal.Title>El Fideicomiso Ha Sido Creado</Modal.Title>
          </Modal.Header>
          <Modal.Body>Felicidades! Tu fideicomiso ha sido creado, el codigo del mismo es: Hyo987Ad</Modal.Body>
          <Modal.Footer>
            <button className='btn btn-outline-danger' onClick={handleClose}>
              Ir a la pantalla principal
            </button>
          </Modal.Footer>
        </Modal>
        <h1>Fideicomiso Nuevo</h1>
        <div className='d-flex flex-column mb-4'>
          <ProcessInfo 
            { ...escrowGenerationGuide } 
          />
          <h2>Datos Generales</h2>
          <div className='mb-3'>
            <label>Nombre del Contrato</label>
            <input 
              className='form-control'
              type='text'
              name="escrowName"
              value={name}
              onChange={handleOnChange}
            />
          </div>
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
            examplesArray.length ?
            <Tabs>
              {
                examplesArray.map((example) => (
                  <Tab eventKey={example.id} title={`Prueba ${example.id + 1}`} key={example.id}>
                    <InputOutput
                      readOnly={false}
                      index={example.id}
                      input={example.input}
                      output={example.output}
                      onChange={handleInputOutputChange}
                    />
                  </Tab>
                ))
              }
            </Tabs> : null
          }
          <div className='d-flex justify-content-start'>
            <button 
              className='btn btn-primary'
              onClick={handleShow}
            >
              Crear Fideicomiso
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default EscrowGenerator;