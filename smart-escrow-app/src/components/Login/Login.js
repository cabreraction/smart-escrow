import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { login } from '../../services/loginService';

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
  if (!email) {
    alert('Por favor introduzca una dirección de correo electrónico');
  }
  else if (!password) {
    alert('Por favor indique su contraseña');
  }

  const response = await login(email, password);
    if (response.status === 200) {
      // store user in localStorage
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('../escrows-history');
    } else {
      alert('Algo ha salido mal, por favor intenta de nuevo');
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
          <label>Contraseña</label>
          <input 
            type='password' 
            className='form-control' 
            placeholder='Contraseña' 
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
      </div>
    </div>
  )
}

export default Login;