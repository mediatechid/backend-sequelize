const Sequelize = require('sequelize')

const sequelize = new Sequelize('ecommerce', "user1", "user12345",
{
    dialect: "mysql",
    host:"localhost"
}
)

module.exports = sequelize
