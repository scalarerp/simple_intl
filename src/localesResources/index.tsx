import { LocaleMessages } from './localeMessages.d'

//only to check with typescript
//this locks the build
export const mustHaveTranslation: LocaleMessages = {
    ABOUT_LICENSE_TITLE: '',
    ABOUT_TITLE: '',
    ABOUT_VERSION: '',
}

export const locales = [
    { locale: 'pt-BR', name: 'Português', icon: <span>Pt-BR</span> },
    { locale: 'en-US', name: 'English', icon: <span>En-US</span> },
    { locale: 'es-ES', name: 'Español', icon: <span>En-ES</span> },
]
