import persistance from '../services/persistance.js';
const { getUserById, updateUserPassword } = persistance;

export function getUser(req, res) {
  const { id } = req.params;
  let user = getUserById(id);
  
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send(null);
  }
}

export function changeUserPassword(req, res) {
  const { id, oldPassword, newPassword } = req.body;
  let updated = updateUserPassword(id, oldPassword, newPassword);

  if (updated) {
    res.status(200).send({ operationStatus: 'ok' });
  } else {
    res.status(500).send({ operationStatus: 'failed' });
  }
}