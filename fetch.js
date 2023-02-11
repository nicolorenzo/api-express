const url = 'http://localhost:5500/api';

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((error) => console.error(error));
}

const newUser = {
  name: 'Olivia Zars',
  avatar: 'https://picsum.photos/400/200',
  city: 'Rio do Sul',
};

function updateUser(id, updatedUser) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((error) => console.error(error));
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((error) => console.error(error));
}

const updatedUser = {
  name: 'Marcelo Lopes',
  avatar: 'https://picsum.photos/400/200',
  city: 'Recife',
};

addUser(newUser);
updateUser(1, updatedUser);
getUsers();
getUser(1);
deleteUser(2);
