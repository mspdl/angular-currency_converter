import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './components/converter.component';
import { ConverterService } from './services/converter.service';
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [ConverterComponent],
  providers: [CurrencyService, ConverterService],
})
export class ConverterModule {}
