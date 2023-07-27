import React, {useState} from 'react'

export const Search = () => {
    const [value, setValue] = useState<string>('')
    const [valueDirty, setValueDirty] = useState<boolean>(false)
    
    const handleValue:React.ChangeEventHandler<HTMLInputElement> = event => {
        setValue(event.target.value)
    }
    const blurHandler:React.FocusEventHandler = () => {
        setValueDirty(!valueDirty)
    }
    const onSubmitSearch:React.KeyboardEventHandler = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        if (value.trim()) {
            console.log('Search', value)
        }
    }
    return (
        <div className='form-group'>
            {valueDirty && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            <input
                type='text'
                className='form-control'
                placeholder='Введите ник пользователя'
                value={value}
                onChange={handleValue}
                onKeyUp={onSubmitSearch}
                onBlur={blurHandler}
            />
        </div>
    )
}