export interface IUserCreate{
    id?: number,
    firstName: string,
    secondaryName: {secondaryName: string}[],
    userName: string,
    emailAddress?: string,
    password: string
}