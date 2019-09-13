import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { IResultHttp } from '../interfaces/IResultHttp';
import { environment } from './../../environments/environment';
import { HttpService } from './http.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService<any> {

    private loginSubject = new Subject<boolean>();

    constructor(public http: HttpService) {
        super('users', http);
    }

    login(email: string, password: string): Promise<IResultHttp> {
        return this.http.post(`${environment.url_api}/users/auth`, { email, password });
    }

    configureLogin(o:any):void{
        const {token,user} = o.data;
        localStorage.setItem('getmasters:token',token);  
        localStorage.setItem('getmasters:user',JSON.stringify(user));
        this.loginSubject.next(this.isStaticLogged);  
    }

    get isLogged(): Observable<boolean>{
        return this.loginSubject.asObservable();
    }

    get isStaticLogged(): boolean{
        return !!localStorage.getItem('getmasters:token')
    }

}
