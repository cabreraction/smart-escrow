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
        <div>
          I am an attribute!!
        </div>
      );
      attributes.push(attributeView);
    }

    return attributes;
  }

  return (
    <div className='container my-3'>
      <div className='row my-4'>
        <div className='col-sm-6'>
          <label className='mx-1'>Endpoint</label>
          <input 
            type='text' 
            className='form-control' 
            placeholder='nombre@correo.com' 
            onChange={null}
          />
        </div>
        <div className='col-sm-6'>
          <label className='mx-1'>Operaci&oacute;n</label>
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
      </div>
      <div className="row my-3">
        <div className="d-flex justify-content-between">
          <h3>Atributos de la respuesta</h3>
          <button 
            className="btn btn-outline-primary" 
            onClick={addResponseAttribute}
          >
            Agregar +
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