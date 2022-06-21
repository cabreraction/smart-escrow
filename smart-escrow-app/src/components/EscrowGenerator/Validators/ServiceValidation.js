import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import Nav from 'react-bootstrap/Nav';

import Main from '../../Main/Main';
import ProcessInfo from '../../ProcessInfo/ProcessInfo';
import { escrowValidatorsGenerationGuide } from '../../../content/content';
import { getEscrow } from '../../../services/escrowService';

function ServiceValidation() {
  const { id: escrowId } = useParams();
  const [ routes, setRoutes ] = useState([]);
  const [ validations, setValidations ] = ([]);

  useEffect(() => {
    async function fetchData() {
      const { escrow, status } = await getEscrow(escrowId);
      if (status === 200) {
        setRoutes(escrow.routes);
      } else {
        // report error and move to escrow history ??
      }
    }
    fetchData();
  }, [escrowId]);

  const getTabsFromRoutes = () => {
    const routeTabs = routes.map((route, index) => (
      <Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={index+1}>{`${route.endpointRoute} - ${route.operation}`}</Nav.Link>
        </Nav.Item>
      </Nav.Item>
    ))

    return routeTabs;
  }

  const getTabsContentFromRoutes = () => {
    const routeTabsContent = routes.map((route, index) => (
      <div>
        <TabPane eventKey={index+1}>
          <div className='border border-solid'>
          yeah yeah yeahs
          </div>
        </TabPane>
      </div>
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