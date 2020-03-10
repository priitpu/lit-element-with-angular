import { LitElement, html, customElement, property, css } from "lit-element";

@customElement("t-input")
export class TButton extends LitElement {
  @property({ type: String }) glyph: string = 'info';
  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `;
  }
  render() {
    return html`
      <label>
        <span><slot></slot></span>
        <input type="text" />
      </label>
    `;
  }
}
