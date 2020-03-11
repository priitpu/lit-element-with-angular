import { LitElement, html, customElement, property, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement("t-toggle")
export class TToggle extends LitElement {
  @property({ type: String }) inputValue: boolean = false;

  private classes = {};
  constructor() {
    super();
  }
  static get styles() {
    return css`
      :host {
        display: flex;
      }
      .t-toggle {
        background: #FFFFFF;
        border: 1px solid #8A98A5;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 4px;
        width: 56px;
        height: 32px;
        position: relative;
        padding: 0px 2px;
        display: flex;
        align-itetms: center;
        transition: background-color 0.2s linear;
      }
      .t-toggle:hover {
        cursor: pointer;
      }
      .t-toggle__thumb {
        transition: left 0.2s linear;
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        position: relative;
        left: 0;
        background-color: #8A98A5;
        border-radius: 4px;
        display: inline-block;
      }
      .t-toggle--on {
        background-color: #EC1A2E;
      }
      .t-toggle--on .t-toggle__thumb {
        left: 50%;
        background-color: #FFFFFF;
      }
    `;
  }

  public set value(value: boolean) {
    const oldValue = this.inputValue;
    this.inputValue = value;
    this.requestUpdate('inputValue', oldValue);
    const event = new Event('change');
    this.dispatchEvent(event);
  }

  public get value() {
    return this.inputValue;
  }

  valueChanged(e: any) {
    this.inputValue = !this.inputValue;
    const event = new Event('change');
    this.dispatchEvent(event);
  }

  render() {
    this.classes = {
      't-toggle': true,
      't-toggle--on': this.inputValue === true,
      't-toggle--off': this.inputValue === false,
    };
    return html`
      <button
        @click=${(e: Event) => { this.valueChanged(e) }}
        class=${classMap(this.classes)}
      >
        <div class="t-toggle__thumb"></div>
      </button>
    `;
  }
}
