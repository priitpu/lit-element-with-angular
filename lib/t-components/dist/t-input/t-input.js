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
import { classMap } from "lit-html/directives/class-map";
let TInput = class TInput extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.inputValue = '';
        this.classes = {};
    }
    static get styles() {
        return css `
      :host {
        display: flex;
      }
      .t-input input {
        box-sizing: border-box;
        border-radius: 4px;
        border: 1px solid #8A98A5;
        padding: 8px;
        font-size: 14px;
        background-color: #ffffff;
        height: 32px;
      }
      .t-input input:hover {
        border: 1px solid #3F3F3F;
        border-radius: 2px;
      }
      .t-input input:active {
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        border: 1px solid #2970B6;
        border-radius: 4px;
      }
      .t-input input:focus {
        border: 2px solid #2970B6;
        border-radius: 4px;
        outline: 0;
      }
      .t-input input:active:focus {
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
        border: 2px solid #009EE3;
      }
      .t-input--sm input {
        padding: 4px 8px;
        height: 28px;
      }
      .t-input--lg input {
        padding: 12px 8px;
        height: 40px;
      }
    `;
    }
    set value(value) {
        const oldValue = this.inputValue;
        this.inputValue = value;
        this.requestUpdate('inputValue', oldValue);
        const event = new Event('input');
        this.dispatchEvent(event);
    }
    get value() {
        return this.inputValue;
    }
    valueChanged(e) {
        this.inputValue = e.target.value;
        const event = new Event('input');
        this.dispatchEvent(event);
    }
    render() {
        this.classes = {
            't-input': true,
            't-input--sm': this.size === 'sm',
            't-input--lg': this.size === 'lg',
        };
        return html `
      <label class=${classMap(this.classes)}>
        <span><slot></slot></span>
        <input
          .value=${this.inputValue}
          @input=${(e) => { this.valueChanged(e); }}
          type="text"
        />
      </label>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TInput.prototype, "size", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TInput.prototype, "inputValue", void 0);
TInput = __decorate([
    customElement("t-input")
], TInput);
export { TInput };
//# sourceMappingURL=t-input.js.map