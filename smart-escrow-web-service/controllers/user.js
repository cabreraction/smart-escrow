import persistance from '../services/persistance.js';
const { getUserById } = persistance;

export function getUser(req, res) {
  const { id } = req.params;
  let user = getUserById(id);
  
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send(null);
  }
}