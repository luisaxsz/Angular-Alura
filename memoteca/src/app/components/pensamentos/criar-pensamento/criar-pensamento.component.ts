import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
   constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //Form builder -> Construtor de formularios
    this.formulario = this.formBuilder.group({
      //Atributos do formulario
      conteudo: ['Formulario Reativo'],
      autoria:['Angular'],
      modelo: ['modelo1']
    })

    //Outra opção
    /*this.formulario = new FormGroup({
      conteudo: new FormControl(''),
      autoria: new FormControl(''),
      modelo: new FormControl('')
    })*/

  }

  formulario!: FormGroup;

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
