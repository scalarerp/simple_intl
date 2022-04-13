// https://github.com/wojtekmaj/get-user-locale/blob/main/src/index.js

// ### `getUserLocale()`
// A function that returns user's preferred locale as an [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), based on all available sources.

import { once } from 'lodash'

function uniq(arr) {
    return arr.filter((el, index, self) => self.indexOf(el) === index)
}

function normalizeLocales(arr) {
    return arr.map((el) => {
        if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
            return el
        }

        const splitEl = el.split('-')
        return `${splitEl[0]}-${splitEl[1].toUpperCase()}`
    })
}

function getUserLocalesInternal() {
    let languageList = []

    if (typeof window !== 'undefined') {
        const { navigator } = window

        if (navigator.languages) {
            languageList = languageList.concat(navigator.languages)
        }
        if (navigator.language) {
            languageList.push(navigator.language)
        }
        if (navigator.userLanguage) {
            languageList.push(navigator.userLanguage)
        }
        if (navigator.browserLanguage) {
            languageList.push(navigator.browserLanguage)
        }
        if (navigator.systemLanguage) {
            languageList.push(navigator.systemLanguage)
        }
    }

    languageList.push('pt-BR') // Fallback

    return normalizeLocales(uniq(languageList))
}

export const getUserLocales = once(getUserLocalesInternal)

function getUserLocaleInternal() {
    return getUserLocales()[0]
}

export const getUserLocale = once(getUserLocaleInternal)

export default getUserLocale
