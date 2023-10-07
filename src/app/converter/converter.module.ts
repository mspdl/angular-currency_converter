import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConverterComponent } from './components/converter.component';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule],
  exports: [ConverterComponent],
})
export class ConverterModule {}
