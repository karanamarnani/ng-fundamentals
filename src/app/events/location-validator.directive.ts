import { Directive } from "@angular/core";
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: LocationValidator,
        multi: true
    }]
})
export class LocationValidator implements Validator {
    validate(formGroup: AbstractControl): ValidationErrors {
        let addressControl = formGroup.get('address');
        let cityControl = formGroup.get('city');
        let countryControl = formGroup.get('country');
        let onlineUrlControl = formGroup.root.get('onlineUrl');

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return { validateLocation: false }
        }
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error("Method not implemented.");
    }
    constructor() {

    }
}