
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CdsWhatsappReceiverComponent } from './whatsapp-receiver.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [CdsWhatsappReceiverComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SendWhatsappTemplateModalModule {}
