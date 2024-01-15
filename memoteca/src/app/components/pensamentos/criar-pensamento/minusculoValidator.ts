import { AbstractControl } from "@angular/forms"


export function minusculosValidators(control: AbstractControl) {
  const autoria: string = control.value as string
  if(autoria !== autoria?.toLowerCase()){
      return {minusculo: true}
  }else{
     return null
  }
}
