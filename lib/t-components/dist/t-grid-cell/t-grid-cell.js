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
let TGridCell = class TGridCell extends LitElement {
    constructor() {
        super(...arguments);
        this.span = "auto";
        this.justify = "stretch";
        this.start = "auto";
    }
    static get styles() {
        return css `
      :host {
        display: block;
      }
      :host ::slotted(p) {
        margin: 0;
        padding: 0;
      }
    `;
    }
    render() {
        this.style.gridColumnStart = `${this.start}`;
        this.style.gridColumnEnd = `span ${this.span}`;
        this.style.justifySelf = `${this.justify}`;
        return html `
      <slot></slot>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TGridCell.prototype, "span", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TGridCell.prototype, "justify", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TGridCell.prototype, "start", void 0);
TGridCell = __decorate([
    customElement("t-grid-cell")
], TGridCell);
export { TGridCell };
//# sourceMappingURL=t-grid-cell.js.map