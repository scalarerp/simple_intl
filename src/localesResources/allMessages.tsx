export interface LocaleMessages {
    ABOUT_LICENSE_TITLE: String
    ABOUT_TITLE: String
    ABOUT_VERSION: String
}

export const allLocaleMessages = (messages: any) => {
    const T = (id: string) => {
        return messages[id]
    }

    const result: LocaleMessages = {
        ABOUT_LICENSE_TITLE: T('ABOUT_LICENSE_TITLE'),
        ABOUT_TITLE: T('ABOUT_TITLE'),
        ABOUT_VERSION: T('ABOUT_VERSION'),
    }

    return result
}
