import { FormControl, ValidationErrors } from "@angular/forms";


export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";



export const cantBeStrider = (control: FormControl): ValidationErrors | null =>{

    return{
        noStrider: true,
    }
}

export function EmailValidator(EmailValidator: any): string | ((control: import("@angular/forms").AbstractControl<any, any>) => ValidationErrors | null) {
  throw new Error('Function not implemented.');
}
