import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
      IonicModule
  ],
  declarations: [ToolbarComponent],
    exports: [ToolbarComponent]
})
export class SharedModule {}
