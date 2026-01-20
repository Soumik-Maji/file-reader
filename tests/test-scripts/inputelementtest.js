import { ReadFile } from "../../scripts/ReadFile.js";

export async function inputelementtest() {
    const fi = document.createElement("input");
    fi.type = "file";
    document.body.appendChild(fi);

    fi.addEventListener("change", async () => {
        const obj = ReadFile.readFrom(ReadFile.Strategy.HTMLInputElement, fi);
        const a = await obj.getString();
        const b = await obj.getArrayBuffer();

        console.log(a);
        console.log(b);
    });
}