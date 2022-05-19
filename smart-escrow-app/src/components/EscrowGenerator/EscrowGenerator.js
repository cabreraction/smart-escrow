import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

import Main from '../Main/Main'
import { generalEscrowGenerationGuide } from '../../content/content';
import ProcessInfo from '../ProcessInfo/ProcessInfo'

function EscrowGenerator() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ expirationDate, setExpirationDate ] = useState('');
  const [ expirationTime, setExpirationTime ] = useState('');

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
        break;
    }
  }

  const createDraft = () => {};

  const discardDraft = () => {};

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container mb-4'>
          <h1 className='mb-4'>Fideicomiso Nuevo</h1>
          <ProcessInfo 
            { ...generalEscrowGenerationGuide } 
          />
          <h2>Datos Generales</h2>
          <div className='row mb-3'>
            <div className='col'>
              <label>Nombre del Contrato</label>
              <input 
                className='form-control'
                type='text'
                name="escrowName"
                value={name}
                onChange={handleOnChange}
              />
            </div>
            <div className='col'>
              <label>Precio</label>
                <input
                  className="form-control" 
                  name="escrowExpirationTime" 
                  type='number'
                  min={1}
                  step='any'
                  value={expirationTime}
                  onChange={handleOnChange}
                />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <label>Fecha de Expiraci&oacute;n</label>
              <input
                className="form-control" 
                name="escrowExpirationDate" 
                type='date'
                value={expirationDate}
                onChange={handleOnChange}
              />
            </div>
            <div className='col'>
              <label>Hora de Expiraci&oacute;n</label>
              <input
                className="form-control" 
                name="escrowExpirationTime" 
                type='time'
                value={expirationTime}
                onChange={handleOnChange}
            />
            </div>
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
          <div className='d-flex align-items-center justify-content-center'>
            <button 
              className='btn btn-outline-danger mx-2'
              onClick={discardDraft}
            >
              Cancelar
            </button>
            <button 
              className='btn btn-outline-primary mx-2'
              onClick={createDraft}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default EscrowGenerator;