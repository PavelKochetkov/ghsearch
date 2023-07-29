//Компонент карточек на главной странице
import React from "react";
import { Link } from "react-router-dom";
import { IDataUser } from "../models/IDataUser";

interface IDataProps {
    items: IDataUser
}
export const Card = (props: IDataProps) => (
    <div className="col-sm-3 mb-3 p-3">
        <div className="card">
            <img className="card-img-top mt-1 p-1" src={props.items.avatar_url} alt={props.items.login}/>
            <div className="card-body">
                <h5 className="card-title">{props.items.login}</h5>
                <Link to={'/profile/' + props.items.login} className="btn btn-warning">Подробнее</Link>
            </div>
        </div>
    </div>
)
