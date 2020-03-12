import { LitElement, html, customElement, property, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement("t-input")
export class TInput extends LitElement {
  @property({ type: String }) size: string = 'md';
  @property({ type: String }) inputValue: string = '';

  private classes = {};
  static get styles() {
    return css`
      :host {
        display: flex;
      }
      .t-input {
        width: 100%;
      }
      .t-input input {
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid #8A98A5;
        padding: 8px;
        font-size: 14px;
        background-color: #ffffff;
        height: 32px;
        width: 100%;
      }
      .t-input input:hover {
        border: 1px solid #3F3F3F;
        border-radius: 2px;
      }
      .t-input input:active {
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        border: 1px solid #2970B6;
        border-radius: 4px;
      }
      .t-input input:focus {
        border: 2px solid #2970B6;
        border-radius: 4px;
        outline: 0;
      }
      .t-input input:active:focus {
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        border: 2px solid #009EE3;
      }
      .t-input--sm input {
        padding: 4px 8px;
        height: 28px;
      }
      .t-input--lg input {
        padding: 12px 8px;
        height: 40px;
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
    this.inputValue = e.target.value;
    const event = new Event('input');
    this.dispatchEvent(event);
  }

  render() {
    this.classes = {
      't-input': true,
      't-input--sm': this.size === 'sm',
      't-input--lg': this.size === 'lg',
    };
    return html`
      <label class=${classMap(this.classes)}>
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
