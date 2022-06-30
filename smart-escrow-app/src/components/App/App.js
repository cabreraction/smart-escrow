import { Routes, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import EscrowGenerator from '../EscrowGenerator/Draft/EscrowGenerator';
import EscrowDetails from '../EscrowGenerator/Details/EscrowDetails';
import EscrowsHistory from '../EscrowsHistory/EscrowsHistory';
import UniqueEscrowView from '../UniqueEscrowView/UniqueEscrowView';
import ServiceValidation from '../EscrowGenerator/Validators/ServiceValidation';
import FindEscrow from '../FindEscrow/FindEscrow';
import Profile from '../Profile/Profile';
import RequireAuth from '../RequireAuth/RequireAuth';

function App() {
  return (
    <Routes>
      <Route 
        path='/' 
        element={ <Login /> } 
      />
      <Route 
        path='signup' 
        element={ <Signup /> } 
      />
      <Route 
        path='escrow-generation' 
      >
        <Route 
          path='draft'
          element={ 
            <RequireAuth type='employer'>
              <EscrowGenerator />
            </RequireAuth>
         } 
        />
        <Route 
          path='details/:id'
          element={ 
            <RequireAuth type='employer'>
              <EscrowDetails />
            </RequireAuth>
        }
        />
        <Route
          path='validations/:id'
          element={ 
            <RequireAuth type='employer'>
              <ServiceValidation />
            </RequireAuth>
        }
        />
      </Route>
      <Route 
        path='escrows-history' 
        element={ 
          <RequireAuth>
            <EscrowsHistory /> 
          </RequireAuth>
        } 
      />
      <Route
        path='escrow/:id'
        element={
          <RequireAuth>
            <UniqueEscrowView />
          </RequireAuth> 
        }
      />
      <Route
        path='find'
        element={ 
          <RequireAuth type='developer'>
            <FindEscrow /> 
          </RequireAuth>
      }
      />
      <Route 
        path='profile' 
        element={ 
          <RequireAuth>
            <Profile />
          </RequireAuth>
       } 
      />
    </Routes>
  );
}

export default App;
