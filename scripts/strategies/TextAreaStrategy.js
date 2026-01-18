import { RawStringStrategy } from "./RawStringStrategy.js";

export class TextAreaStrategy extends RawStringStrategy {
    constructor(input) {
        if (!(input instanceof HTMLTextAreaElement))
            throw new Error("Input type is not HTML text area.");
        super(input.value);
    }
}