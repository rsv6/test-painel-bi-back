import Logins from "../models/LoginsModels.js"

export default class AuthLogin {
  #logins

  constructor () {
    this.#setLogin(new Logins().getlogins())
  }

  #getLogins () {
    return this.#logins
  }

  #setLogin (logins) {
    this.#logins = logins
  }

  validLogin (logins) {
    // console.log(logins)

    // return this.#getLogins()
    return this.#getLogins().find(l => l.login === logins.login && l.senha === logins.senha)

    // return this.#getLogins().find(l => {
    //   if (l.logins === logins.login && l.senha === logins.senha) {
    //     return l
    //   } else {

    //     return { auth: false }
    //   }
    // })
  }
}