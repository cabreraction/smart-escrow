function RouteAttribute({ name, type, allowsNull, attributeIndex, deleteAttribute, attributeChange }) {
  return (
    <div className='row mb-3'>
      <div className='col-sm-4'>
        <label className='mx-1 mb-1'>Nombre del Atributo</label>
        <input 
          type='text' 
          className='form-control' 
          onChange={(evt) => attributeChange(evt, 'name', attributeIndex)}
          value={name}
        />
      </div>
      <div className='col-sm-4'>
        <label className='mx-1 mb-1'>Tipo de Dato</label>
        <select 
          className='form-select' 
          onChange={(evt) => attributeChange(evt, 'type', attributeIndex)}
          value={type}
        >
          <option value='string'>String</option>
          <option value='number'>Number</option>
          <option value='boolean'>Boolean</option>
          <option value='array'>Array</option>
          <option value='object'>Object</option>
        </select>
      </div>
      <div className='col-sm-2'>
        <label className="mx-1 mb-1">Valores Null</label>
        <select 
          className='form-select' 
          onChange={(evt) => attributeChange(evt, 'allowsNull', attributeIndex)}
          value={allowsNull}
        >
          <option value='allowed'>Permitidos</option>
          <option value='notAllowed'>No Permitidos</option>
        </select>
      </div>
      <div className="col-sm d-flex flex-column align-items-stretch justify-content-end">
        <button 
          className="btn btn-outline-danger"
          onClick={() => deleteAttribute(attributeIndex)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default RouteAttribute;