import { FileInputStrategy } from "./strategies/FileInputStrategy.js";
import { FilePathStrategy } from "./strategies/FilePathStrategy.js";
import { RawStringStrategy } from "./strategies/RawStringStrategy.js";
import { TextAreaStrategy } from "./strategies/TextAreaStrategy.js";

const constructorKey = Symbol("ReadFile");
export class ReadFile {

    static Strategy = Object.freeze({
        "HTMLInputElement": FileInputStrategy,
        "HTMLTextArea": TextAreaStrategy,
        "RawString": RawStringStrategy,
        "FilePath": FilePathStrategy,
        // "NodeFilePath": ,
        // "UrlStrategy": UrlStrategy
    });

    #readerStrategy;  // to store the strategy temporarily

    constructor(passedKey) {
        if (passedKey !== constructorKey)
            throw new Error("Cannot call ReadFile with 'new'. Call static function readFrom().");
        this.#readerStrategy = null;
        return this;
    }

    /**
     *
     * @param {Strategy} strategy
     * @param {string} location
     * @returns {ReadFile} chain with getString or getArrayBuffer to get the file data
     */
    static readFrom(strategy, location) {
        if (!Object.values(ReadFile.Strategy).includes(strategy))
            throw new Error("Strategy not present.");
        const tmpObj = new ReadFile(constructorKey);
        tmpObj.#readerStrategy = new strategy(location);
        return tmpObj;
    }

    async getString() {
        return await this.#readerStrategy.readAsText();
    }
    async getArrayBuffer() {
        return await this.#readerStrategy.readAsBuffer();
    }
}