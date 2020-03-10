import { LitElement } from "lit-element";
export declare class TInput extends LitElement {
    size: string;
    inputValue: string;
    private classes;
    static get styles(): import("lit-element").CSSResult;
    set value(value: string);
    get value(): string;
    valueChanged(e: any): void;
    render(): import("lit-element").TemplateResult;
}
