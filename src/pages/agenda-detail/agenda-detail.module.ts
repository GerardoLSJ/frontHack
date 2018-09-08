import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaDetailPage } from './agenda-detail';

@NgModule({
  declarations: [
    AgendaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaDetailPage),
  ],
})
export class AgendaDetailPageModule {}
