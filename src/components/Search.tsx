//Компонент поиска
import React from 'react'
import { IDataSearch } from '../models/IDataSearch'

export const Search = (props: IDataSearch) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className='col'>
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
                            onBlur={props.blurHandler}
                        />
                    </div>
                </div>
                <div className='col-auto'>
                    <button 
                        type='button' 
                        className='btn btn-primary' 
                        onClick={() => props.onSubmitSearch()}>
                            Найти
                    </button>
                </div>
            </div>
            
        </React.Fragment>
    )
}