import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { ValidatorsService } from 'src/app/common/services/validators.service';
import { EmailValidator } from '../../../shared/validators/validators.email.service';

 import * as customvalidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})

export class RegisterComponent {
public myForm: FormGroup = this.fb.group ({
  name: ['',Validators.required,Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)],
  username: ['',[Validators.required, customvalidators.cantBeStrider]],
  email: ['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern)],[this.emialvalidator]],
  password: ['',[Validators.required, Validators.minLength(8)]],
  passwordCheck: ['',[Validators.required]],
},{
  Validators:[this.validatorsService.isFieldOneEqualFieldTwo('password','passwordCheck')]
}
);

constructor(
  private fb: FormBuilder,
  private validatorsService: ValidatorsService,
  private emialvalidator: EmailValidator
) {}

isValidField( field: string ) {
  return this.validatorsService.isValidField( this.myForm, field );
}
}
