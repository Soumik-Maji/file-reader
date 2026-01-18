import { getDecoder } from "./helper.js";

export class FilePathStrategy {

    #filepath;
    constructor(input) {
        if (typeof input !== "string")
            throw new Error("Input is not a file path.");
        this.#filepath = input;
    }

    async readAsText() {
        const [arrayBuffer, contentType] = await this.readAsBuffer();
        const decoder = getDecoder(contentType)
        const data = decoder.decode(arrayBuffer);
        return data;
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