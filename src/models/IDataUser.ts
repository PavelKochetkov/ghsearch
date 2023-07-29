export interface IDataUser {
    login: string,
    avatar_url: string,
    id: number,
    url: string,
    name: string,
    public_repos: number,
    followers: number,
    company: string,
    location: string,
    following: string,
    html_url:string
}

export interface IData {
    total_count: number;
    items: IDataUser[];
}