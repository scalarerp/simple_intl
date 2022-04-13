import { initialMessages } from './../store'
export const getLocaleJSONasync = async (newLocale: string) => {
    const response = await getLocaleJson(newLocale)
    // console.log(response)
    return response
}

const getLocaleJson = (newLocale: string) => {
    return new Promise((res) => {
        import(`./locales/${newLocale}.json`).then((data) => {
            res(data?.default)
        })
    })
}

const TR = () => {
    console.log('initialMessages', initialMessages, typeof initialMessages)
}
