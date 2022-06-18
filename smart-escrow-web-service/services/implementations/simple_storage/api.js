import fs from "fs";

export function getUserByEmail(email) {
  const usersData = loadData();
  if (!usersData) {
    return null;
  }

  const filteredArray = usersData.filter(user => user.email === email);
  if (filteredArray.length > 0) {
    return filteredArray[0];
  }
  return null;
}

export function getUserById(id) {
  if (!usersData) {
    loadData();
  }

  const filteredArray = usersData.filter(user => user.id === id);
  if (filteredArray.length > 0) {
    return filteredArray[0];
  }

  return null;
}

export function createUser(user) {
  if (!usersData) {
    loadData();
  }

  usersData.push(user);
  const usersDataJSON = JSON.stringify(usersData);
  try {
    fs.writeFileSync('./services/implementations/simple_storage/storage/users.json', usersDataJSON);
    return true
  } catch (err) {
    console.error(err);
    return false;
  }
}

function loadData() {
  try {
    const data = fs.readFileSync('./services/implementations/simple_storage/storage/users.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}