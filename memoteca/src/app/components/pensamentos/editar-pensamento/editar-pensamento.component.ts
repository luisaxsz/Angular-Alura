import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculosValidators } from '../criar-pensamento/minusculoValidator';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

    formulario!: FormGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {this.formulario = this.formBuilder.group({
      id: [pensamento.id],
      conteudo: [pensamento.conteudo, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/),minusculosValidators])],
      autoria:[pensamento.autoria, Validators.compose([Validators.required, Validators.minLength(3),minusculosValidators])],
      modelo: [pensamento.modelo],
      favorito: [pensamento.favorito]
    })})
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }


  editarPensamento(){
  console.log(this.formulario)
   if(this.formulario.valid){
    this.service.editar(this.formulario.value).subscribe(() => this.router.navigate(['/listarPensamento']))
   }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
