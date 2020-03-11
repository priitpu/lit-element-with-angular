import { LitElement, html, customElement, css } from "lit-element";

@customElement("t-grid")
export class TGrid extends LitElement {
  static get styles() {
    return css`
      :host ::slotted(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        grid-gap: 16px;
      }
    `;
  }
  render() {
    return html`
      <slot></slot>
    `;
  }
}
