import logins from '../dao/logins.json'

export default class Logins {

  constructor () {
    this.logins = logins
  }

  getlogins () {
    return this.logins
  }
}