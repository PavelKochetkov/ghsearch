export interface IDataUser {
    login: string,
    avatar_url: string,
    id: number,
    url: string
}

export interface IData {
    items: IDataUser[]
}