import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
  selector: '[required-file]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: RequiredFileValidator, multi: true },
  ]
})
export class RequiredFileValidator implements Validator {
  static validate(control: FormControl): { [key: string]: any } {
    return typeof control.value === 'undefined' ? { required: true } : null;
  }

  validate(control: FormControl): { [key: string]: any } {
    return RequiredFileValidator.validate(control);
  }
}
