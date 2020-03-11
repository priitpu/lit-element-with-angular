import { LitElement } from "lit-element";
export declare class TToggle extends LitElement {
    inputValue: boolean;
    private classes;
    constructor();
    static get styles(): import("lit-element").CSSResult;
    set value(value: boolean);
    get value(): boolean;
    valueChanged(e: any): void;
    render(): import("lit-element").TemplateResult;
}
