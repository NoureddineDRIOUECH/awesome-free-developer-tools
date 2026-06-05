export function generateUUID(): string {
  const hex = "0123456789abcdef";
  const chars = new Array(36);
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      chars[i] = "-";
    } else if (i === 14) {
      chars[i] = "4";
    } else if (i === 19) {
      chars[i] = hex[(Math.random() * 4) | 8];
    } else {
      chars[i] = hex[(Math.random() * 16) | 0];
    }
  }
  return chars.join("");
}

export function generateUUIDs(count: number): string[] {
  return Array.from({ length: count }, () => generateUUID());
}

export function isValidUUID(uuid: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
}

export function generateUUIDv7(): string {
  const timestamp = Date.now().toString(16).padStart(12, "0");
  const random1 = Array.from({ length: 4 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  const version = "7";
  const variant = (8 + Math.floor(Math.random() * 4)).toString(16);
  const random2 = Array.from({ length: 12 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
  return `${timestamp.slice(0,8)}-${timestamp.slice(8,12)}-${version}${random1.slice(0,3)}-${variant}${random2.slice(0,3)}-${random2.slice(3)}`;
}
