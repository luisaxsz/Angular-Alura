import { Directive } from "@angular/core";
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from "@angular/forms";
import { Observable, map } from "rxjs";
import { ConsultaCepService } from "../service/consulta-cep.service";

@Directive({
  selector: "[appValidandoCepValidator]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidandoCepDirective,
      multi: true,
    },
  ],
})
export class ValidandoCepDirective implements AsyncValidator {
  constructor(private service: ConsultaCepService) {}
  validate(
    control: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;
    return this.service.getConsultaCep(cep).pipe(
      map((resultado: any) => {
        if (resultado.erro == true) {
          return { 'appValidandoCepValidator': true };
        } else {
          return null;
        }
      })
    );
  }
}
