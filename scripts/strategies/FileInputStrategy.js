import { getDecoder } from "./helper.js";
import { StrategyInterface } from "./StrategyInterface.js";

export class FileInputStrategy extends StrategyInterface {

    #input;
    constructor(input) {
        super();
        if (!(input instanceof HTMLInputElement && input.type === "file"))
            throw new Error("Input type is not HTML file input.");
        if (input.files.length === 0)
            throw new Error("No file given in HTML file input.");
        this.#input = input;
    }

    async readAsText() {
        const arrayBuffer = await this.readAsBuffer();
        const decoder = getDecoder(this.#input.files[0].type)
        const data = decoder.decode(arrayBuffer);
        return data;
    }

    async readAsBuffer() {
        const fr = new FileReader();
        fr.readAsArrayBuffer(this.#input.files[0]);

        return new Promise((resolve, reject) => {
            fr.onload = () => {
                resolve(fr.result);
            }
            fr.onerror = (err) => {
                reject(err);
            }
        });
    }
}