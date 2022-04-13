import {
    allLocaleMessages,
    LocaleMessages,
} from './localesResources/allMessages'
import { getLocaleJSONasync } from './localesResources/util'
import { proxy } from 'valtio'

export const initialLocale = 'pt-BR'

export const initialMessages = async () =>
    await getLocaleJSONasync(initialLocale)

interface ApplicationState {
    locale?: string
    messages?: any
    tLang: LocaleMessages
}

export const store = proxy<ApplicationState>({
    locale: initialLocale,
    messages: initialMessages,
    tLang: allLocaleMessages(initialMessages),
})

export const handleChangeLocaleAsync = async (newLocale: string) => {
    store.messages = await getLocaleJSONasync(newLocale)

    console.log('handleChangeLocale: ', newLocale, 'messages: ', store.messages)
    store.locale = newLocale
    store.tLang = allLocaleMessages(store.messages)
}
