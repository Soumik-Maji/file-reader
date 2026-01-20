import { ReadFile } from "../../scripts/ReadFile.js";

export async function textareatest() {
    const ta = document.createElement("textarea");
    ta.value = "Testing text area input strategy";
    document.body.appendChild(ta);

    const obj = ReadFile.readFrom(ReadFile.Strategy.HTMLTextArea, ta);
    const a = await obj.getString();
    const b = await obj.getArrayBuffer();

    console.log(a);
    console.log(b);
}