import { LitElement, html, customElement, css } from "lit-element";

@customElement("t-button-group")
export class TButtonGroup extends LitElement {
  static get styles() {
    return css`
      .t-button-group {
        display: flex;
      }
      .t-button-group ::slotted(*) {
        margin-right: 4px;
      }
      .t-button-group ::slotted(t-button:last-child) {
        margin-right: 0;
      }
      .t-button-group ::slotted(t-button) .btn{
        background-color: yellow;
        display: block;
      }
      :host {
        display: inline-flex;
      }
    `;
  }
  render() {
    return html`
      <div class="t-button-group">
        <slot></slot>
      </div>
    `;
  }
}
