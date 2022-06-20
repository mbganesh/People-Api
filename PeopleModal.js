import fs from 'fs'

let jsonData =  () => JSON.parse(fs.readFileSync('./People.json', 'utf-8'))

export default jsonData