import React, {useEffect, useState} from 'react'

const PREFIX = 'code-u-app-'

const useLocalStorage = (key, initialValue) => {

    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined'){
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue !== null) return JSON.parse(jsonValue)

        if(typeof initialValue === 'function'){
            return initialValue()
        } else {
            return initialValue
        }
    }
    })

    useEffect(() => {
        if (typeof window !== 'undefined'){
        localStorage.setItem(prefixedKey, JSON.stringify(value))
        }
    }, [prefixedKey, value])

  return [value, setValue]
}

export default useLocalStorage