import React from 'react'
import { NavLink } from 'react-router-dom'

export const Faq = () => {
    return (
        <div className="card mt-5">
            <h5 className="card-header">Информация</h5>
            <div className="card-body">
                <h5 className="card-title">Веб приложение по поиску пользователей сервиса GitHub</h5>
                <p className="card-text">На главной странице введите логин пользователя и нажмите Enter</p>
                <NavLink to="/" className="btn btn-warning">Перейти на главную</NavLink>
            </div>
        </div>
    )
}