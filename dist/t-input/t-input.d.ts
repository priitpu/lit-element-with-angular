import { LitElement } from "lit-element";
export declare class TButton extends LitElement {
    glyph: string;
    inputValue: string;
    static get styles(): import("lit-element").CSSResult;
    set value(value: string);
    get value(): string;
    valueChanged(e: any): void;
    render(): import("lit-element").TemplateResult;
}
