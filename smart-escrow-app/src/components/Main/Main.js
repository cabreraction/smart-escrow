import { Link } from "react-router-dom";

function Main({ children }) {
  const { type } = JSON.parse(localStorage.getItem('user'));

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
                    <a className="nav-link" href="/find">Encontrar</a>
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Main;