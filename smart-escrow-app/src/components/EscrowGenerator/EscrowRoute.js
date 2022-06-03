function EscrowRoute({ index }) {
  return (
    <div className='container my-3'>
      <div className='row my-4'>
        <div className='col-sm-6'>
          <label className='mx-1'>Ruta</label>
          <input 
            type='text' 
            className='form-control' 
            placeholder='nombre@correo.com' 
            onChange={null}
          />
        </div>
        <div className='col-sm-6'>
          <label className='mx-1'>Verbo</label>
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
          <button className="btn btn-outline-primary">Agregar +</button>
        </div>
      </div>
    </div>
  );
}

export default EscrowRoute;