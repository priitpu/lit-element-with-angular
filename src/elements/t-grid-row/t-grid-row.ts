import { LitElement, html, customElement, css, property } from "lit-element";

@customElement("t-grid-row")
export class TGridRow extends LitElement {
  @property({ type: String }) cols: string = "12";
  static get styles() {
    return css`
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
    return html`
      <slot></slot>
    `;
  }
}
