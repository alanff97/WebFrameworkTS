import { User } from './models/User';

const user = new User({ name: 'Alan', age: 26 });

user.save();
