//Компонент навигационного меню
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
   return (
    <div className='navbar navbar-dark bg-warning navbar-expand-lg'>
        <div className='navbar-brand text-dark m-2'>Github Search</div>
        <div className='navbar-nav'>
            <div className='nav-item'>
                <NavLink to='/' className='nav-link text-dark link-primary'>Главная</NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/faq' className='nav-link text-dark link-primary'>Информация</NavLink>
            </div>
        </div>
    </div>
   ) 
}