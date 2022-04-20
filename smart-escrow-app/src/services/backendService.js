export function getEscrows() {
  return [
    { 
      id: 1,
      name: 'Example Active Contract 1',
      expiration_date: '21/04/2022',
      price: 100,
      state: 'active'
    },
    {
      id: 2,
      name: 'Example Active Contract 2',
      expiration_date: '22/04/2022',
      price: 110,
      state: 'active'
    },
    {
      id: 3,
      name: 'Example Active Contract 3',
      expiration_date: '23/04/2022',
      price: 120,
      state: 'active'
    },
    { 
      id: 4,
      name: 'Example Expired Contract 1',
      expiration_date: '19/04/2022',
      price: 100,
      state: 'expired'
    },
    {
      id: 5,
      name: 'Example Expired Contract 2',
      expiration_date: '18/04/2022',
      price: 110,
      state: 'expired'
    },
    {
      id: 6,
      name: 'Example Expired Contract 3',
      expiration_date: '17/04/2022',
      price: 120,
      state: 'expired'
    },
    { 
      id: 7,
      name: 'Example Completed Contract 1',
      expiration_date: '19/04/2022',
      price: 100,
      state: 'completed'
    },
    {
      id: 8,
      name: 'Example Completed Contract 2',
      expiration_date: '18/04/2022',
      price: 110,
      state: 'completed'
    },
    {
      id: 9,
      name: 'Example Completed Contract 3',
      expiration_date: '17/04/2022',
      price: 120,
      state: 'completed'
    },
  ]
}