import {
  Directive,
  OnInit,
  forwardRef,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener
} from '@angular/core';
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

  constructor(
    private elementRef: ElementRef,
  ) {}
  private inputValue: string;
  onChange: any = () => {};
  onTouched: any = () => {};


  get value() {
    return this.inputValue;
  }

  set value(val) {
    if (val !== this.inputValue) {
      this.inputValue = val;
      this.onChange(this.inputValue);
      this.onTouched();
      this.elementRef.nativeElement.value = val;
    }
  }

  @HostListener('valueChange', ['$event.detail'])
  listenForValueChange(value) {
    this.value = value;
  }
  writeValue(value) {
    if (value) {
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
