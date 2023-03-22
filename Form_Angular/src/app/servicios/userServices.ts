import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class userService{
    constructor(){}
    users:User[] = [ ];

    public sendUsers(dni:string, name:string, surname:string, phone:string, email:string, gender: string, birthday:Date, experience:string, work: string, privateP:boolean, more18:boolean, instaAngus:boolean):Observable<User[]>{
        if(name != "" && surname != "" && phone != ""){
            this.users.push({dni:dni,name: name, surname: surname, phone :phone, email :email, gender: gender, birthday:birthday, experience:experience, work:work, privateP:privateP, more18:more18, instaAngus:instaAngus});
        }
        return of(this.users);
    }

}
export interface User {
    dni: string;
    name: string; 
    surname:string; 
    phone:string;
    email:string;
    gender:string; 
    birthday:Date; 
    experience:string; 
    work:string; 
     
    privateP:boolean; 
    more18:boolean; 
    instaAngus:boolean
}