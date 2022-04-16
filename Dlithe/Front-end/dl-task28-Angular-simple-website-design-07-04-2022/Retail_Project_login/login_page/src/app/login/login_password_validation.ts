import { AbstractControl } from "@angular/forms"

export function  loginPasswordValidation(control:AbstractControl){
    const password=control.get('pwd');
    const confirm_password=control.get('confirmpwd');
    if(!password?.pristine && confirm_password?.pristine){
        return null;
    }
    return password && confirm_password && password.value !== confirm_password.value
    ? { doNotMatch: true} 
    : null;
}