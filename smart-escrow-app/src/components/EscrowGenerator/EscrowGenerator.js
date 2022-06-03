import { useState } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

import Main from '../Main/Main'
import { generalEscrowGenerationGuide } from '../../content/content';
import ProcessInfo from '../ProcessInfo/ProcessInfo'
import { errorAlert } from '../../services/alertService';
import { validateTextInput, validatePriceInput } from '../../utils/utils';
import { createEscrow } from '../../services/escrowService';

function EscrowGenerator() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ expirationDate, setExpirationDate ] = useState('');
  const [ expirationTime, setExpirationTime ] = useState('');
  const [ escrowPrice, setEscrowPrice ] = useState(0);

  const navigate = useNavigate();

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
      case 'escrowPrice':
        setEscrowPrice(value);
        break;
      default:
        break;
    }
  }

  const createDraft = async () => {
    const inputFields = [ 
      { value: name, type: 'escrowName' },
      { value: expirationDate, type: 'expirationDate' },
      { value: expirationTime, type: 'expirationTime' },
      { value: escrowPrice, type: 'escrowPrice' }
    ];
    
    for (let field of inputFields) {
      const { status, errorMessage } = validateTextInput(field.value, field.type);
      if (status !== 'ok') {
        errorAlert(errorMessage);
        return;
      }
    }

    const {status, errorMessage } = validatePriceInput(escrowPrice);
    if (status !== 'ok') {
      errorAlert(errorMessage);
      return;
    }

    const response = await createEscrow(name, description, escrowPrice, expirationDate, expirationTime);
    if (response.status === 200) {
      // const escrowId = response.escrowId; --> this needs to be send to the next page as a parameter
      // navigate('escrows-history')
      console.log('im navigating to the next thing')
    } else {
      // errorAlert('Algo ha salido mal, por favor intenta de nuevo');
      navigate(`../details/${response.escrowId}`);
    }
  };

  const discardDraft = () => {
    navigate('../escrows-history');
  };

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
              <label>Precio - USD</label>
                <input
                  className="form-control" 
                  name="escrowPrice" 
                  type='number'
                  min={1}
                  step='any'
                  value={escrowPrice}
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
            <label>Descripci&oacute;n del Contrato<small>      (Opcional)</small></label>
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