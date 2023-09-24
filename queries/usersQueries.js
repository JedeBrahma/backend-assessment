// const usersData = require('../usersData.json');
const db = require('../../db');

const idToUserIndex = usersData.reduce((index, user) => {
  const { id } = user;
  index[id] = user;
  return index;
}, {});

const getAllUsers = async () => {
const users = await db.any('SELECT * FROM users');
return users;
};

const getUserById = async (id) => {
  const user = await db.oneOrNone('SELECT * FROM students WHERE id = $1', [id]);
  return idToUserIndex[id];
}

module.exports = {
  getAllUsers,
  getUserById,
}