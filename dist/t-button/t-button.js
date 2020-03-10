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
let TButton = class TButton extends LitElement {
    constructor() {
        super(...arguments);
        this.theme = 'default';
        this.iconLeft = '';
        this.iconRight = '';
        this.iconOnly = false;
        this.classes = {};
    }
    static get styles() {
        return css `
      .btn {
        box-sizing: border-box;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        min-height: 32px;
        min-width: 96px;
      }
      .btn:hover {
        cursor: pointer;
      }
      .btn--sm {
        min-height: 28px;
      }
      .btn--lg {
        min-height: 40px;
      }
      .btn--primary {
        background-color: #ec1a2e;
        color: #ffffff;
        border: 0;
      }
      .btn--primary:hover {
        background-color: #a9000f;
      }
      .btn--primary:active {
        background-color: #76000a;
      }
      .btn--primary:disabled {
        background-color: #ccd9e0;
        color: #575a65;
      }
      .btn--secondary {
        background-color: #ffffff;
        color: #ec1a2e;
        border: 2px solid #ec1a2e;
      }
      .btn--link {
        padding: 0;
        color: #ec1a2e;
        border: 0;
        min-width: 0;
      }
      .btn--icon {
        padding: 0 10px;
        min-width: 0;
      }
      .l-icon {
        margin-right: 10px;
      }
      .r-icon {
        margin-left: 10px;
      }
    `;
    }
    render() {
        this.classes = {
            'btn': true,
            'btn--sm': this.size === 'small',
            'btn--lg': this.size === 'large',
            'btn--primary': this.theme === 'default',
            'btn--secondary': this.theme === 'secondary',
            'btn--link': this.theme === 'link',
            'btn--icon': this.iconOnly,
        };
        return html `
      <button class="${classMap(this.classes)}">
        <span class="l-icon"><slot name="l-icon"></slot></span>
        <span><slot></slot></span>
        <span class="r-icon"><slot name="r-icon"></slot></span>
      </button>
    `;
    }
};
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "size", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "theme", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "iconLeft", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], TButton.prototype, "iconRight", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], TButton.prototype, "iconOnly", void 0);
TButton = __decorate([
    customElement("t-button")
], TButton);
export { TButton };
//# sourceMappingURL=t-button.js.map