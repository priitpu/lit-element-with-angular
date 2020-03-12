import { Component, Directive, forwardRef } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private fb: FormBuilder,
  ) {
  }
  public elementList = [];
  public toggleValue = false;
  public form = this.fb.group({
    input: [''],
  });

  public addEl() {
    this.elementList = [...this.elementList, this.form.value.input];
    this.form.controls.input.reset();
  }
  public clearEl() {
    this.elementList = [];
  }

  public toggleThings(e: Event) {
    const target = e.target as any;
    this.toggleValue = target.value;
  }
}
