import { useState } from 'react';

function EscrowRoute({ index }) {
  const [ responseAttributesCount, setResponseAttributesCount ] = useState(0);

  const addResponseAttribute = () => {
    setResponseAttributesCount(prev => prev + 1);
  }

  const renderAttributes = () => {
    const attributes = [];
    for (let i = 0; i < responseAttributesCount; i++) {
      const attributeView = (
        <div className='row mb-4'>
          <div className='col-sm-5'>
            <label className='mx-1 mb-1'>Nombre del Atributo</label>
            <input 
              type='text' 
              className='form-control' 
              onChange={null}
            />
          </div>
          <div className='col-sm-5'>
            <label className='mx-1 mb-1'>Tipo de Dato</label>
            <select 
              className='form-select' 
              onChange={null}
            >
              <option value='string'>String</option>
              <option value='number'>Number</option>
              <option value='boolean'>Boolean</option>
              <option value='array'>Array</option>
              <option value='object'>Object</option>
            </select>
          </div>
          <div className='col-sm h-100'>
            <label class="mx-1 mb-1">Datos Null</label>
            <select 
              className='form-select' 
              onChange={null}
            >
              <option value='si'>Puede Contener</option>
              <option value='no'>No Contiene</option>
            </select>
          </div>
        </div>
      );
      attributes.push(attributeView);
    }

    return attributes;
  }

  return (
    <div className='container my-3'>
      <div className='row my-4'>
        <div className='col-sm-4'>
          <label className='mx-1 mb-1'>Endpoint</label>
          <input 
            type='text' 
            className='form-control' 
            placeholder='/example/resources' 
            onChange={null}
          />
        </div>
        <div className='col-sm-4'>
          <label className='mx-1 mb-1'>Operaci&oacute;n</label>
          <select 
            className='form-select' 
            onChange={null}
          >
            <option value='get'>GET</option>
            <option value='post'>POST</option>
            <option value='put'>PUT</option>
            <option value='delete'>DELETE</option>
          </select>
        </div>
        <div className='col-sm-4'>
          <label className='mx-1 mb-1'>Tipo de Respuesta</label>
          <select 
            className='form-select' 
            onChange={null}
          >
            <option value='objeto'>Objeto</option>
            <option value='array'>Array</option>
          </select>
        </div>
      </div>
      <div className="row my-3">
        <div className="d-flex justify-content-between">
          <h3>Atributos de la respuesta</h3>
          <button 
            className="btn btn-outline-secondary" 
            onClick={addResponseAttribute}
          >
            Agregar Atributo +
          </button>
        </div>
      </div>
      <div className='row my-3'>
        {renderAttributes()}
      </div>
    </div>
  );
}

export default EscrowRoute;