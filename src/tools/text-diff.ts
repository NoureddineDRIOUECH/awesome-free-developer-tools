export function computeDiff(text1: string, text2: string): { type: "equal" | "add" | "remove"; value: string }[] {
  const lines1 = text1.split("\n");
  const lines2 = text2.split("\n");
  const result: { type: "equal" | "add" | "remove"; value: string }[] = [];

  const lcs: number[][] = [];
  for (let i = 0; i <= lines1.length; i++) {
    lcs[i] = new Array(lines2.length + 1).fill(0);
  }
  for (let i = 1; i <= lines1.length; i++) {
    for (let j = 1; j <= lines2.length; j++) {
      if (lines1[i - 1] === lines2[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  const backtrack = (i: number, j: number): void => {
    if (i === 0 && j === 0) return;
    if (i > 0 && j > 0 && lines1[i - 1] === lines2[j - 1]) {
      backtrack(i - 1, j - 1);
      result.push({ type: "equal", value: lines1[i - 1] });
    } else if (j > 0 && (i === 0 || lcs[i][j - 1] >= lcs[i - 1][j])) {
      backtrack(i, j - 1);
      result.push({ type: "add", value: lines2[j - 1] });
    } else if (i > 0) {
      backtrack(i - 1, j);
      result.push({ type: "remove", value: lines1[i - 1] });
    }
  };

  backtrack(lines1.length, lines2.length);
  return result;
}

export function computeCharDiff(text1: string, text2: string): { type: "equal" | "add" | "remove"; value: string }[] {
  const result: { type: "equal" | "add" | "remove"; value: string }[] = [];
  const maxLen = Math.max(text1.length, text2.length);

  for (let i = 0; i < maxLen; i++) {
    const c1 = text1[i] || "";
    const c2 = text2[i] || "";
    if (c1 === c2) {
      if (result.length > 0 && result[result.length - 1].type === "equal") {
        result[result.length - 1].value += c1;
      } else {
        result.push({ type: "equal", value: c1 });
      }
    } else {
      if (c1) {
        if (result.length > 0 && result[result.length - 1].type === "remove") {
          result[result.length - 1].value += c1;
        } else {
          result.push({ type: "remove", value: c1 });
        }
      }
      if (c2) {
        if (result.length > 0 && result[result.length - 1].type === "add") {
          result[result.length - 1].value += c2;
        } else {
          result.push({ type: "add", value: c2 });
        }
      }
    }
  }

  return result;
}
