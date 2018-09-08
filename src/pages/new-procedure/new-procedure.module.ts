import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewProcedurePage } from './new-procedure';

@NgModule({
  declarations: [
    NewProcedurePage,
  ],
  imports: [
    IonicPageModule.forChild(NewProcedurePage),
  ],
})
export class NewProcedurePageModule {}
