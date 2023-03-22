import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms';
import { userService } from 'src/app/servicios/userServices';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
   value = 0; 
  increaseValue1(){
    if (this.name.valid && this.surname.valid && this.phone.valid && this.email.valid && this.gender.valid && this.birthday.valid && this.experience.valid && this.work.valid) {
      this.value=60;
    }
   
  }
  increaseValue2(){
    if (this.privateP.valid) {
      this.value=100;
      this.Click();
    }
  }
  
  //Form 1
  dni:FormControl = new FormControl('', Validators.required);
  name:FormControl = new FormControl('', Validators.required);
  surname:FormControl = new FormControl('', Validators.required);
  phone:FormControl = new FormControl('', [Validators.minLength(9), Validators.maxLength(12)]);
  email:FormControl = new FormControl('', Validators.email);
  gender: FormControl = new FormControl('', Validators.required);//gender custom
  birthday:FormControl = new FormControl('', Validators.required);
  experience:FormControl = new FormControl('', Validators.required);
  work:FormControl = new FormControl('', Validators.required);

  //Form 2
  more18: FormControl = new FormControl('', Validators.required);
  privateP: FormControl = new FormControl('', Validators.required);//politicas d privacidad
  instaAngus :FormControl = new FormControl('', Validators.required);

  //Form 1
  firstFormGroup:FormGroup = new FormGroup({
    dni:this.dni,
    name:this.name,
    surname:this.surname,
    phone:this.phone,
    email:this.email,
    gender:this.gender,
    birthday:this.birthday,
    experience: this.experience,
    work:this.work,
  });

  //Form 2
    thirdFormGroup:FormGroup = new FormGroup({
    privateP:this.privateP,
    more18:this.more18,
    instaAngus:this.instaAngus
  })
  //CheckBoxes Form2
  task = {
    name: 'Complementary information',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: '+18', completed: false, color: 'primary', controlName: 'more18'},
      {name: 'Read and Accept Polity of Privacy', completed: false, color: 'info', controlName: 'privateP'},
      {name: 'You follow Angus on Instagram', completed: false, color: 'warn', controlName: 'instaAngus'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {

    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
//10,14

    
  constructor(private userServices : userService){}
  Click(){
    // console.log(datos);
    this.userServices.sendUsers(this.dni.value,this.name.value, this.surname.value, this.phone.value, this.email.value, this.gender.value, this.birthday.value, this.experience.value, this.work.value, this.privateP.value, this.more18.value, this.instaAngus.value)
  }
}
export interface User {
  dni:string;
  name:string;
  surname:string;
  phone:string;
  email:string;
  gender:string;
  birthday:Date;
  experience:string;
  work:string;

  more18:true;
  privateP:true;
  instaAngus:true;

}