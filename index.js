
import Server from "./server/Server";

// Initialize System
class InitServer {

  constructor() {
    this.server = new Server()
  }

  start() {

    try {
      console.log(`Server running... `)
      this.server.start()
    } catch (err) {
      console.log(`500 Internal Server Error: ${err}`)
    }
  }
}

const App = new InitServer()

App.start()

