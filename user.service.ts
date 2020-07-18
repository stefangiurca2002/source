import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserCreate } from './user';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    url: string = "api/users";
    constructor(private http: HttpClient){}

    PostUser(usr: IUserCreate): Observable<IUserCreate>{
        return this.http.post<IUserCreate>(this.url, usr)
               .pipe(
                   tap(data => console.log(JSON.stringify(data))),
                   //catchError(err => console.log(err))
               )
    }
}