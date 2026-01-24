import { ReadFile } from "../../scripts/ReadFile.js";

export async function filepathtest() {
    const path = "./tests/resources/test-book.xlsx";

    const obj = ReadFile.from(ReadFile.Strategy.FilePath, path);
    const a = await obj.getString();
    const b = await obj.getArrayBuffer();

    console.log(a);
    console.log(b);
}