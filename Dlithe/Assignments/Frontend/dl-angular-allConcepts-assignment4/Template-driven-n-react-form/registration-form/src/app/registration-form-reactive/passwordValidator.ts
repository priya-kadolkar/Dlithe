import { AbstractControl } from "@angular/forms";

export function PasswordValidation(control:AbstractControl){
    const password=control.get('pwd');
    const confirmPassword=control.get('confirmpwd');
    // console.log(password,confirmPassword);
    if(!password?.pristine && confirmPassword?.pristine){
        return null;
    }
    return password && confirmPassword && password.value!==confirmPassword.value ? {doNotMatch:true} : null
}