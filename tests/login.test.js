
// Get secrets tokens
import config from "../server/config";

console.log(config.server().secrets)




// const login = [
//   { "id": 1, "login": "rafael", "senha": "123456", "setor": "ti" },
//   { "id": 2, "login": "maite", "senha": "654321", "setor": "admin" },
//   { "id": 3, "login": "leticia", "senha": "098765", "setor": "compras" },
//   { "id": 4, "login": "malu", "senha": "345678", "setor": "ti" },
//   { "id": 5, "login": "joao", "senha": "123765", "setor": "ti" },
//   { "id": 6, "login": "brenda", "senha": "456849", "setor": "compras" }
// ]

// // Some:
// const auth = login.some(l => {
//   return l.login === 'brenda' && l.senha === '456849'
// })

// // Find:
// const auth2 = login.find(f => {
//   return f.login === 'malu' && f.senha === '345678'
// })


// // console.log(auth)
// console.log(auth2)