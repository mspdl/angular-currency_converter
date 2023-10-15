import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[number]',
})
export class NumberDirective {
  constructor() {}

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let value = $event.target.value;
    let decimalsPos = value.indexOf('.');

    value = value.replace(/[\D]/g, '');

    if (decimalsPos > 0) {
      value = value.substr(0, decimalsPos) + '.' + value.substr(decimalsPos);
    }
    $event.target.value = value;
  }
}
