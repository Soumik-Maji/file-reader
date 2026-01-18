import { ReadFile, Strategy } from "../../scripts/ReadFile.js";

export async function rawstringtest() {
    const s = "Testing provided raw string strategy";
    const obj = ReadFile.readFrom(Strategy.RawString, s);
    const a = await obj.getString();
    const b = await obj.getArrayBuffer();

    console.log(a);
    console.log(b);
}