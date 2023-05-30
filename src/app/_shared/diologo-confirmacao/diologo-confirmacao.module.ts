import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiologoConfirmacaoComponent } from './diologo-confirmacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [DiologoConfirmacaoComponent],
  imports: [
    CommonModule,
     MatDialogModule,
     MatButtonModule
    ],
  entryComponents:[DiologoConfirmacaoComponent]
})
export class DiologoConfirmacaoModule {}
