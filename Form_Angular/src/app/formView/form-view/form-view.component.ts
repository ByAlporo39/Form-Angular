import { Component, OnInit} from '@angular/core';
import { userService } from '../../servicios/userServices';
@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent {
  user:User[] = [ ];
  userDni: any = "";
  userName: any = "";
  userSurname: any = "";
  userPhone: any = "";
  userEmail: any = "";
  userGender: any = "";
  userBirthday: any = "";
  userExperience: any = "";
  userWork: any = "";
  userPrivateP: any = "";
  userMore18: any = "";
  userInstaAngus: any = "";


  constructor(private usersService:userService){}

  ngOnInit():void{
    this.usersService.sendUsers(this.userDni, this.userName, this.userSurname, this.userPhone, this.userEmail, this.userGender, this.userBirthday, this.userExperience, this.userWork, this.userPrivateP, this.userMore18, this.userInstaAngus).subscribe((user:User[]) => {
      this.user = user;
    }); 
    }
  }

export interface User {
  dni:string;
  name: string; 
  surname:string; 
  phone: string;
  email:string;
  gender:string; 
  birthday:Date; 
  experience:string; 
  work:string; 
  
  privateP:boolean; 
  more18:boolean; 
  instaAngus:boolean
}