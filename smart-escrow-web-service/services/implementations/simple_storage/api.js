import fs from "fs";

export function getUserByEmail(email) {
  const usersData = loadUsersData();
  if (usersData.length === 0) {
    return null;
  }

  const filteredArray = usersData.filter(user => user.email === email);
  if (filteredArray.length > 0) {
    return filteredArray[0];
  }
  return null;
}

export function getUserById(id) {
  if (usersData.length === 0) {
    loadUsersData();
  }

  const filteredArray = usersData.filter(user => user.id === id);
  if (filteredArray.length > 0) {
    return filteredArray[0];
  }

  return null;
}

export function createUser(user) {
  const usersData = loadUsersData();
  usersData.push(user);
  const usersDataJSON = JSON.stringify(usersData);
  return writeUsersDataToFile(usersDataJSON);
}

function loadUsersData() {
  try {
    const data = fs.readFileSync('./services/implementations/simple_storage/storage/users.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}

function writeUsersDataToFile(data) {
  try {
    fs.writeFileSync('./services/implementations/simple_storage/storage/users.json', data);
    return true
  } catch (err) {
    console.error(err);
    return false;
  }
}

// escrow functions 
function loadEscrowsData() {
  try {
    const data = fs.readFileSync('./services/implementations/simple_storage/storage/escrows.json', 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return null;
  }
}

function writeEscrowsDataToFile(data) {
  try {
    fs.writeFileSync('./services/implementations/simple_storage/storage/escrows.json', data);
    return true
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function createEscrowDraft(draft) {
  const escrowsData = loadEscrowsData();
  escrowsData.push(draft);
  const escrowsDataJSON = JSON.stringify(escrowsData);
  return writeEscrowsDataToFile(escrowsDataJSON);
}

export function getEscrowById(id) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return null;
  }

  const filteredEscrows = escrowsData.filter(escrow => escrow.id === id);
  if (filteredEscrows.length > 0) {
    return filteredEscrows[0];
  }

  return null;
}

export function updateEscrowRoutes(id, routes) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return false;
  }

  const updatedEscrowsData = escrowsData.map(escrow => {
    const modifiedEscrow = { ...escrow };
    if (modifiedEscrow.id === id) {
      modifiedEscrow.routes = routes;
      modifiedEscrow.status = 'detailed';
    }

    return modifiedEscrow;
  });
  const escrowsDataJSON = JSON.stringify(updatedEscrowsData);

  return writeEscrowsDataToFile(escrowsDataJSON);
}

export function updateEscrowValidations(id, validations) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return false;
  }

  const updatedEscrowsData = escrowsData.map(escrow => {
    const modifiedEscrow = { ...escrow };
    if (modifiedEscrow.id === id) {
      modifiedEscrow.validations = validations;
      modifiedEscrow.status = 'stand by';
    }

    return modifiedEscrow;
  });
  const escrowsDataJSON = JSON.stringify(updatedEscrowsData);

  return writeEscrowsDataToFile(escrowsDataJSON);
}

export function updateEscrowCode(id, code) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return false;
  }

  const updatedEscrowsData = escrowsData.map(escrow => {
    const modifiedEscrow = { ...escrow };
    if (modifiedEscrow.id === id) {
      modifiedEscrow.code = code;
      modifiedEscrow.status = 'stand by';
    }

    return modifiedEscrow;
  });
  const escrowsDataJSON = JSON.stringify(updatedEscrowsData);

  return writeEscrowsDataToFile(escrowsDataJSON);
}

export function getEscrowsByOwnerId(id) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return [];
  }

  const filteredEscrows = escrowsData.filter(escrow => escrow.ownerId === id);
  return filteredEscrows;
}

export function getEscrowsByDeveloperId(id) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return [];
  }

  const filteredEscrows = escrowsData.filter(escrow => escrow.developers.includes(id));
  return filteredEscrows;
}

export function getEscrowByCode(code) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return null;
  }

  const filteredEscrows = escrowsData.filter(escrow => escrow.code === code);
  if (filteredEscrows.length > 0) {
    return filteredEscrows[0];
  }

  return null;
}

export function addDeveloperToEscrow(userId, escrowId) {
  const escrowsData = loadEscrowsData();
  if (escrowsData.length === 0) {
    return false;
  }

  const updatedEscrowsData = escrowsData.map(escrow => {
    const modifiedEscrow = { ...escrow };
    if (modifiedEscrow.id === escrowId) {
      modifiedEscrow.developers.push(userId);
      modifiedEscrow.status = 'active';
    }

    return modifiedEscrow;
  });
  const escrowsDataJSON = JSON.stringify(updatedEscrowsData);

  return writeEscrowsDataToFile(escrowsDataJSON);
}