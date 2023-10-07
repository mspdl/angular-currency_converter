import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/conversion.model';

@Injectable()
export class ConverterService {
  ACCESS_KEY = 'b53faaca3ad649e8ad32f18d75c8c404';
  BASE_URL = `http://data.fixer.io/api/latest`;

  constructor(private http: HttpClient) {}

  convert(conversion: Conversion): Observable<ConversionResponse> {
    let params = `base=${conversion.fromCurrency}&symbols=${conversion.toCurrency}`;

    return this.http.get(this.BASE_URL + params).pipe(
      map((response) => {
        return response as ConversionResponse;
      })
    );
  }

  toExchangeRate(
    conversionResponse: ConversionResponse,
    conversion: Conversion
  ) {
    if (conversionResponse === undefined) {
      return 0;
    }
    return conversionResponse.rates[conversion.toCurrency];
  }

  fromExchangeRate(
    conversionResponse: ConversionResponse,
    conversion: Conversion
  ) {
    if (conversionResponse === undefined) {
      return '0';
    }
    return (1 / conversionResponse.rates[conversion.toCurrency]).toFixed(4);
  }

  exchangeRateDate(conversionResponse: ConversionResponse): string {
    if (conversionResponse === undefined) {
      return '';
    }
    return conversionResponse.date;
  }
}
