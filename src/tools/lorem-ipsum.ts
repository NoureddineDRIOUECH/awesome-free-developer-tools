const loremIpsumWords = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
  "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
  "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
  "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
  "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id",
  "est", "laborum",
];

function randomWord(): string {
  return loremIpsumWords[Math.floor(Math.random() * loremIpsumWords.length)];
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function sentence(): string {
  const len = 5 + Math.floor(Math.random() * 10);
  const words = Array.from({ length: len }, () => randomWord());
  words[0] = capitalize(words[0]);
  return words.join(" ") + ".";
}

export function generateWords(count: number): string {
  return Array.from({ length: count }, () => randomWord()).join(" ");
}

export function generateSentences(count: number): string {
  return Array.from({ length: count }, () => sentence()).join(" ");
}

export function generateParagraphs(count: number): string {
  return Array.from({ length: count }, () => {
    const sentences = Array.from({ length: 3 + Math.floor(Math.random() * 5) }, () => sentence());
    return sentences.join(" ");
  }).join("\n\n");
}
