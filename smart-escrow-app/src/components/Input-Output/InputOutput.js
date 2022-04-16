import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/theme-twilight'
import "ace-builds/src-noconflict/ext-language_tools";

function InputOutput({ readOnly }) {
  return (
    <div className='d-flex flex-column'>
      <div className='mb-3'>
        <div className='d-flex justify-content-between mb-2 align-items-end'>
          <label>Entrada:</label>
          <button className='btn btn-outline-primary'>Importar</button>
          <input type='file' accept=".json" hidden></input>
        </div>
        <AceEditor
          mode='json'
          theme='twilight'
          name='inputEditor'
          width='100%'
          readOnly={readOnly}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between mb-2 align-items-end'>
          <label>Salida:</label>
          <button className='btn btn-outline-primary'>Importar</button>
          <input type='file' accept=".json" hidden></input>
        </div>
        <AceEditor
          mode='json'
          theme='twilight'
          name='outputEditor'
          width='100%'
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}

export default InputOutput;