import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
      if(form.valid){
        this.router.navigate(['/sucesso'])
      }else{
        alert("Formuláio Inválido")
      }
  }
  
  
  consultaCep(ev: any, f: NgForm){
    const cep = ev.target.value;
    if(cep !== ''){
      return this.service.getConsultaCep(cep).subscribe((resposta) => {
        this.populandoEndereco(resposta, f)
      });
    }
  }
  
  populandoEndereco(dados:any, f: NgForm){
    //Traz conjunto chave valor => traz o nome campo de valor e passa valor que vem da requisição 
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }
}
