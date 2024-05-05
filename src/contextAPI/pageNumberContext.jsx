'use client'
import { useSearchParams } from "next/navigation";

const { createContext, useState, useEffect } = require("react");



export const PageContext = createContext();


export const PageContextProvider = ({ children }) => {
    const [pageN, setPageN] = useState(1)
    const pageNum = useSearchParams().get('page');
    useEffect(() => {
        setPageN(pageNum)
    }, [pageNum])

    return <PageContext.Provider value={{ pageN }}>{children}</PageContext.Provider>
}