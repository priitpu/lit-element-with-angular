import { LitElement } from "lit-element";
export declare class TButton extends LitElement {
    label: string;
    size: string;
    theme: string;
    iconLeft: string;
    iconRight: string;
    iconOnly: boolean;
    private classes;
    static get styles(): import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
