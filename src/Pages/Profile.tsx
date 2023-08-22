//Компонент подробной информации о пользователе
import React, {useState, useEffect} from "react";
import { NavLink, useParams } from "react-router-dom";
import { IDataUser } from "../models/IDataUser";
import { getUserByLogin } from "../api/user";

export const Profile = () => {
    const params = useParams<{login: string}>();

    const [user, setUser] = useState<IDataUser>()
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await getUserByLogin(String(params.login))
                setUser(response.data)
            } catch {
                setError('Сервер не доступен. Повторите запрос позже')
            }
        }
        getUser()
    }, [])

    return user ? (
        <React.Fragment>
            <img className="card-img-top mt-1 p-1" style={{width:'200px'}} src={user.avatar_url} alt={user.login}/>
            <div>
                <h2 className="mt-4">Профиль - {params.login}</h2>
            </div>
            <div>
                <dl className="row mt-3">
                    <dt className="col-sm-3">Имя (Name)</dt>
                    <dd className="col-sm-9">{user.name}</dd>

                    <dt className="col-sm-3">Компания (Company)</dt>
                    <dd className="col-sm-9">{user.company}</dd>

                    <dt className="col-sm-3">Расположение (Location)</dt>
                    <dd className="col-sm-9">{user.location}</dd>

                    <dt className="col-sm-3">Кол-во репозиториев (Public pepos)</dt>
                    <dd className="col-sm-9">{user.public_repos}</dd>

                    <dt className="col-sm-3">Кол-во подписчиков (Followers)</dt>
                    <dd className="col-sm-9">{user.followers}</dd>

                    <dt className="col-sm-3">Подписан (following)</dt>
                    <dd className="col-sm-9">{user.following}</dd>
                </dl>
            </div>
            <NavLink to={user.html_url} className="btn btn-primary" target="_blank">Перейти в профиль</NavLink>
            <NavLink to="/" className="btn btn-warning m-3">Перейти на главную</NavLink>
        </React.Fragment>
    ) : 
    !user ? 
        (<div className='text-center mt-4'><h5 className='text-danger'>{error}</h5></div>) :
        (<div className='text-center mt-4'><h5 className='text-primary'>Загрузка...</h5></div>)
}