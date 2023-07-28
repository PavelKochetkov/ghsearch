import React, { useState } from 'react'
import { Search } from '../components/Search'
import axios from 'axios'
import { IDataUser, IData } from '../models/IDataUser'
import { Card } from '../components/Card'


export const Main = () => {
    const [input, setInput] = useState<string>('')
    const [valueDirty, setValueDirty] = useState<boolean>(false)
    const [users, setUser] = useState<IDataUser[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    
    const handleValue:React.ChangeEventHandler<HTMLInputElement> = event => {
        setInput(event.target.value)
    }
    const blurHandler:React.FocusEventHandler = () => {
        setValueDirty(!valueDirty)
    }
    const onSubmitSearch:React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        if (input.trim()) {
            const search = async () => {
                setLoading(true)
                const responce = await axios.get<IData>(`https://api.github.com/search/users?q=${input}`)
                console.log(responce.data.items)
                setUser(responce.data.items)
                setLoading(false)
            }
            search()
        }
    }
     return (
        <React.Fragment>
            <Search 
                input={input} 
                handleValue={handleValue} 
                blurHandler={blurHandler} 
                onSubmitSearch={onSubmitSearch}
                valueDirty={valueDirty}
            />
            {loading && <div className='text-center mt-4'><h5 className='text-primary'>Загрузка...</h5></div>}
            <div className='row mt-4'>
                {users.map(items => <Card items={items} key={items.id}/>)}
            </div>
        </React.Fragment>
    )
}