//Компонент главной страницы
import React, { useState, useEffect } from 'react'
import { Search } from '../components/Search'
import { IDataUser } from '../models/IDataUser'
import { Card } from '../components/Card'
import { getUsersByQuery } from '../api/user'


export const Main = () => {
    const [input, setInput] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalCount, setTotalCount] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number[]>([])
    const [valueDirty, setValueDirty] = useState<boolean>(false)
    const [users, setUser] = useState<IDataUser[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const perPage = 10
    
    const handleValue:React.ChangeEventHandler<HTMLInputElement> = event => {
        setInput(event.target.value)
    }
    const blurHandler:React.FocusEventHandler = () => {
        setValueDirty(!valueDirty)
    }
    const onSubmitSearch = () => {
        if (input.trim()) {
            const search = async () => {
                setLoading(true)
                const response = await getUsersByQuery(input, currentPage, perPage)
                setUser(response.data.items)
                setTotalCount(response.data.total_count <= 1000 ? response.data.total_count : 1000)
                setLoading(false)
            }
            search()
        }
    }

    useEffect(() => {
        onSubmitSearch()
    }, [currentPage])

    useEffect(() => {
        const resultPages: number[] = [];

        for (let i = 0; i < Math.ceil(totalCount / perPage); i++) {
            resultPages.push(i + 1)
        }

        setTotalPages(resultPages)
    }, [totalCount])
     return (
        <React.Fragment>
            <Search 
                input={input} 
                handleValue={handleValue} 
                blurHandler={blurHandler} 
                onSubmitSearch={onSubmitSearch}
                valueDirty={valueDirty}
            />
            {loading ? (
                <div className='text-center mt-4'><h5 className='text-primary'>Загрузка...</h5></div>
            ) : (
                <React.Fragment>
                    <div className='row mt-4'>
                        {users.map(items => <Card items={items} key={items.id}/>)}
                    </div>
                    {totalPages.length > 1 && (
                        <ul className='pagination flex-wrap'>
                            {totalPages.map(page => (
                                <li className='page-item' key={page}>
                                    {page === currentPage ? (
                                        <a className='page-link disabled'>{page}</a>
                                    ) : (
                                        <a className='page-link' style={{cursor: 'pointer'}} onClick={() => setCurrentPage(page)}>{page}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </React.Fragment>
            )}
        </React.Fragment>
    )
}