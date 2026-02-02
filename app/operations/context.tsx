import { createContext, useContext, useState, ReactNode } from 'react'

type Subfield = {
    content: string
    images: string[]
}

type Field = {
    title: string
    subfields: Subfield[]
}

type OperationContextType = {
    id?: string
    title: string
    department: string
    date: string
    fields: Field[]

    setId: (id: string) => void
    setTitle: (title: string) => void
    setDepartment: (department: string) => void
    setDate: (date: string) => void

    addField: () => void
    removeField: (index: number) => void
    addSubfield: (fieldIndex: number) => void
    removeSubfield: (fieldIndex: number, subfieldIndex: number) => void
    updateFieldTitle: (fieldIndex: number, newTitle: string) => void
    updateSubfieldContent: (fieldIndex: number, subfieldIndex: number, content: string) => void
    updateSubfieldImages: (fieldIndex: number, subfieldIndex: number, images: string[]) => void
}

const OperationContext = createContext<OperationContextType | undefined>(undefined)

export const useOperation = () => {
    const context = useContext(OperationContext)
    if (!context) throw new Error('useOperation must be used within OperationProvider')
    return context
}

export const OperationProvider = ({ children }: { children: ReactNode }) => {
    const [id, setId] = useState<string>()
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [date, setDate] = useState('')
    const [fields, setFields] = useState<Field[]>([])

    const addField = () => setFields([...fields, { title: '', subfields: [] }])
    const removeField = (index: number) => setFields(fields.filter((_, i) => i !== index))

    const addSubfield = (fieldIndex: number) => {
        setFields((prev) =>
            prev.map((field, i) =>
                i === fieldIndex
                    ? { ...field, subfields: [...field.subfields, { content: '', images: [] }] }
                    : field
            )
        )
    }

    const removeSubfield = (fieldIndex: number, subfieldIndex: number) => {
        setFields((prev) =>
            prev.map((field, i) =>
                i === fieldIndex
                    ? {
                        ...field,
                        subfields: field.subfields.filter((_, j) => j !== subfieldIndex),
                    }
                    : field
            )
        )
    }

    const updateFieldTitle = (fieldIndex: number, newTitle: string) => {
        setFields(prev =>
            prev.map((field, i) => (i === fieldIndex ? { ...field, title: newTitle } : field))
        )
    }

    const updateSubfieldContent = (fieldIndex: number, subfieldIndex: number, content: string) => {
        setFields(prev =>
            prev.map((field, i) =>
                i === fieldIndex
                    ? {
                        ...field,
                        subfields: field.subfields.map((sub, j) =>
                            j === subfieldIndex ? { ...sub, content } : sub
                        ),
                    }
                    : field
            )
        )
    }

    const updateSubfieldImages = (
        fieldIndex: number,
        subfieldIndex: number,
        images: string[]
    ) => {
        setFields(prev =>
            prev.map((field, i) =>
                i === fieldIndex
                    ? {
                        ...field,
                        subfields: field.subfields.map((sub, j) =>
                            j === subfieldIndex ? { ...sub, images } : sub
                        ),
                    }
                    : field
            )
        )
    }



    return (
        <OperationContext.Provider
            value={{
                id, title, department, date, fields,
                setId, setTitle, setDepartment, setDate,
                addField, removeField, addSubfield, removeSubfield,
                updateFieldTitle,
                updateSubfieldContent,
                updateSubfieldImages,
            }}
        >
            {children}
        </OperationContext.Provider>
    )
}
