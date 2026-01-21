import { FileInputStrategy } from "./strategies/FileInputStrategy.js";
import { FilePathStrategy } from "./strategies/FilePathStrategy.js";
import { RawStringStrategy } from "./strategies/RawStringStrategy.js";
import { TextAreaStrategy } from "./strategies/TextAreaStrategy.js";

const constructorKey = Symbol("ReadFile");
/**
 * Class to take the file location & strategy on how to read the file
 *
 * Check ReadFile.Strategy to know the strategies
 */
export class ReadFile {

    /**
     * Enum to provide easy access to specific strategies
     */
    static Strategy = Object.freeze({
        "HTMLInputElement": FileInputStrategy,
        "HTMLTextArea": TextAreaStrategy,
        "RawString": RawStringStrategy,
        "FilePath": FilePathStrategy,
        // "NodeFilePath":  // read local files using node
        // "UrlStrategy":   // read files over the network, like from FTP server
    });

    #readerStrategy;  // to store the strategy temporarily

    constructor(passedKey) {
        if (passedKey !== constructorKey)
            throw new Error("Cannot call ReadFile with 'new'. Call static function from().");
        this.#readerStrategy = null;
        return this;
    }

    /**
     * @static function to create instance & record the strategy
     * @param {ReadFile.Strategy} strategy
     * @param {string} location
     * @returns {ReadFile} chain with getString or getArrayBuffer to get the file data
     */
    static from(strategy, location) {
        if (!Object.values(ReadFile.Strategy).includes(strategy))
            throw new Error("Strategy not present.");
        const tmpObj = new ReadFile(constructorKey);
        tmpObj.#readerStrategy = new strategy(location);
        return tmpObj;
    }

    /**
     * returns data in string format
     * @returns {Promise<string>}
     */
    async getString() {
        return await this.#readerStrategy.readAsText();
    }

    /**
     * returns data in Array Buffer format
     * @returns {Promise<ArrayBuffer>}
     */
    async getArrayBuffer() {
        return await this.#readerStrategy.readAsBuffer();
    }
}