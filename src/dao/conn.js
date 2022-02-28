import { Sequelize } from 'sequelize'
import config from '../../server/config'

export default class Conn {

  constructor () {
    this.secretTokens = config.server().secrets

    this.database = config.dbArq().database
    this.host = config.dbArq().host
    this.user = config.dbArq().user
    this.pass = config.dbArq().pass
    this.port = config.dbArq().port
    this.dialect = config.dbArq().dialect

    this.connarq = new Sequelize(
      this.database,
      this.user,
      this.pass,
      {
        host: this.host,
        port: parseInt(this.port),
        dialect: this.dialect
      }
    )
  }
  
  getConnArq() {
    return this.connArq
  }
}

