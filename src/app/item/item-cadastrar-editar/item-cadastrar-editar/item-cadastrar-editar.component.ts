import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../item.model';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.css'],
})
export class ItemCadastrarEditarComponent implements OnInit {
  formGroup!: FormGroup;
  item!: Item;

  constructor(
    private formBuilder: FormBuilder,
    private ItemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data['item'];
    this.formGroup = this.formBuilder.group({
      id: [this.item && this.item.id ? this.item.id : null],
      nome: [
        this.item && this.item.nome ? this.item.nome : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.item && this.item.id) {
      this.ItemService.atualizar(this.formGroup.value).subscribe(
        itemAtualizado => {
          this.router.navigateByUrl('/itens');
        },
        (error) => {
          alert('Error ao atualizar' + JSON.stringify(error));
        }
      );
    } else {
      this.ItemService.cadastrar(this.formGroup.value).subscribe(
        itemCadastrado => {
          this.router.navigateByUrl('/itens');
        },
        (error) => {
          alert('Error ao cadastrar' + JSON.stringify(error));
        }
      );
    }
  }
deletar(){
    if(confirm('Deseja deletar o item' + this.item.nome)){
      this.ItemService.deletar(this.item).subscribe(
        response => {
            this.router.navigateByUrl('/itens')
        },
        error => {
          alert('Erro ao deletar' + JSON.stringify(error))
        }
      )
    }
  }


}


