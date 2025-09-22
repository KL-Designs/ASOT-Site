'use client'

import Link from 'next/link'
import Image, { ImageLoaderProps } from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'

import { useState, useEffect, useRef } from 'react'

import { Paper, Divider, Typography, Button, ToggleButtonGroup, ToggleButton, TextField } from '@mui/material'
import { Save, Add, Delete } from '@mui/icons-material'



export default function Editor({ tab }: { tab: 'ranks' | 'roles' | 'sections' | 'platoons' | 'certifications' | 'awards' }) {

    const uploadRef = useRef<HTMLInputElement>(null)

    const router = useRouter()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [search, setSearch] = useState<string>('')
    const [items, setItems] = useState<any[]>([])
    const [available, setAvailable] = useState<string[]>([])

    const [order, setOrder] = useState<number>(0)
    const [name, setName] = useState<string>('')
    const [abbr, setAbbr] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [color, setColor] = useState<string>('')
    const [icon, setIcon] = useState<string | null>(null)
    const [file, setFile] = useState<File | null>(null)


    useEffect(() => {
        fetchItems(tab, search)
    }, [search])

    useEffect(() => {
        setAvailable([])
        setOrder(0)
        setName('')
        setAbbr('')
        setDescription('')
        setColor('')
        setIcon(null)
        setFile(null)

        switch (tab) {
            case 'ranks': setAvailable(['order', 'name', 'abbr', 'description', 'icon']); break
            case 'roles': setAvailable(['order', 'name', 'abbr', 'description']); break
            case 'sections': setAvailable(['order', 'name', 'description', 'color', 'icon']); break
            case 'platoons': setAvailable(['order', 'name', 'description', 'color']); break
            case 'certifications': setAvailable(['order', 'name', 'description']); break
            case 'awards': setAvailable(['order', 'name', 'description']); break
            default: setAvailable([])
        }

        fetchItems(tab, search)
    }, [tab])

    useEffect(() => {
        if (!id || !tab) return
        fetch(`/api/unit/${tab}?id=${id}`)
            .then(res => res.json())
            .then(body => {
                if (body.error) return console.error(body.error)

                const data = body[0]
                if (!data) return console.warn('No data found')

                setOrder(data.order || undefined)
                setName(data.name || undefined)
                setAbbr(data.abbr || undefined)
                setDescription(data.description || undefined)
                setColor(data.color || undefined)
                setIcon(data.icon || undefined)
            })
    }, [id])



    function fetchItems(type: string, search?: string) {
        fetch(`/api/unit/${type}?search=${search}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) return console.error(data.error)
                setItems(data)
            })
    }


    function UpdateItem() {
        const formData = new FormData()
        if (order) formData.append('order', order.toString())
        if (name) formData.append('name', name)
        if (abbr) formData.append('abbr', abbr)
        if (description) formData.append('description', description)
        if (color) formData.append('color', color)
        if (file) formData.append('icon', file)

        fetch(`/api/unit/${tab}?id=${id}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(body => {
                if (body.error) return alert(body.error)
                fetchItems(tab, search)
            })
    }

    function AddItem() {
        const formData = new FormData()

        fetch(`/api/unit/${tab}?action=create`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(body => {
                if (body.error) return alert(body.error)
                fetchItems(tab, search)
            })
    }

    function DeleteItem() {
        const formData = new FormData()

        fetch(`/api/unit/${tab}?id=${id}&action=delete`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(body => {
                if (body.error) return alert(body.error)
                fetchItems(tab, search)
                router.replace('/dashboard/unit')
            })
    }

    function RemoveIcon() {
        const formData = new FormData()

        fetch(`/api/unit/${tab}?id=${id}&action=removeIcon`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(body => {
                if (body.error) return alert(body.error)
                fetchItems(tab, search)
            })
    }



    return (
        <>
            <Paper elevation={1} className='p-5 flex flex-col gap-3'>
                <Typography variant='h5'>{tab[0].toUpperCase() + tab.substring(1)}</Typography>
                <Divider />

                <TextField label='Search' variant='standard' autoComplete='off' onChange={(e) => setSearch(e.currentTarget.value)} />

                <div className='flex flex-col flex-grow overflow-hidden'>
                    <div className='relative flex-grow overflow-auto'>
                        <div className='absolute w-full flex flex-col gap-3 pr-5'>
                            {items.map((item, i) => <Item key={item._id.toString()} type={tab} item={item} />)}
                        </div>
                    </div>
                </div>

                <Button variant='contained' startIcon={<Add />} onClick={AddItem}>Add New</Button>
            </Paper>

            <Paper elevation={1} className='p-5 flex flex-col gap-3'>
                <div>
                    <Typography variant='h5'>Editor</Typography>
                    <Typography variant='caption'>Editing: {id || 'unknown'}</Typography>
                </div>
                <Divider />

                <div className='flex flex-col gap-3 flex-grow'>
                    {available.includes('order') ? <TextField disabled={!id} variant='standard' label='Order' value={order || ''} type='number' fullWidth onChange={(e) => setOrder(parseInt(e.currentTarget.value))} /> : null}

                    <div className='flex justify-between gap-5'>
                        {available.includes('name') ? <TextField disabled={!id} variant='standard' label='Name' value={name || ''} fullWidth onChange={(e) => setName(e.currentTarget.value)} /> : null}
                        {available.includes('abbr') ? <TextField disabled={!id} variant='standard' label='Abbreviation' value={abbr || ''} fullWidth onChange={(e) => setAbbr(e.currentTarget.value)} /> : null}
                    </div>

                    {available.includes('description') ? <TextField disabled={!id} variant='standard' label='Description' value={description || ''} fullWidth multiline onChange={(e) => setDescription(e.currentTarget.value)} /> : null}
                    {available.includes('color') ? <TextField disabled={!id} variant='standard' label='Color' value={color || '#ffffff'} type='color' fullWidth onChange={(e) => setColor(e.currentTarget.value)} /> : null}
                    {available.includes('icon') ?
                        <div className='flex gap-5'>
                            {icon ? <Button disabled={!id} variant='contained' color='warning' fullWidth onClick={RemoveIcon}>Delete Icon</Button> : null}

                            <Button disabled={!id} variant='contained' color='primary' fullWidth onClick={() => uploadRef.current?.click()}>
                                Upload Icon
                            </Button>

                            <input
                                ref={uploadRef}
                                className='hidden'
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                        setFile(e.target.files[0])
                                    }
                                }}
                            />
                        </div>
                        : null}
                </div>

                <div className='flex justify-between gap-5'>
                    <Button variant='contained' color='error' fullWidth disabled={!id} startIcon={<Delete />} onClick={DeleteItem}>Delete</Button>
                    <Button variant='contained' color='success' fullWidth disabled={!id} startIcon={<Save />} onClick={UpdateItem}>Update</Button>
                </div>
            </Paper>
        </>
    )
}


export function Item({ type, item }: { type: string, item: any }) {

    const [hover, setHover] = useState<boolean>(false)

    const searchParams = useSearchParams()
    const selectedItem = searchParams.get('id')

    


    return (
        <Link href={`?id=${item._id}`}>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Paper elevation={hover ? 5 : 3} className='px-3 py-2 flex justify-start cursor-pointer gap-3 items-center' style={{ border: selectedItem === item._id.toString() ? '1px solid #db001d' : 'initial' }}>

                    {item.icon ?
                        <div className='relative h-[50px] w-[50px]'>
                            {/* <Image loader={imageLoader} src={item.icon} alt='Icon' fill loading='lazy' className='object-cover rounded-lg' /> */}
                        </div>
                        : null
                    }
                    <Typography variant='h6'>{item.abbr ? `[${item.abbr}] ${item.name}` : item.name}</Typography>

                </Paper>
            </div>
        </Link>
    )
}