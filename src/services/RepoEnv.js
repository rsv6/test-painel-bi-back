
export default class RepoEnv {
  #port_api = ""
  #tkn_secr

  constructor () {
    this.#setPortApi(process.env.PORT)
    this.#setTknSecrects({
      compras: process.env.COMPRAS,
      gfe: process.env.GFE,
      administrador: process.env.ADMINISTRADOR
    })
  }

  getPortApi () {
    return this.#port_api
  }

  #setPortApi (apiport) {
    this.#port_api= apiport 
  }

  getTknSecrects () {
    return this.#tkn_secr
  }

  #setTknSecrects (objtkn) {
    this.#tkn_secr = objtkn
  }
}