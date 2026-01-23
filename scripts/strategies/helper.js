/**
 * Returns a TextDecoder for the given content type.
 * Extracts charset= from MIME type or defaults to UTF-8.
 * @private
 * @param {string} contentType - MIME type (e.g. "text/html; charset=utf-8").
 * @returns {TextDecoder} Configured decoder instance.
 */
export function getDecoder(contentType) {
    const match = contentType.match(/charset=([^;]+)/i);
    const encoding = match?.[1]?.toLowerCase() || "utf-8";
    const decoder = new TextDecoder(encoding);
    return decoder;
}