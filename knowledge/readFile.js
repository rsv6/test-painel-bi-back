import { fileURLToPath } from 'url'       
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Read file JSON ES Modules:
// import { readFile } from 'fs/promises'
// const users = JSON.parse(
//   await readFile(
//     new URL('users.json', import.meta.url)
//     )
//   )
// console.log(users)



// 1º Option: Promises API "Presenting error" 
// import { readFile } from 'fs/promises' // Promises 
// const lerArquivo = async () => {

//   try {
//     const controller = new AbortController()
//     const { signal } = controller
//     const promise = readFile(__dirname+'\\..\\src\\dao\\users.json', { signal })

//     // Abort the request before the promise settles
//     controller.abort()

//     await promise
//   } catch (err) {
//     // When a request is aborted - err is an AbortError
//     console.error(err)
//   }
// }
// lerArquivo()

// console.log(dbusers[0])

// 2º Option: Callback API
// import { readFile } from 'fs'             // Callback
// readFile(__dirname+'\\..\\src\\dao\\users.json', (err, data) => {
//   if (err) throw console.error("Error read try file JSON ", err)

//   const content = JSON.parse(data)

//   console.log(content)
// })

// 3º Option: Synchronous API
// import { readFileSync } from 'fs'          // Sync
// const users = JSON.parse(readFileSync(__dirname+'\\..\\src\\dao\\users.json', 'utf8'))
// console.log(users)