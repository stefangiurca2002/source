import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    templateUrl: './createAcount.component.html',
    styleUrls: ['./createAcount.component.scss']
})

export class CreateAcountComponent implements OnInit{
    createAcountForm: FormGroup;
    FormSubmited: boolean = false;

    constructor(private fb: FormBuilder, 
                private router: Router,
                private userService: UserService){}

    ngOnInit(): void {
        this.createAcountForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            secondary: this.fb.array([this.buildName()]),
            userName: ['', [Validators.required, Validators.minLength(3)]],
            emailAddress: ['',[Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3)]],
            notify: [{value: true}, [Validators.required, Validators.minLength(3)]]
        })
         
    }

    get secondary(): FormArray{
        return <FormArray>this.createAcountForm.get('secondary');
    }

    buildName(): FormGroup{
        return this.fb.group(
            {
                secondaryName: ['',[Validators.required, Validators.minLength(3)]]
            }
        )
    }
    addName(){
        this.secondary.push(this.buildName());
    }

    onSubmit(): void{
        console.log('in onSubmit')
        if(this.createAcountForm.valid){
          //  console.log(this.createAcountForm.get('secondary').value);
          this.userService.PostUser(this.createAcountForm.value)
                          .subscribe(
                              data => console.log(data),
                              err => console.log(err),
                              () => console.log('user insert succesful')
                          );
        this.router.navigate(['/home']);
        }
        else{
            this.FormSubmited = true;
        }
    }

    changeEmailStatus(){
        let status: boolean = this.createAcountForm.get('notify').value;
        console.log(status);
        if(!status){
            console.log(status);
            this.createAcountForm.get('emailAddress').setValidators([Validators.required,Validators.email]);
        }
        else{
            console.log(status);
            this.createAcountForm.get('emailAddress').clearValidators();
        }
        this.createAcountForm.get('emailAddress').updateValueAndValidity();
    }

    loadData(event) {
        setTimeout(() => {
          console.log('Done');
          event.target.complete();
    
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (event.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      }
}