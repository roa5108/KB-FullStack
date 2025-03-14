let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
const getBase = () => base;

export { add, multiply };
export default getBase;

// import { add } from './02-19-module.js';
// import { multiply } from './02-19-module.js';
// import getBase from './02-19-module.js';

// console.log(add(4));
// console.log(multiply(4));
// console.log(getBase());
