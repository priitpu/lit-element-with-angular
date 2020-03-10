import { LitElement, html, customElement, property, css } from "lit-element";

@customElement("t-input")
export class TButton extends LitElement {
  @property({ type: String }) glyph: string = 'info';
  @property({ type: String }) inputValue: string = '';
  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `;
  }

  set value(value: string) {
    this.inputValue = value;
  }

  get value() {
    return this.inputValue;
  }

  valueChanged(e: any) {
    this.inputValue = e.target.value;
    const event = new Event('change');
    this.dispatchEvent(event);
  }
  render() {
    return html`
      <label>
        <span><slot></slot></span>
        <input value=${this.inputValue} @change=${(e: any) => { this.valueChanged(e) }} type="text" />
      </label>
    `;
  }
}
