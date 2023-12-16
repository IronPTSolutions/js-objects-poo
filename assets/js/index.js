
const name = 'Carlos';
const lastName = 'del Prado Mota';
const age = 33;

const user = {
  name: 'Carlos',
  lastName: lastName,
  age: 33,
  skills: ['scala', 'js', 'bash'],
  isDeveloper: true
}

const attr = 'name';
console.log(user.name);
console.log(user[attr]);

const users = [
  { name: 'Carlos', lastName: 'del Prado', age: 33 },
  { name: 'Julio', lastName: 'Garcia', age: 30 },
  { name: 'Ana', lastName: 'del Prado', age: 37 },
  { name: 'Maria', lastName: 'Sanchez', age: 26 }
]

/**
 * 
 * @param {[object]} users
 * @returns {[string]} 
 */
function getNames(users) {
  const names = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    names.push(user.name);
  }
  return names;
}

/**
 * { name: 'Carlos', lastName: 'del Prado Mota'} => 'carlos.delpradomota@example.org'
 * { name: 'Jose Ramon', lastName: 'Mosquera'} => 'joseramon.mosquera@example.org'
 * @param {object} user 
 * @returns {string}
 */
function buildEmail(user) {
  const name = user.name.toLowerCase().replaceAll(' ', '');
  const lastName = user.lastName.toLowerCase().replaceAll(' ', '');
  return `${name}.${lastName}@example.org`;
}

/**
 * 
 * @param {[object]} users 
 * @returns {[object]}
 */
function addEmails(users) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    user.email = buildEmail(user);
  }
  return users;
}

function printUsers(users) {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`- name: ${user.name}, - sure name: ${user.lastName}`)
  }
}

/**
 * 
 * @param {[object]} users 
 * @param {number} age
 * @returns {[string]}
 */
function olderThan(users, age) {
  const names = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age > age) {
      names.push(user.name);
    }
  }
  return names;
}

console.log(users[0]);
console.log(`names`, getNames(users));
console.log(`users with emails`, addEmails(users));
console.log(`users without emails`, users);
console.log(`users > 31`, olderThan(users, 31));
printUsers(users);