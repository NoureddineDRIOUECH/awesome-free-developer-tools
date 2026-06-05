export function generatePassword(length = 20, options: {
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
} = {}): string {
  const { uppercase = true, lowercase = true, numbers = true, symbols = true } = options;
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const syms = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = "";
  if (uppercase) chars += upper;
  if (lowercase) chars += lower;
  if (numbers) chars += nums;
  if (symbols) chars += syms;

  if (!chars) return "";

  const array = new Uint32Array(length);
  crypto.getRandomValues(array);

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length];
  }

  return password;
}

export function estimatePasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
  timeToCrack: string;
} {
  let score = 0;
  const len = password.length;

  if (len >= 8) score += 1;
  if (len >= 12) score += 1;
  if (len >= 16) score += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  const entropy = len * Math.log2(
    (/[a-z]/.test(password) ? 26 : 0) +
    (/[A-Z]/.test(password) ? 26 : 0) +
    (/\d/.test(password) ? 10 : 0) +
    (/[^a-zA-Z0-9]/.test(password) ? 32 : 0)
  );

  const crackTime = entropy < 28 ? "instantly" :
    entropy < 36 ? "seconds" :
    entropy < 60 ? "minutes" :
    entropy < 80 ? "days" :
    entropy < 100 ? "years" :
    "centuries";

  const labels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
  const colors = ["#ef4444", "#f59e0b", "#eab308", "#22c55e", "#22c55e"];

  return {
    score: Math.min(score, 5),
    label: labels[Math.min(score, 4)],
    color: colors[Math.min(score, 4)],
    timeToCrack: crackTime,
  };
}
