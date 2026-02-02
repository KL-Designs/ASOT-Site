import { createContext, useContext, useState, ReactNode } from 'react'

type OperationContextType = {
    id: Operation['_id']

    title: Operation['title']
    department: Operation['department']
    date: Operation['date']

    fields: {
        title: string

        subfields: {
            content: string
            images: string[]

            removeSubfield: () => void
        }[]

        addSubField: () => void
        removeField: () => void
    }[]

    addField: () => void
}

const OperationContext = createContext<OperationContextType | undefined>(undefined)

export const OperationProvider = ({ children }: { children: ReactNode }) => {

    const [id, setId] = useState<string>()

    return (
        <OperationContext.Provider value={{id, title, department, date, fields}}>
            {children}
        </OperationContext.Provider>
    )
}