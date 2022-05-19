import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useState } from 'react'

import InputOutput from '../Input-Output/InputOutput';

function EscrowInputOutput() {
    const [ examplesArray, setExamplesArray ] = useState([]);
    const [ show, setShow ] = useState(false);
    const addExample = () => {
      const local = [...examplesArray]
      const limit = local.length === 0 ? 4 : 1;
      for (let i = 0; i < limit; i++) {
        local.push({
          id: limit === 4 ? i : local.length,
          input: '',
          output: '',
          route: '',
          method: ''
        })
      }
    
      setExamplesArray(local)
    };

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    const handleInputOutputChange = (value, index, type) => {
      const modified = examplesArray.map((example, i) => {
        if (i === index) {
          if (type === 'output') {
            example.output = value;
          } else {
            example.input = value;
          }
        }
        return example;
      })
    
      setExamplesArray(modified);
    }

    return (
        <div>
            <Modal 
          show={show} 
          onHide={handleClose} 
          backdrop="static"
          keyboard={false} 
        >
          <Modal.Header >
            <Modal.Title>El Fideicomiso Ha Sido Creado</Modal.Title>
          </Modal.Header>
          <Modal.Body>Felicidades! Tu fideicomiso ha sido creado, el codigo del mismo es: Hyo987Ad</Modal.Body>
          <Modal.Footer>
            <button className='btn btn-outline-danger' onClick={handleClose}>
              Ir a la pantalla principal
            </button>
          </Modal.Footer>
        </Modal>
            <div className='d-flex justify-content-between align-items-end'>
            <h2>Entradas y Salidas</h2>
            <button 
              className='btn btn-outline-secondary'
              onClick={addExample}
            >
              Agregar+
            </button>
          </div>
          {
            examplesArray.length ?
            <Tabs>
              {
                examplesArray.map((example) => (
                  <Tab eventKey={example.id} title={`Prueba ${example.id + 1}`} key={example.id}>
                    <InputOutput
                      readOnly={false}
                      index={example.id}
                      input={example.input}
                      output={example.output}
                      onChange={handleInputOutputChange}
                    />
                  </Tab>
                ))
              }
            </Tabs> : null
          }
        </div>
    );
}

export default EscrowInputOutput;