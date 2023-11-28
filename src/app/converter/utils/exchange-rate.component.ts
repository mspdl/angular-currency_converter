import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conversion } from '../models/conversion.model';
import { ConversionResponse } from '../models/conversion-response.model';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent {
  @Input() id: string;
  @Input() conversion: Conversion;
  @Input() conversionResponse: ConversionResponse;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>;

  newConversion(){
    this.onConfirm.emit();
  }



}
