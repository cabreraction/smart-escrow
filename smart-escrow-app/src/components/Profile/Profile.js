import { useEffect, useState } from 'react';

import Main from '../Main/Main';
import { getUser } from '../../services/userService';

function Profile() {
  const [ user, setUser ] = useState();
  const { id } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const localFetch = async () => {
      const userData = await getUser(id);
      setUser(userData.user);

      console.log(user);
    };

    localFetch();
  }, [id])

  return (
    <Main>
      
    </Main>
  );
}

export default Profile;