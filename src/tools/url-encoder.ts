export function encodeURL(input: string): string {
  return encodeURIComponent(input);
}

export function decodeURL(input: string): string {
  return decodeURIComponent(input);
}

export function encodeURLFull(input: string): string {
  return encodeURI(input);
}

export function decodeURLFull(input: string): string {
  return decodeURI(input);
}

export function parseQueryString(input: string): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(input.startsWith("?") ? input.slice(1) : input);
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  return params;
}

export function toQueryString(params: Record<string, string>): string {
  const searchParams = new URLSearchParams(params);
  return searchParams.toString();
}
