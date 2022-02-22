
import { fileURLToPath } from 'url'       
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default await (await import('fs')).readFileSync(__dirname+'\\users.json', 'utf8')
