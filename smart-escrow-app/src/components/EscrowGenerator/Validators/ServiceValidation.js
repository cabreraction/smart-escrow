import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';

import Main from '../../Main/Main';
import ProcessInfo from '../../ProcessInfo/ProcessInfo';
import { escrowValidatorsGenerationGuide } from '../../../content/content';
import { getEscrow, addEscrowValidations } from '../../../services/escrowService';
import InputOutput from './InputOutput';
import { errorAlert } from '../../../services/alertService';

function ServiceValidation() {
  const { id: escrowId } = useParams();
  const [ validations, setValidations ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { escrow, status } = await getEscrow(escrowId);
      if (status === 200) {
        const mappedValidations = escrow.routes.map(route => ({
          endpoint: route.endpointRoute,
          operation: route.operation,
          input: '',
          output: ''
        }));

        setValidations(mappedValidations);
      } else {
        // report error and move to escrow history ??
      }
    }
    fetchData();
  }, [escrowId]);

  const onValidationChange = (value, index, type) => {
    setValidations(prev => {
      const temp = [ ...prev ];
      temp[index][type] = value;

      return temp;
    });
  }

  const registerValidations = async () => {
    /* VALIDATIONS
    const { status, errorMessage } = validateEscrowDetails(endpointTabs);
    if (status !== 'ok') {
      errorAlert(errorMessage);
      return;
    } */

    // navigate to validators page
    const response = await addEscrowValidations(escrowId, validations);
    if (response.status === 200) {
      // show a modal with the code for the escrow to start
    } else {
      errorAlert('Algo ha salido mal, por favor intenta de nuevo');
    }
  }

  const getTabsFromRoutes = () => {
    const routeTabs = validations && validations.map((validation, index) => (
      <Nav.Item key={`${validation.endpoint}-${validation.operation}-${index}`}>
        <Nav.Item>
          <Nav.Link eventKey={index+1}>
            {`${validation.endpoint} - ${validation.operation}`}
          </Nav.Link>
        </Nav.Item>
      </Nav.Item>
    ))

    return routeTabs;
  }

  const getTabsContentFromRoutes = () => {
    const routeTabsContent = validations && validations.map((validation, index) => (
      <TabPane 
        eventKey={index+1}
        key={`${validation.endpoint}-${index}-${validation.operation}`}
      >
        <InputOutput 
          readOnly={false} 
          input={validation.input}
          output={validation.output}
          index={index}
          onChange={onValidationChange}
        />
      </TabPane>
    ));

    return routeTabsContent;
  }

  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container-fluid mb-4'>
          <h1 className='mb-4'>Validaciones del Fideicomiso</h1>
          <ProcessInfo 
            { ...escrowValidatorsGenerationGuide } 
          />
          <TabContainer defaultActiveKey={1}>
            <div className="row">
              <div className="col-sm-2">
               <Nav variant="pills" className="flex-column">
                {getTabsFromRoutes()}
                <button 
                  className="btn btn-outline-info mt-4"
                  onClick={registerValidations}
                >
                  Enviar
                </button>
               </Nav>
              </div>
              <div className="col-sm-10">
                <TabContent>
                  {getTabsContentFromRoutes()}
                </TabContent>
              </div>
            </div>
          </TabContainer>
        </div>
      </div>
    </Main>
  );
}

export default ServiceValidation;