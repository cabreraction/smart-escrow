import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-twilight'
import "ace-builds/src-noconflict/ext-language_tools";

function InputOutput(props) {
  const { readOnly, index, input, output, onChange } = props;

  const inputChange = (value) => {
    onChange(value, index, 'input');
  }

  const outputChange = (value) => {
    onChange(value, index, 'output');
  }

  return (
    <div className='d-flex flex-column'>
      <div className='mb-3'>
        <div className='d-flex justify-content-between mb-2 align-items-end'>
          <strong>Entrada:</strong>
          { /* <button className='btn btn-outline-primary'>Importar</button> */ }
          { /* <input type='file' accept=".json" hidden></input> */ }
        </div>
        <AceEditor
          mode='json'
          theme='twilight'
          name='inputEditor'
          width='100%'
          readOnly={readOnly}
          value={input}
          onChange={inputChange}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between mb-2 align-items-end'>
          <strong>Salida:</strong>
          { /* <button className='btn btn-outline-primary'>Importar</button> */ }
          { /* <input type='file' accept=".json" hidden></input> */ }
        </div>
        <AceEditor
          mode='json'
          theme='twilight'
          name='outputEditor'
          width='100%'
          readOnly={readOnly}
          value={output}
          onChange={outputChange}
        />
      </div>
    </div>
  );
}

export default InputOutput;