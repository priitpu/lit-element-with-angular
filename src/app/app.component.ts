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
  public form = this.fb.group({
    input: [''],
  });
  title = 'lit-element-with-angular';
}
