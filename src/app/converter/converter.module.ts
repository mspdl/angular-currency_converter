import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConverterComponent } from './components/converter.component';
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule],
  exports: [ConverterComponent],
  providers: [CurrencyService],
})
export class ConverterModule {}
