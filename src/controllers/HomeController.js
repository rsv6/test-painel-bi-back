
export default class HomeController {
  #home
  #conteudo

  constructor() {
    this.#home = "Welcome at page Home"
    this.#conteudo ="Conteúdo da página principal"
  }

  getHome() {
    return (req, res) => {

      console.log("GET /")
      res.status(200).json(this.#home)
    }
  }

  getConteudo() {
    return (req, res) => {

      console.log("GET /conteudo")
      return res.status(200).json(this.#conteudo)
    }
  }

}