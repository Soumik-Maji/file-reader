/**
 * Abstract parent class for all other Strategy classes.
 */
export class StrategyInterface {
    constructor() {
        if (new.target === StrategyInterface)
            throw new Error("Cannot create instance of abstract class.");
    }
    readAsText() {
        throw new Error("Method not implemented.");
    }
    readAsBuffer() {
        throw new Error("Method not implemented.");
    }
}