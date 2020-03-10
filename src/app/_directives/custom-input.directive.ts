import { Directive, forwardRef, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appCustomInput]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputDirective),
      multi: true
    }
  ]
})
export class CustomInputDirective implements ControlValueAccessor {
  constructor(private elementRef: ElementRef) {}
  private inputValue: string;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.elementRef.nativeElement.value;
  }

  set value(val) {
    if (val !== this.inputValue) {
      this.inputValue = val;
      this.onChange(this.inputValue);
      this.onTouched();
      this.elementRef.nativeElement.value = val;
    }
  }

  @HostListener('change', ['$event.target.value'])
  listenForValueChange(value) {
    this.value = value;
  }
  writeValue(value) {
    if (value !== null) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
