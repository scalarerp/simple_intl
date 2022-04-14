import { LocaleMessages } from './localeMessages.d'

//only to check with typescript
//this locks the build
export const emptyMessages: LocaleMessages = {
    ABOUT_LICENSE_TITLE: '',
    ABOUT_TITLE: '',
    ABOUT_VERSION: '',
}

export const locales = [
    {
        locale: 'pt-BR',
        name: 'Português',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
            >
                <mask id="a">
                    <circle cx="256" cy="256" r="256" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                    <path fill="#6da544" d="M0 0h512v512H0z" />
                    <path
                        fill="#ffda44"
                        d="M256 100.2 467.5 256 256 411.8 44.5 256z"
                    />
                    <path
                        fill="#eee"
                        d="M174.2 221a87 87 0 0 0-7.2 36.3l162 49.8a88.5 88.5 0 0 0 14.4-34c-40.6-65.3-119.7-80.3-169.1-52z"
                    />
                    <path
                        fill="#0052b4"
                        d="M255.7 167a89 89 0 0 0-41.9 10.6 89 89 0 0 0-39.6 43.4 181.7 181.7 0 0 1 169.1 52.2 89 89 0 0 0-9-59.4 89 89 0 0 0-78.6-46.8zM212 250.5a149 149 0 0 0-45 6.8 89 89 0 0 0 10.5 40.9 89 89 0 0 0 120.6 36.2 89 89 0 0 0 30.7-27.3A151 151 0 0 0 212 250.5z"
                    />
                </g>
            </svg>
        ),
    },
    {
        locale: 'en-US',
        name: 'English',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
            >
                <mask id="a">
                    <circle cx="256" cy="256" r="256" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                    <path
                        fill="#eee"
                        d="M0 256 256 0h256v55.7l-20.7 34.5 20.7 32.2v66.8l-21.2 32.7L512 256v66.8l-24 31.7 24 35.1v66.7l-259.1 28.3L0 456.3v-66.7l27.1-33.3L0 322.8z"
                    />
                    <path
                        fill="#d80027"
                        d="M256 256h256v-66.8H236.9zm-19.1-133.6H512V55.7H236.9zM512 512v-55.7H0V512zM0 389.6h512v-66.8H0z"
                    />
                    <path fill="#0052b4" d="M0 0h256v256H0z" />
                    <path
                        fill="#eee"
                        d="M15 14.5 6.9 40H-20L1.7 55.8l-8.3 25.5L15 65.5l21.6 15.8-8.2-25.4L50.2 40H23.4zm91.8 0L98.5 40H71.7l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.4L142 40h-26.8zm91.9 0-8.3 25.6h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.6 15.7-8.2-25.3 21.7-16H207zM15 89.2l-8.3 25.5H-20l21.7 15.8-8.3 25.5L15 140l21.6 15.7-8.2-25.3 21.7-16H23.4zm91.8 0-8.3 25.5H71.8l21.7 15.8-8.3 25.5 21.7-15.8 21.6 15.7-8.2-25.3 21.7-16h-26.8zm91.8 0-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.6 15.7-8.2-25.3 21.7-16H207zM15 163.6l-8.3 25.5H-20L1.6 205l-8.3 25.5L15 214.6l21.7 15.8-8.3-25.4 21.7-15.9H23.3zm91.8 0-8.3 25.5H71.7L93.4 205l-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.4 21.7-15.9h-26.8zm91.8 0-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8L212 205l21.7-15.9H207z"
                    />
                </g>
            </svg>
        ),
    },
    {
        locale: 'es-ES',
        name: 'Español',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
            >
                <mask id="a">
                    <circle cx="256" cy="256" r="256" fill="#fff" />
                </mask>
                <g mask="url(#a)">
                    <path
                        fill="#d80027"
                        d="M0 0h512v128l-39.8 130.3L512 384v128H0V384l37.8-124L0 128z"
                    />
                    <path fill="#ffda44" d="M0 128h512v256H0z" />
                </g>
            </svg>
        ),
    },
]
