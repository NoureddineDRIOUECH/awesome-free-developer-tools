export type CaseType = "camel" | "pascal" | "snake" | "kebab" | "upper" | "lower" | "title" | "sentence";

export function toCamelCase(input: string): string {
  return input
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
}

export function toPascalCase(input: string): string {
  return input
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

export function toSnakeCase(input: string): string {
  return input
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

export function toKebabCase(input: string): string {
  return input
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function toUpperCase(input: string): string {
  return input.toUpperCase();
}

export function toLowerCase(input: string): string {
  return input.toLowerCase();
}

export function toTitleCase(input: string): string {
  return input.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

export function toSentenceCase(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export function convertCase(input: string, type: CaseType): string {
  const map: Record<CaseType, (s: string) => string> = {
    camel: toCamelCase,
    pascal: toPascalCase,
    snake: toSnakeCase,
    kebab: toKebabCase,
    upper: toUpperCase,
    lower: toLowerCase,
    title: toTitleCase,
    sentence: toSentenceCase,
  };
  return map[type](input);
}
