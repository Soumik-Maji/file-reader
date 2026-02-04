import { filepathtest } from "./tests/test-scripts/filepathtest.js";
import { inputelementtest } from "./tests/test-scripts/inputelementtest.js";
import { rawstringtest } from "./tests/test-scripts/rawstringtest.js";
import { textareatest } from "./tests/test-scripts/textareatest.js";

await rawstringtest();
await textareatest();
await filepathtest();
await inputelementtest();