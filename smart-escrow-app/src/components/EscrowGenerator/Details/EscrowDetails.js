import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useNavigate } from 'react-router-dom';

import Main from '../../Main/Main'
import EscrowRoute from './EscrowRoute';
import ProcessInfo from '../../ProcessInfo/ProcessInfo'
import { escrowDetailsGenerationGuide } from '../../../content/content';
import { validateEscrowDetails } from '../../../utils/utils';
import { errorAlert } from '../../../services/alertService';
import { addEscrowDetails } from '../../../services/escrowService';

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

  const deleteEndpoint = (index) => {
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      newTabs.splice(index, 1);
      return newTabs;
    })
  }

  const handleRouteOnChange = (evt, field, index) => {
    const value = evt.target.value;
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      const tempRef = { ...newTabs[index] }
      tempRef[field] = value;
      newTabs[index] = tempRef;

      return newTabs;
    });
  }

  const addAttributeToRoute = (index) => {
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      const endpointTempRef = { ...newTabs[index] };
      const attributesRef = [ ...endpointTempRef.attributes ];
      attributesRef.push({
        name: '',
        type: 'string',
        allowsNull: 'notAllowed'
      });
      endpointTempRef.attributes = attributesRef;
      newTabs[index] = endpointTempRef;

      return newTabs;
    })
  }

  const deleteAttributeFromRoute = (routeIndex, attributeIndex) => {
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      const endpointRef = { ...newTabs[routeIndex] };
      const endpointAttributes = [ ...endpointRef.attributes ];
      endpointAttributes.splice(attributeIndex, 1);
      endpointRef.attributes = endpointAttributes;
      newTabs[routeIndex] = endpointRef;
      
      return newTabs;
    });
  }

  const handleAttributeOnChange = (evt, field, attributeIndex, routeIndex) => {
    const value = evt.target.value;
    setEndpointTabs(prev => {
      const newTabs = [ ...prev ];
      const endpointAttributes = [ ...newTabs[routeIndex].attributes ];
      const tempRef = { ...endpointAttributes[attributeIndex] }
      tempRef[field] = value;
      endpointAttributes[attributeIndex] = tempRef;
      newTabs[routeIndex].attributes = endpointAttributes;

      return newTabs;
    })
  }

  const createTabs = () => {
    return (
      <Tabs>
        {
          endpointTabs.map((endpoint, index) => (
            <Tab eventKey={index + 1} title={`${`Endpoint ${index + 1}`}`} key={index + 1}>
              <EscrowRoute
                routeIndex={index}
                deleteEndpoint={deleteEndpoint}
                handleRouteOnChange={handleRouteOnChange}
                fields={endpoint}
                addAttributeToRoute={addAttributeToRoute}
                deleteAttributeFromRoute={deleteAttributeFromRoute}
                handleAttributeOnChange={handleAttributeOnChange}
              />
            </Tab>
          ))
        }
      </Tabs>
    )
  }

  const addRouteInformationToEscrowDraft = async () => {
    const { status, errorMessage } = validateEscrowDetails(endpointTabs);
    if (status !== 'ok') {
      errorAlert(errorMessage);
      return;
    }

    // navigate to validators page
    const response = await addEscrowDetails(escrowId, endpointTabs);
    if (response.status === 200) {
      navigate(`../validations/${escrowId}`);
    } else {
      errorAlert('Algo ha salido mal, por favor intenta de nuevo');
    }
  }

  const discardDetails = () => {
    navigate('../escrows-history');
  };

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container-fluid mb-4'>
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