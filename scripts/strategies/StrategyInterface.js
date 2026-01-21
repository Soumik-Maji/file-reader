/**
 * Abstract parent class for all other Strategy classes.
 */
export class StrategyInterface {
    constructor() {
        throw new Error("Cannot create instance of abstract class.");
    }
    readAsText() {
        throw new Error("Method not implemented.");
    }
    readAsBuffer() {
        throw new Error("Method not implemented.");
    }
}