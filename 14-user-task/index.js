"use strict";

import { Task } from './task.js';
import { User } from './user.js';

const task = new Task('Привет пользователь!');
const user = new User(task);
user.do();