var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, customElement, property, css } from "lit-element";
let TButton = class TButton extends LitElement {
    constructor() {
        super(...arguments);
        this.glyph = 'info';
        this.inputValue = '';
    }
    static get styles() {
        return css `
      :host {
        display: flex;
      }
    `;
    }
    set value(value) {
        this.inputValue = value;
    }
    get value() {
        return this.inputValue;
    }
    valueChanged(e) {
        this.inputValue = e.target.value;
        const event = new Event('change');
        this.dispatchEvent(event);
    }
    render() {
        return html `
      <label>
        <span><slot></slot></span>
        <input value=${this.inputValue} @change=${(e) => { this.valueChanged(e); }} type="text" />
      </label>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "glyph", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "inputValue", void 0);
TButton = __decorate([
    customElement("t-input")
], TButton);
export { TButton };
//# sourceMappingURL=t-input.js.map