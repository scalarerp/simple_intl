import { emptyMessages } from './localesResources/index'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { LocaleMessages } from './localesResources/localeMessages'

export const initialLocale = 'pt-BR'

interface ApplicationState {
    locale?: string
    tLang: LocaleMessages
}

export const store = proxy<ApplicationState>({
    locale: initialLocale,
    tLang: emptyMessages,
})
const unsub = devtools(store, 'simpleIntl')

export const handleChangeLocaleAsync = async (newLocale: string) => {
    store.tLang = await getLocaleJSONasync(newLocale)
    store.locale = newLocale
}

const getLocaleJSONasync = async (newLocale: string) => {
    const result = new Promise<LocaleMessages>((res) => {
        import(`./localesResources/locales/${newLocale}.json`).then((data) => {
            res(data?.default)
        })
    })
    return result
}
