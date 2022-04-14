import { getLocaleJSONasync } from './localesResources/util'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { LocaleMessages } from './localesResources/localeMessages'

export const initialLocale = 'pt-BR'

export const initialMessages = async () =>
    await getLocaleJSONasync(initialLocale)

interface ApplicationState {
    locale?: string
    tLang: LocaleMessages
}

export const store = proxy<ApplicationState>({
    locale: initialLocale,
    tLang: initialMessages,
})
const unsub = devtools(store, 'simpleIntl')

export const handleChangeLocaleAsync = async (newLocale: string) => {
    store.tLang = await getLocaleJSONasync(newLocale)
    // console.log('handleChangeLocale: ', newLocale, 'messages: ', store.messages)
    store.locale = newLocale
}
