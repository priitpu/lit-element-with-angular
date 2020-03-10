import { LitElement, html, customElement, property, css } from "lit-element";
import '@material/mwc-icon';

@customElement("t-icon")
export class TButton extends LitElement {
  @property({ type: String }) glyph: string = 'info';
  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `;
  }
  render() {
    return html`
      <mwc-icon>${this.glyph}</mwc-icon>
    `;
  }
}
