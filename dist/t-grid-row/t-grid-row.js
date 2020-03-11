var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, customElement, css, property } from "lit-element";
let TGridRow = class TGridRow extends LitElement {
    constructor() {
        super(...arguments);
        this.cols = "12";
    }
    static get styles() {
        return css `
      :host {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 16px;
      }
    `;
    }
    render() {
        this.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
        return html `
      <slot></slot>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TGridRow.prototype, "cols", void 0);
TGridRow = __decorate([
    customElement("t-grid-row")
], TGridRow);
export { TGridRow };
//# sourceMappingURL=t-grid-row.js.map