import { getStringFromArrayBuffer } from "./helper.js";
import { StrategyInterface } from "./StrategyInterface.js";

export class FilePathStrategy extends StrategyInterface {

    #filepath;
    constructor(input) {
        super();
        if (typeof input !== "string")
            throw new Error("Input is not a file path.");
        this.#filepath = input;
    }

    async readAsText() {
        const [arrayBuffer, contentType] = await this.readAsBuffer();
        return getStringFromArrayBuffer(arrayBuffer, contentType);
    }

    async readAsBuffer() {
        const response = await fetch(this.#filepath);
        if (!response.ok)
            throw new Error(`HTTP error! Resource not found at ${this.#filepath}. Status: ${response.status}`);
        return [
            await response.arrayBuffer(),
            response.headers.get("Content-Type") || ""
        ];
    }
}