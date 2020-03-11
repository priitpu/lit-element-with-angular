import { LitElement, html, customElement, property, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

@customElement("t-button")
export class TButton extends LitElement {
  @property({ type: String }) label: string;
  @property({ type: String }) size: string;
  @property({ type: String }) theme: string = 'default';
  @property({ type: String }) iconLeft: string = '';
  @property({ type: String }) iconRight: string = '';
  @property({ type: Boolean }) iconOnly: boolean = false;
  public classes = {};
  static get styles() {
    return css`
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
    return html`
      <button class="${classMap(this.classes)}">
        <span class="l-icon"><slot name="l-icon"></slot></span>
        <span><slot></slot></span>
        <span class="r-icon"><slot name="r-icon"></slot></span>
      </button>
    `;
  }
}
