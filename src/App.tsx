import { useEffect } from 'react'
import { useSnapshot } from 'valtio'

import { store, handleChangeLocaleAsync } from './store'
import getUserLocale from './localesResources/getUserLocale'
import { locales } from './localesResources'

const App = () => {
    const browserLocale = getUserLocale()
    const { tLang } = useSnapshot(store)

    useEffect(() => {
        if (typeof tLang === 'function') {
            handleChangeLocaleAsync(browserLocale)
        }
    }, [])

    return (
        <div className="mt-10 mx-auto max-w-3xl">
            <h1 className="font-bold text-5xl mb-5 border-b-2 border-gray-800">
                Simple Locale without dependencies
            </h1>

            {locales.map(({ locale, name, icon }) => (
                <button
                    key={locale}
                    className="p-3 m-3 bg-blue-500"
                    onClick={async () => {
                        await handleChangeLocaleAsync(locale)
                    }}
                >
                    {icon}
                    {'-'} {name}
                </button>
            ))}

            <h1 className="pt-16 pb-4 text-3xl">With Object Entries</h1>
            {Object.entries(tLang).map(([key, value]) => {
                return (
                    <div>
                        {key} : {value}
                    </div>
                )
            })}

            <h1 className="pt-16 pb-4 text-3xl">One by one </h1>
            <p>
                about.license.title
                <span className="ml-3 font-bold text-red-900">
                    {tLang.ABOUT_LICENSE_TITLE}
                </span>
            </p>
            <p>
                about.title
                <span className="ml-3 font-bold text-red-900">
                    {tLang.ABOUT_TITLE}
                </span>
            </p>
            <p>
                about.version
                <span className="ml-3 font-bold text-red-900">
                    {tLang.ABOUT_VERSION}
                </span>
            </p>

            {/* {messages && <pre>{JSON.stringify(messages, null, 2)}</pre>} */}
        </div>
    )
}

export default App
