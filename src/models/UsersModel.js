import { Sequelize, DataTypes } from 'sequelize'
import Conn from '../dao/conn'
// import users from '../dao/users.json'


export default class UsersModel {

  constructor () {
    this.cadUser = new Conn().connarq.define("CAD_USER", {
      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false
      },
      administrador: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      setor: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: false,
      freezeTableName: true
    })
  }

  findOne() {
    let user = this.cadUser.findOne({
      where: { LOGIN: "admin", SENHA: "underline" }
    })

    return user
  }
}


