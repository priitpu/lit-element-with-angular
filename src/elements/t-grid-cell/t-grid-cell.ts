import { LitElement, html, customElement, css, property } from "lit-element";

@customElement("t-grid-cell")
export class TGridCell extends LitElement {
  @property({ type: String }) span: string = "auto";
  @property({ type: String }) justify: string = "stretch";
  @property({ type: String }) start: string = "auto";

  static get styles() {
    return css`
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
    this.style.gridColumnStart = `${this.start}`
    this.style.gridColumnEnd = `span ${this.span}`;
    this.style.justifySelf = `${this.justify}`;
    return html`
      <slot></slot>
    `;
  }
}
