'use strict';

const HashMap = require('./hash-maps');

const main = () => {
  let Lor = new HashMap();
  Lor.set('Hobbit', 'Bilbo');
  Lor.set('Hobbit', 'Frodo');
  Lor.set('Wizard', 'Gandolf');
  Lor.set('Human', 'Aragon');
  Lor.set('Human', 'Aragon');
  console.log(Lor);
};

main();
