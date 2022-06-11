import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useNavigate } from 'react-router-dom';

import Main from '../../Main/Main'
import EscrowRoute from './EscrowRoute';
import ProcessInfo from '../../ProcessInfo/ProcessInfo'
import { escrowDetailsGenerationGuide } from '../../../content/content';

function EscrowDetails() {
  const { id: escrowId } = useParams();
  const [ endpointTabs, setEndpointTabs ] = useState([{
    endpointRoute: '',
    operation: 'get',
    responseType: 'object',
    attributes: []
  }]);
  const navigate = useNavigate();

  const addNewEndpoint = () => {
    setEndpointTabs(prev => { 
      const newTabs = [ ...prev ];
      newTabs.push({
        endpointRoute: '',
        operation: 'get',
        responseType: 'object',
        attributes: []
      });
      return newTabs; 
    })
  }

  const handleRouteOnChange = (evt, field, index) => {
    const value = evt.target.value;
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      newTabs[index][field] = value;

      return newTabs;
    });
  }

  const addAttributeToRoute = (index) => {
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      newTabs[index].attributes.push({
        name: '',
        type: 'string',
        allowsNull: false
      });

      return newTabs;
    })
  }

  const deleteAttributeFromRoute = (routeIndex, attributeIndex) => {
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      const endpointAttributes = [ ...newTabs[routeIndex].attributes ];
      endpointAttributes.splice(attributeIndex, 1);
      newTabs[routeIndex].attributes = endpointAttributes;
      
      return newTabs;
    });
  }

  const createTabs = () => {
    return (
      <Tabs>
        {
          endpointTabs.map((endpoint, index) => (
            <Tab eventKey={index + 1} title={`${`Endpoint ${index + 1}`}`} key={index + 1}>
              <EscrowRoute
                routeIndex={index}
                handleRouteOnChange={handleRouteOnChange}
                fields={endpoint}
                addAttributeToRoute={addAttributeToRoute}
                deleteAttributeFromRoute={deleteAttributeFromRoute}
              />
            </Tab>
          ))
        }
      </Tabs>
    )
  }

  const addRouteInformationToEscrowDraft = () => {
    console.log(endpointTabs);
  }

  const discardDetails = () => {
    navigate('../escrows-history');
  };

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container mb-4'>
          <h1 className='mb-4'>Detalles del Fideicomiso</h1>
          <ProcessInfo 
            { ...escrowDetailsGenerationGuide } 
          />
          <div className='d-flex justify-content-end'>
            <button 
              className="btn btn-outline-secondary mx-3" 
              onClick={addNewEndpoint}
            >
              Agregar Endpoint +
            </button>
          </div>
          {createTabs()}
          <div className='d-flex align-items-center justify-content-center'>
            <button 
              className='btn btn-outline-danger mx-2'
              onClick={discardDetails}
            >
              Cancelar
            </button>
            <button 
              className='btn btn-outline-primary mx-2'
              onClick={addRouteInformationToEscrowDraft}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default EscrowDetails;