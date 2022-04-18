const fs = require('fs')
const pt = require('./locales/pt-BR.json')
// pt é o arquivo de entrada
// este programa vai gerar dois arquivos de saída
// 1: interface typescript com todas as keys
// 2: arquivo index.tsx com todas as emptyMessages que é a classe inicial do state

const buildTypes = () => {
    const initFile = `import { LocaleMessages } from './localeMessages.d'
//ARQUIVO GERADO AUTOMATICAMENTE PELO SCRIPT buildLocales.js

export interface LocaleMessages {`
    const keys = Object.keys(pt)
    const keysMap = keys.map((key) => {
        return `    ${key}: String ${'\n'}`
    })
    const fileString = `${initFile} ${'\n'}${keysMap.join('')}}`
    // console.log(fileString)

    fs.writeFile(
        'src/localesResources/localeMessages.d.ts',
        fileString,
        (err) => {
            if (err) throw err
            console.log('localeMessages.d.ts saved!')
        }
    )
}

const buildEmptyMessages = () => {
    const initFile = `import { LocaleMessages } from './localeMessages.d'

//ARQUIVO GERADO AUTOMATICAMENTE PELO SCRIPT buildLocales.js
//somente para checagem do typesciprt
//tranca o build se nao tiver todas as Keys

export const emptyMessages: LocaleMessages = {`

    const keys = Object.keys(pt)
    const keysMap = keys.map((key) => {
        return `    ${key}: '', ${'\n'}`
    })
    const fileString = `${initFile} ${'\n'}${keysMap.join('')}}`
    // console.log(fileString)
    fs.writeFile('src/localesResources/index.ts', fileString, (err) => {
        if (err) throw err
        console.log('index.ts saved!')
    })
}

buildTypes()
buildEmptyMessages()
