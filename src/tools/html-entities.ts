const htmlEntities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

const htmlEntitiesReverse: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x2F;": "/",
};

export function encodeHTMLEntities(input: string): string {
  return input.replace(/[&<>"'\/]/g, (char) => htmlEntities[char] || char);
}

export function decodeHTMLEntities(input: string): string {
  return input.replace(/&(?:amp|lt|gt|quot|#39|#x2F);/g, (entity) => htmlEntitiesReverse[entity] || entity);
}

export function encodeAllEntities(input: string): string {
  return input.replace(/./g, (char) => {
    const code = char.charCodeAt(0);
    if (code > 127 || /[&<>"'\/]/.test(char)) {
      return `&#${code};`;
    }
    return char;
  });
}
