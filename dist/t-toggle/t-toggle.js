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
let TToggle = class TToggle extends LitElement {
    constructor() {
        super();
        this.inputValue = false;
        this.classes = {};
    }
    static get styles() {
        return css `
      :host {
        display: flex;
      }
      .t-toggle {
        background: #FFFFFF;
        border: 1px solid #8A98A5;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 4px;
        width: 56px;
        height: 32px;
        position: relative;
        padding: 0px 2px;
        display: flex;
        align-itetms: center;
        transition: background-color 0.2s linear;
      }
      .t-toggle:hover {
        cursor: pointer;
      }
      .t-toggle__thumb {
        transition: left 0.2s linear;
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        position: relative;
        left: 0;
        background-color: #8A98A5;
        border-radius: 4px;
        display: inline-block;
      }
      .t-toggle--on {
        background-color: #EC1A2E;
      }
      .t-toggle--on .t-toggle__thumb {
        left: 50%;
        background-color: #FFFFFF;
      }
    `;
    }
    set value(value) {
        const oldValue = this.inputValue;
        this.inputValue = value;
        this.requestUpdate('inputValue', oldValue);
        const event = new Event('change');
        this.dispatchEvent(event);
    }
    get value() {
        return this.inputValue;
    }
    valueChanged(e) {
        this.inputValue = !this.inputValue;
        const event = new Event('change');
        this.dispatchEvent(event);
    }
    render() {
        this.classes = {
            't-toggle': true,
            't-toggle--on': this.inputValue === true,
            't-toggle--off': this.inputValue === false,
        };
        return html `
      <button
        @click=${(e) => { this.valueChanged(e); }}
        class=${classMap(this.classes)}
      >
        <div class="t-toggle__thumb"></div>
      </button>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", Boolean)
], TToggle.prototype, "inputValue", void 0);
TToggle = __decorate([
    customElement("t-toggle"),
    __metadata("design:paramtypes", [])
], TToggle);
export { TToggle };
//# sourceMappingURL=t-toggle.js.map