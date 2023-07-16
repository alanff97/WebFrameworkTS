import { User } from './models/User';
const userCreate = new User({ name: 'Alan', age: 26 });

console.log(userCreate.get('name'));
console.log(userCreate.get('age'));
