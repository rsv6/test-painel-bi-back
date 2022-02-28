
export default class RepoEnv {
  #port_api = ""
  #tkn_secr

  constructor () {
    this.#setPortApi(process.env.PORT)
    this.#setTknSecrects({
      compras: process.env.TKN_COMPRAS,
      admin:  process.env.TKN_ADMINIS,
      ti: process.env.TKN_TECINFO
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