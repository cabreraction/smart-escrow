import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Main({ children }) {
  const { type } = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Smart Escrow</span>
          {
              /*
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              */
          }
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/escrows-history">Contratos</Link>
              </li>
              {
                type === 'employer' &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/escrow-generation/draft">Generador</Link>
                  </li>
              }
              {
                type === 'developer' &&
                  <li className="nav-item">
                    <Link className="nav-link" to="/find">Encontrar</Link>
                  </li>
              }
            </ul>
          </div>
          <div>
            <button 
              className="btn btn-outline-warning"
              onClick={logout}
            >
              Cerrar Sesi&oacute;n
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Main;