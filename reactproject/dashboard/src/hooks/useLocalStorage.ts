import { useEffect, useState } from "react"

export const useLocalStorage = (key: string) => {
    const [localStorageData, setLocalStorageData] = useState(JSON.parse(localStorage.getItem(key) || "null"))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localStorageData || "null"))
    }, [localStorageData, key]);

    return [localStorageData, setLocalStorageData];
}