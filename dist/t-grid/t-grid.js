var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, css } from "lit-element";
let TGrid = class TGrid extends LitElement {
    static get styles() {
        return css `
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
        return html `
      <slot></slot>
    `;
    }
};
TGrid = __decorate([
    customElement("t-grid")
], TGrid);
export { TGrid };
//# sourceMappingURL=t-grid.js.map