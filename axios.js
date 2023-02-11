const { response } = require('express');

const url = 'http://localhost:5500/api';

function getUsers() {
  axios;
  getUsers(url)
    .then((response) => {
      renderApiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => {
      alertApi.textContent = response.data;
    })
    .catch((error) => console.error(error));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      userName.textContent = response.data.name;
      userCity.textContent = response.data.city;
      userAvatar.textContent = response.data.avatar;
    })
    .catch((error) => console.error(error));
}

function updateUser(id, updatedUser) {
  axios.put(`${url}/${id}`, updatedUser);
  then((response) => {
    alertApi.textContent = response.data;
  }).catch((error) => console.error(error));
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`);
  then((response) => {
    alertApi.textContent = response.data;
  }).catch((error) => console.error(error));
}

const newUser = {
  name: 'Olivia Zars',
  avatar: 'https://picsum.photos/400/200',
  city: 'Rio do Sul',
};

const updatedUser = {
  name: 'Marcelo Lopes',
  avatar: 'https://picsum.photos/400/200',
  city: 'Recife',
};

addNewUser(newUser);
updateUser(updatedUser);
deleteUser(2);
getUsers();
