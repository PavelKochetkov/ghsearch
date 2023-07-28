import React from 'react'
import { IDataSearch } from '../models/IDataSearch'

export const Search = (props: IDataSearch) => {
    return (
        <React.Fragment>
            <div className='form-group'>
                {props.valueDirty && !props.input && 
                <div className='text-danger'>
                    Поле не может быть пустым
                </div>}
                <input
                    type='text'
                    className='form-control mt-1'
                    placeholder='Введите ник пользователя'
                    value={props.input}
                    onChange={props.handleValue}
                    onKeyUp={props.onSubmitSearch}
                    onBlur={props.blurHandler}
                />
            </div>
        </React.Fragment>
    )
}