//// DB Local
// const Sequelize = require('sequelize');
// module.exports = new Sequelize('bsdb', 'root', '', {
//     host: 'localhost',
//     dialect:'mysql'
//   });

// DB BS
const Sequelize = require('sequelize');
module.exports = new Sequelize('bsdb', 'forge', 'jiWKaCZuKgTPILviVmGZ', {
    host: '192.81.212.244',
    dialect:'mysql'
  });