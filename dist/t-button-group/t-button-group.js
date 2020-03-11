var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from "lit-element";
let TButtonGroup = class TButtonGroup extends LitElement {
    static get styles() {
        return css `
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
        return html `
      <div class="t-button-group">
        <slot></slot>
      </div>
    `;
    }
};
TButtonGroup = __decorate([
    customElement("t-button-group")
], TButtonGroup);
export { TButtonGroup };
//# sourceMappingURL=t-button-group.js.map