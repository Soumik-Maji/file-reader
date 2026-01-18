export class RawStringStrategy {

    #text;
    constructor(input) {
        if (typeof input !== "string")
            throw new Error("Input type is not string.");
        this.#text = input;
    }

    readAsText() {
        return this.#text;
    }

    readAsBuffer() {
        return (new TextEncoder()).encode(this.#text);
    }
}