import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { IUserCreate } from './user';

@Injectable({
    providedIn: 'root'
})

export class UserData implements InMemoryDbService{
    createDb(): {} | import("rxjs").Observable<{}> | Promise<{}> {
        let users: IUserCreate[] = [
            {
                id: 0,
                firstName: null,
                secondaryName: null,
                userName: null,
                password: null
            }
        ];
        return {users};
    }

}