const Sequelize = require('sequelize')
const db = require('../config/database')
const Donor = db.define('gig', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    }
})