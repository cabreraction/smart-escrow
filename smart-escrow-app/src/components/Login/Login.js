import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import { login } from '../../services/loginService';
import { errorAlert } from '../../services/alertService';
import { validateTextInput } from '../../utils/utils';

function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate();
  
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch(name) {
      case 'loginEmailInput':
        setEmail(value);
        break;
      case 'loginPasswordInput':
        setPassword(value);
        break;
    }
  }

  const handleOnClick = async () => {
    const inputFields = [ { value: email, type: 'email' }, { value: password, type: 'password' } ];
    for (let field of inputFields) {
      const { status, errorMessage } = validateTextInput(field.value, field.type);
      if (status !== 'ok') {
        errorAlert(errorMessage);
        return;
      }
    }

    const response = await login(email, password);
    if (response.status === 200) {
      const user = { id: response.id, type: response.type };
      localStorage.setItem('user', JSON.stringify(user));
      navigate('escrows-history');
    } else {
      errorAlert('Algo ha salido mal, por favor intenta de nuevo');
    }
  }

  return (
    <div className='d-flex h-100 bg-dark justify-content-center align-items-center'>
      <div className='rounded shadow bg-light p-5' style={{ minWidth: '500px' }}>
        <h1 className='h3 mb-3 fw-normal text-center'>Inicie Sesi&oacute;n</h1>
        <div className='mb-3'>
          <label >Correo Electr&oacute;nico</label>
          <input 
            type='email' 
            className='form-control' 
            placeholder='nombre@correo.com' 
            name='loginEmailInput'
            onChange={handleOnChange}
            value={email}
          />
        </div>
        <div className='mb-4'>
          <label>Contrase??a</label>
          <input 
            type='password' 
            className='form-control' 
            placeholder='Contrase??a' 
            name='loginPasswordInput'
            onChange={handleOnChange}
            value={password}
          />
        </div>
        <button 
          className='w-100 btn btn-md btn-outline-primary'
          onClick={handleOnClick}
        >
          Iniciar Sesi&oacute;n
        </button>
        <div className='d-flex justify-content-center mt-2'>
          <small>
            <Link className="nav-link" to="/signup">??No tienes una cuenta? Reg&iacute;strate</Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login;