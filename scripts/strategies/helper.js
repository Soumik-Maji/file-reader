/**
 * Returns a TextDecoder for the given content type.
 * Extracts charset= from MIME type or defaults to UTF-8.
 * @param {string} contentType MIME type (e.g. "text/html; charset=utf-8").
 * @returns {TextDecoder} Configured decoder instance.
 */
function getDecoder(contentType) {
    const match = contentType.match(/charset=([^;]+)/i);
    const encoding = match?.[1]?.toLowerCase() || "utf-8";
    const decoder = new TextDecoder(encoding);
    return decoder;
}

/**
 * decodes array buffer data to string data with the provided content type.
 * @param {ArrayBuffer} arrayBufferData
 * @param {string} contentType MIME type (e.g. "text/html; charset=utf-8").
 * @returns {string}
 */
export function getStringFromArrayBuffer(arrayBufferData, contentType) {
    if (contentType === undefined)
        throw new Error("contentType is undefined. Provide one for this function to work.");
    const decoder = getDecoder(contentType)
    return decoder.decode(arrayBufferData);
}