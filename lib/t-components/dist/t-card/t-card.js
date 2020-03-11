var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from "lit-element";
let TCard = class TCard extends LitElement {
    static get styles() {
        return css `
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
        return html `
      <div class="t-card-head">
        <slot name="t-card-head"></slot>
      </div>
      <div class="t-card-body">
        <slot></slot>
      </div>
    `;
    }
};
TCard = __decorate([
    customElement("t-card")
], TCard);
export { TCard };
//# sourceMappingURL=t-card.js.map