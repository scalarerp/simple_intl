import { useEffect } from 'react'
import { useSnapshot } from 'valtio'

import { store, handleChangeLocaleAsync } from './store'
import getUserLocale from './localesResources/getUserLocale'

const App = () => {
    const browserLocale = getUserLocale()
    const { messages, tLang } = useSnapshot(store)

    useEffect(() => {
        if (typeof messages === 'function') {
            handleChangeLocaleAsync(browserLocale)
            // console.log('on init browserLocale: ', browserLocale)
        }
    }, [])

    return (
        <div className="mt-10 mx-auto max-w-3xl">
            <h1 className="font-bold text-5xl mb-5 border-b-2 border-gray-800">
                Teste Locale
            </h1>

            <h4>
                <button
                    className="p-3 m-3 bg-blue-500"
                    onClick={async () => {
                        await handleChangeLocaleAsync('pt-BR')
                    }}
                >
                    pt-BR
                </button>
                <button
                    className="p-3 m-3 bg-blue-500"
                    onClick={async () => {
                        await handleChangeLocaleAsync('es-ES')
                    }}
                >
                    es-ES
                </button>
                <button
                    className="p-3 m-3 bg-blue-500"
                    onClick={async () => {
                        await handleChangeLocaleAsync('en-US')
                    }}
                >
                    en-US
                </button>
            </h4>

            <h2>
                <p>
                    about.license.title
                    <span className="font-bold text-red-900">
                        {' '}
                        {tLang.ABOUT_LICENSE_TITLE}
                    </span>
                </p>
                <p>
                    about.title
                    <span className="font-bold text-red-900">
                        {' '}
                        {tLang.ABOUT_TITLE}
                    </span>
                </p>
                <p>
                    about.version
                    <span className="font-bold text-red-900">
                        {' '}
                        {tLang.ABOUT_VERSION}
                    </span>
                </p>
            </h2>

            {/* {messages && <pre>{JSON.stringify(messages, null, 2)}</pre>} */}
        </div>
    )
}

export default App
