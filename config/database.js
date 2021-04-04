//// DB Local
// const Sequelize = require('sequelize');
// module.exports = new Sequelize('bsdb', 'root', '', {
//     host: 'localhost',
//     dialect:'mysql'
//   });

// DB BS
const Sequelize = require('sequelize');
module.exports = new Sequelize('bsdb', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
  });