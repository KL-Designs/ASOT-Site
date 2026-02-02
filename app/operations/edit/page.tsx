'use client'

import { useOperation, OperationProvider } from '../context'
import { TextField, Button } from '@mui/material'

function FormEditor() {
    const {
        fields,
        addField,
        removeField,
        addSubfield,
        removeSubfield,
        updateFieldTitle,
        updateSubfieldContent,
    } = useOperation()

    return (
        <div>
            <Button onClick={addField}>Add Field</Button>

            {fields.map((field, i) => (
                <div key={i} style={{ border: '1px solid #ccc', padding: 8, marginTop: 8 }}>
                    <TextField
                        label="Field Title"
                        value={field.title}
                        onChange={(e) => updateFieldTitle(i, e.target.value)}
                        fullWidth
                    />

                    <Button onClick={() => addSubfield(i)}>Add Subfield</Button>
                    <Button onClick={() => removeField(i)}>Remove Field</Button>

                    {field.subfields.map((sub, j) => (
                        <div key={j} style={{ marginLeft: 16, marginTop: 4 }}>
                            <TextField
                                label="Subfield Content"
                                value={sub.content}
                                onChange={(e) => updateSubfieldContent(i, j, e.target.value)}
                                fullWidth
                            />
                            <Button onClick={() => removeSubfield(i, j)}>Remove Subfield</Button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

// Wrap the page in the provider
export default function Page() {
    return (
        <OperationProvider>
            <FormEditor />
        </OperationProvider>
    )
}
