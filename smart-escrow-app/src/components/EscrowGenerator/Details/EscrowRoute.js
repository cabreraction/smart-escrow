import RouteAttribute from './RouteAttribute';

function EscrowRoute({ 
  routeIndex,
  handleRouteOnChange, 
  fields, 
  addAttributeToRoute, 
  deleteAttributeFromRoute 
}) {
  const { endpointRoute, operation, responseType, attributes } = fields;

  const deleteAttribute = (attributeIndex) => {
    deleteAttributeFromRoute(routeIndex, attributeIndex);
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
            onChange={(evt) => handleRouteOnChange(evt, 'endpointRoute', routeIndex)}
            value={endpointRoute}
          />
        </div>
        <div className='col-sm-4'>
          <label className='mx-1 mb-1'>Operaci&oacute;n</label>
          <select 
            className='form-select' 
            onChange={(evt) => handleRouteOnChange(evt, 'operation', routeIndex)}
            value={operation}
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
            onChange={(evt) => handleRouteOnChange(evt, 'responseType', routeIndex)}
            value={responseType}
          >
            <option value='object'>Objeto</option>
            <option value='array'>Array</option>
          </select>
        </div>
      </div>
      <div className="row my-3">
        <div className="d-flex justify-content-between">
          <h3>Atributos de la respuesta</h3>
          <button 
            className="btn btn-outline-secondary" 
            onClick={() => addAttributeToRoute(routeIndex)}
          >
            Agregar Atributo +
          </button>
        </div>
      </div>
      <div className='row my-3'>
        {
          attributes.map((attribute, i) => (
            <RouteAttribute 
              key={i}
              name={attribute.name}
              type={attribute.type}
              allowsNull={attribute.allowsNull}
              attributeIndex={i}
              deleteAttribute={deleteAttribute}
            />
          ))
        }
      </div>
    </div>
  );
}

export default EscrowRoute;