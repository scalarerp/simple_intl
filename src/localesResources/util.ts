export const getLocaleJSONasync = async (newLocale: string) => {
    const response = await getLocaleJson(newLocale)
    return response
}

const getLocaleJson = (newLocale: string) => {
    return new Promise((res) => {
        import(`./locales/${newLocale}.json`).then((data) => {
            res(data?.default)
        })
    })
}
