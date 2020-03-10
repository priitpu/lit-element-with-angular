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

  public set value(value: string) {
    const oldValue = this.inputValue;
    this.inputValue = value;
    this.requestUpdate('inputValue', oldValue);
    const event = new Event('input');
    this.dispatchEvent(event);
  }

  public get value() {
    return this.inputValue;
  }

  valueChanged(e: any) {
    console.log('koerajalad');
    this.inputValue = e.target.value;
    const event = new Event('input');
    this.dispatchEvent(event);
  }

  updated() {
    console.log('updated t-input');
    return;
  }

  render() {
    return html`
      <label>
        <span><slot></slot></span>
        <input
          .value=${this.inputValue}
          @input=${(e: any) => { this.valueChanged(e) }}
          type="text"
        />
      </label>
    `;
  }
}
