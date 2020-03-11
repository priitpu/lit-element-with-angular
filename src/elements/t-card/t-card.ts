import { LitElement, html, customElement, css } from "lit-element";

@customElement("t-card")
export class TCard extends LitElement {
  static get styles() {
    return css`
      *, ::slotted(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        padding: 18px 16px;
        margin: 24px 16px;
        background-color: #ffffff;
        font-family: sans-serif;
        border-radius: 2px;
      }
      .t-card-head ::slotted(*) {
        font-size: 18px;
        line-height: 21px;
      }
      .t-card-body ::slotted(*) {
        font-size: 14px;
        color: #3f3f3f;
        line-height: 20px;
      }
      .t-card-body ::slotted(p) {
        margin-bottom: 4px;
      }
    `;
  }
  render() {
    return html`
      <div class="t-card-head">
        <slot name="t-card-head"></slot>
      </div>
      <div class="t-card-body">
        <slot></slot>
      </div>
    `;
  }
}
