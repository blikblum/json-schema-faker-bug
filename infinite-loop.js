const { faker } = require('@faker-js/faker/locale/pt_BR')
const jsf = require('json-schema-faker')
const fs = require('fs')

jsf.extend('faker', () => faker)
// jsf.extend('x-faker', () => faker)


const schemaContent = fs.readFileSync('./schema.json', 'utf8')
const schema = JSON.parse(schemaContent)

jsf.resolve(schema).then((result) => {
  console.log(JSON.stringify(result, null, 2))  
}).catch(error => console.error(error))