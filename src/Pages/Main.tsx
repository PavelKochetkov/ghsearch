import React from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'

export const Main = () => {
    const cards: number[] = new Array(12).fill('').map((_, i) => i)

    return (
        <React.Fragment>
            <Search/>
            <div className='row'>
                {cards.map((card) => {
                    return(
                    <div className='mb-2 col-sm-3' key={card}>
                        <Card/>
                    </div>)
                })}
            </div>
        </React.Fragment>
    )
}