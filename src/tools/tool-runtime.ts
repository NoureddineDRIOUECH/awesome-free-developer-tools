declare global {
  interface Window {
    setupTool: (toolId: string) => void;
  }
}

function qs<T extends HTMLElement = HTMLElement>(root: HTMLElement, sel: string): T {
  return root.querySelector(sel) as T;
}

function setupJSONFormatter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">JSON Input</label>
      <textarea id="json-input" class="input-field font-mono text-sm min-h-[200px] resize-y" placeholder='{"key": "value", "array": [1, 2, 3]}' spellcheck="false"></textarea></div>
    <div class="flex flex-wrap gap-2">
      <button id="btn-format" class="btn-primary text-sm">Format</button>
      <button id="btn-minify" class="btn-secondary text-sm">Minify</button>
      <button id="btn-validate" class="btn-secondary text-sm">Validate</button>
      <button id="btn-clear" class="btn-secondary text-sm">Clear</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="json-output" class="input-field font-mono text-sm min-h-[200px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#json-input");
  const output = qs<HTMLPreElement>(root, "#json-output");
  qs(root, "#btn-format").onclick = () => { try { output.textContent = JSON.stringify(JSON.parse(input.value), null, 2); } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; } };
  qs(root, "#btn-minify").onclick = () => { try { output.textContent = JSON.stringify(JSON.parse(input.value)); } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; } };
  qs(root, "#btn-validate").onclick = () => { try { JSON.parse(input.value); output.textContent = "Valid JSON"; } catch (e: unknown) { output.textContent = "Invalid: " + (e as Error).message; } };
  qs(root, "#btn-clear").onclick = () => { input.value = ""; output.textContent = ""; };
}

function setupBase64(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">Input</label>
      <textarea id="b64-input" class="input-field font-mono text-sm min-h-[150px] resize-y" placeholder="Enter text to encode or decode..." spellcheck="false"></textarea></div>
    <div class="flex flex-wrap gap-2">
      <button id="b64-encode" class="btn-primary text-sm">Encode to Base64</button>
      <button id="b64-decode" class="btn-secondary text-sm">Decode from Base64</button>
      <button id="b64-clear" class="btn-secondary text-sm">Clear</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="b64-output" class="input-field font-mono text-sm min-h-[100px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#b64-input");
  const output = qs<HTMLPreElement>(root, "#b64-output");
  qs(root, "#b64-encode").onclick = () => { try { output.textContent = btoa(input.value); } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; } };
  qs(root, "#b64-decode").onclick = () => { try { output.textContent = atob(input.value); } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; } };
  qs(root, "#b64-clear").onclick = () => { input.value = ""; output.textContent = ""; };
}

function setupUrlEncoder(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">Input</label>
      <textarea id="url-input" class="input-field font-mono text-sm min-h-[150px] resize-y" placeholder="https://example.com/?name=hello world&q=test" spellcheck="false"></textarea></div>
    <div class="flex flex-wrap gap-2">
      <button id="url-encode" class="btn-primary text-sm">Encode URI Component</button>
      <button id="url-decode" class="btn-secondary text-sm">Decode URI Component</button>
      <button id="url-parse" class="btn-secondary text-sm">Parse Query String</button>
      <button id="url-clear" class="btn-secondary text-sm">Clear</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="url-output" class="input-field font-mono text-sm min-h-[100px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#url-input");
  const output = qs<HTMLPreElement>(root, "#url-output");
  qs(root, "#url-encode").onclick = () => { try { output.textContent = encodeURIComponent(input.value); } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; } };
  qs(root, "#url-decode").onclick = () => { try { output.textContent = decodeURIComponent(input.value); } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; } };
  qs(root, "#url-parse").onclick = () => {
    try {
      const qs2 = input.value.includes("?") ? input.value.split("?")[1] : input.value;
      const params = new URLSearchParams(qs2);
      const obj: Record<string, string> = {};
      params.forEach((v, k) => { obj[k] = v; });
      output.textContent = JSON.stringify(obj, null, 2);
    } catch (e: unknown) { output.textContent = "Error: " + (e as Error).message; }
  };
  qs(root, "#url-clear").onclick = () => { input.value = ""; output.textContent = ""; };
}

function setupHtmlEntities(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">Input</label>
      <textarea id="html-input" class="input-field font-mono text-sm min-h-[150px] resize-y" placeholder="<script>alert('XSS')</script>" spellcheck="false"></textarea></div>
    <div class="flex flex-wrap gap-2">
      <button id="html-encode" class="btn-primary text-sm">Encode HTML</button>
      <button id="html-decode" class="btn-secondary text-sm">Decode HTML</button>
      <button id="html-clear" class="btn-secondary text-sm">Clear</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="html-output" class="input-field font-mono text-sm min-h-[100px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#html-input");
  const output = qs<HTMLPreElement>(root, "#html-output");
  const e: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
  const r: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#x2F;": "/" };
  qs(root, "#html-encode").onclick = () => { output.textContent = input.value.replace(/[&<>"'\/]/g, c => e[c] || c); };
  qs(root, "#html-decode").onclick = () => { output.textContent = input.value.replace(/&(?:amp|lt|gt|quot|#39|#x2F);/g, m => r[m] || m); };
  qs(root, "#html-clear").onclick = () => { input.value = ""; output.textContent = ""; };
}

function setupPasswordGenerator(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-6">
    <div><label class="text-sm font-medium mb-1.5 block">Length: <span id="pw-length-val">20</span></label>
      <input type="range" id="pw-length" min="4" max="128" value="20" class="w-full accent-primary" /></div>
    <div class="grid grid-cols-2 gap-3">
      <label class="flex items-center gap-2 text-sm"><input type="checkbox" id="pw-upper" checked class="accent-primary" /> A-Z</label>
      <label class="flex items-center gap-2 text-sm"><input type="checkbox" id="pw-lower" checked class="accent-primary" /> a-z</label>
      <label class="flex items-center gap-2 text-sm"><input type="checkbox" id="pw-nums" checked class="accent-primary" /> 0-9</label>
      <label class="flex items-center gap-2 text-sm"><input type="checkbox" id="pw-syms" class="accent-primary" /> Symbols</label></div>
    <button id="pw-generate" class="btn-primary text-sm">Generate</button>
    <div><label class="text-sm font-medium mb-1.5 block">Password</label>
      <pre id="pw-output" class="input-field font-mono text-sm min-h-[50px] whitespace-pre-wrap overflow-auto break-all"></pre></div>
    <div id="pw-strength" class="hidden"><label class="text-sm font-medium mb-1.5 block">Strength</label>
      <div class="h-2 rounded-full bg-surface-container-highest overflow-hidden">
        <div id="pw-strength-bar" class="h-full rounded-full transition-all duration-300" style="width:0%"></div></div>
      <p id="pw-strength-label" class="text-xs text-on-surface-variant mt-1"></p></div></div>`;
  const lenEl = qs<HTMLInputElement>(root, "#pw-length");
  const lenVal = root.querySelector("#pw-length-val")!;
  lenEl.oninput = () => { lenVal.textContent = lenEl.value; };
  qs(root, "#pw-generate").onclick = () => {
    const len = parseInt(lenEl.value);
    let chars = "";
    if (qs<HTMLInputElement>(root, "#pw-upper").checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (qs<HTMLInputElement>(root, "#pw-lower").checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (qs<HTMLInputElement>(root, "#pw-nums").checked) chars += "0123456789";
    if (qs<HTMLInputElement>(root, "#pw-syms").checked) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) { qs(root, "#pw-output").textContent = "Select at least one set"; return; }
    const array = new Uint32Array(len);
    crypto.getRandomValues(array);
    let pw = "";
    for (let i = 0; i < len; i++) pw += chars[array[i] % chars.length];
    qs(root, "#pw-output").textContent = pw;
    const score = (len >= 8 ? 1 : 0) + (len >= 12 ? 1 : 0) + (len >= 16 ? 1 : 0) + (/[a-z]/.test(pw) && /[A-Z]/.test(pw) ? 1 : 0) + (/\d/.test(pw) ? 1 : 0) + (/[^a-zA-Z0-9]/.test(pw) ? 1 : 0);
    qs(root, "#pw-strength").classList.remove("hidden");
    qs<HTMLElement>(root, "#pw-strength-bar").style.width = (score / 5 * 100) + "%";
    qs<HTMLElement>(root, "#pw-strength-bar").style.backgroundColor = ["#ef4444","#f59e0b","#eab308","#22c55e","#22c55e"][Math.min(score, 4)];
    qs(root, "#pw-strength-label").textContent = ["Very Weak","Weak","Fair","Strong","Very Strong"][Math.min(score, 4)];
  };
}

function setupUUIDGenerator(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">Number of UUIDs</label>
      <input type="number" id="uuid-count" value="1" min="1" max="100" class="input-field w-24" /></div>
    <div class="flex flex-wrap gap-2">
      <button id="uuid-generate" class="btn-primary text-sm">Generate</button>
      <button id="uuid-copy" class="btn-secondary text-sm">Copy All</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Generated UUIDs</label>
      <pre id="uuid-output" class="input-field font-mono text-sm min-h-[120px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const output = qs<HTMLPreElement>(root, "#uuid-output");
  const countInput = qs<HTMLInputElement>(root, "#uuid-count");
  qs(root, "#uuid-generate").onclick = () => {
    const count = Math.min(parseInt(countInput.value) || 1, 100);
    const uuids: string[] = [];
    for (let i = 0; i < count; i++) {
      const hex = "0123456789abcdef";
      const chars = new Array(36);
      for (let j = 0; j < 36; j++) {
        if (j === 8 || j === 13 || j === 18 || j === 23) chars[j] = "-";
        else if (j === 14) chars[j] = "4";
        else if (j === 19) chars[j] = hex[(Math.random() * 4) | 8];
        else chars[j] = hex[(Math.random() * 16) | 0];
      }
      uuids.push(chars.join(""));
    }
    output.textContent = uuids.join("\n");
  };
  qs(root, "#uuid-copy").onclick = () => { if (output.textContent) navigator.clipboard.writeText(output.textContent); };
}

function setupColorConverter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div class="flex items-center gap-4">
      <input type="color" id="color-picker" value="#8b5cf6" class="size-16 rounded-lg cursor-pointer border border-surface-container-highest" />
      <div class="flex-1"><label class="text-sm font-medium mb-1.5 block">HEX</label>
        <input type="text" id="color-hex" value="#8b5cf6" class="input-field font-mono" /></div></div>
    <div class="grid sm:grid-cols-2 gap-4">
      <div><label class="text-sm font-medium mb-1.5 block">RGB</label><input type="text" id="color-rgb" class="input-field font-mono" readonly /></div>
      <div><label class="text-sm font-medium mb-1.5 block">HSL</label><input type="text" id="color-hsl" class="input-field font-mono" readonly /></div></div></div>`;
  const hex = qs<HTMLInputElement>(root, "#color-hex");
  const picker = qs<HTMLInputElement>(root, "#color-picker");
  const rgb = qs<HTMLInputElement>(root, "#color-rgb");
  const hsl = qs<HTMLInputElement>(root, "#color-hsl");
  function update(h: string) {
    const c = h.replace("#","");
    if (!/^[0-9A-Fa-f]{6}$/.test(c)) return;
    const n = parseInt(c, 16);
    const r = (n>>16)&255, g = (n>>8)&255, b = n&255;
    rgb.value = "rgb("+r+","+g+","+b+")";
    const rn=r/255, gn=g/255, bn=b/255, mx=Math.max(rn,gn,bn), mn=Math.min(rn,gn,bn);
    let h2=0, s=0, lv=(mx+mn)/2;
    if (mx!==mn) { const d=mx-mn; s=lv>0.5?d/(2-mx-mn):d/(mx+mn); switch(mx){case rn:h2=((gn-bn)/d+(gn<bn?6:0))/6; break; case gn:h2=((bn-rn)/d+2)/6; break; case bn:h2=((rn-gn)/d+4)/6; break;} }
    hsl.value = "hsl("+Math.round(h2*360)+","+Math.round(s*100)+"%,"+Math.round(lv*100)+"%)";
  }
  hex.oninput = () => { if (/^#[0-9a-fA-F]{6}$/.test(hex.value)) { picker.value = hex.value; update(hex.value); } };
  picker.oninput = () => { hex.value = picker.value; update(picker.value); };
  update("#8b5cf6");
}

function setupCaseConverter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">Input</label>
      <textarea id="case-input" class="input-field font-mono text-sm min-h-[120px] resize-y" placeholder="Enter text..." spellcheck="false"></textarea></div>
    <div class="flex flex-wrap gap-2">
      <button class="btn-secondary text-sm" data-fn="camel">camelCase</button>
      <button class="btn-secondary text-sm" data-fn="pascal">PascalCase</button>
      <button class="btn-secondary text-sm" data-fn="snake">snake_case</button>
      <button class="btn-secondary text-sm" data-fn="kebab">kebab-case</button>
      <button class="btn-secondary text-sm" data-fn="upper">UPPER</button>
      <button class="btn-secondary text-sm" data-fn="lower">lower</button>
      <button class="btn-secondary text-sm" data-fn="title">Title</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="case-output" class="input-field font-mono text-sm min-h-[80px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#case-input");
  const output = qs<HTMLPreElement>(root, "#case-output");
  const fns: Record<string, (t: string) => string> = {
    camel: t => t.replace(/[^a-zA-Z0-9]+(.)/g,(_,c)=>c.toUpperCase()).replace(/^[A-Z]/,c=>c.toLowerCase()),
    pascal: t => t.replace(/[^a-zA-Z0-9]+(.)/g,(_,c)=>c.toUpperCase()).replace(/^[a-z]/,c=>c.toUpperCase()),
    snake: t => t.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/[^a-zA-Z0-9]+/g,"_").replace(/^_|_$/g,""),
    kebab: t => t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/[^a-zA-Z0-9]+/g,"-").replace(/^-|-$/g,""),
    upper: t => t.toUpperCase(), lower: t => t.toLowerCase(),
    title: t => t.replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase()),
  };
  root.querySelectorAll("[data-fn]").forEach(b => { (b as HTMLElement).onclick = () => { output.textContent = (fns[(b as HTMLElement).dataset.fn!] || (t=>t))(input.value); }; });
}

function setupLoremIpsum(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div class="flex flex-wrap gap-4">
      <div><label class="text-sm font-medium mb-1.5 block">Amount</label><input type="number" id="lorem-amount" value="3" min="1" max="100" class="input-field w-20" /></div>
      <div><label class="text-sm font-medium mb-1.5 block">Type</label><select id="lorem-type" class="input-field">
        <option value="paragraphs">Paragraphs</option><option value="sentences">Sentences</option><option value="words">Words</option></select></div></div>
    <button id="lorem-generate" class="btn-primary text-sm">Generate</button>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="lorem-output" class="input-field font-mono text-sm min-h-[150px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const output = qs<HTMLPreElement>(root, "#lorem-output");
  const amt = qs<HTMLInputElement>(root, "#lorem-amount");
  const typ = qs<HTMLSelectElement>(root, "#lorem-type");
  const words = ["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua"];
  const rw = () => words[Math.floor(Math.random()*words.length)];
  const sent = () => { const l=5+Math.floor(Math.random()*10); return Array.from({length:l},()=>rw()).join(" ").replace(/^\w/,c=>c.toUpperCase())+"."; };
  qs(root, "#lorem-generate").onclick = () => {
    const n = Math.min(parseInt(amt.value)||1, 100);
    if (typ.value==="words") output.textContent = Array.from({length:n},()=>rw()).join(" ");
    else if (typ.value==="sentences") output.textContent = Array.from({length:n},()=>sent()).join(" ");
    else output.textContent = Array.from({length:n},()=>Array.from({length:3+Math.floor(Math.random()*5)},()=>sent()).join(" ")).join("\n\n");
  };
}

function setupTextDiff(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div class="grid sm:grid-cols-2 gap-4">
      <div><label class="text-sm font-medium mb-1.5 block">Original</label>
        <textarea id="diff-input1" class="input-field font-mono text-sm min-h-[150px] resize-y" placeholder="Original..." spellcheck="false"></textarea></div>
      <div><label class="text-sm font-medium mb-1.5 block">Changed</label>
        <textarea id="diff-input2" class="input-field font-mono text-sm min-h-[150px] resize-y" placeholder="Changed..." spellcheck="false"></textarea></div></div>
    <button id="diff-compare" class="btn-primary text-sm">Compare</button>
    <div><label class="text-sm font-medium mb-1.5 block">Differences</label>
      <pre id="diff-output" class="input-field font-mono text-sm min-h-[150px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const i1 = qs<HTMLTextAreaElement>(root, "#diff-input1");
  const i2 = qs<HTMLTextAreaElement>(root, "#diff-input2");
  const o = qs<HTMLPreElement>(root, "#diff-output");
  qs(root, "#diff-compare").onclick = () => {
    const l1 = i1.value.split("\n"), l2 = i2.value.split("\n"), ml = Math.max(l1.length, l2.length), r: string[] = [];
    for (let i = 0; i < ml; i++) {
      const a = l1[i]??"", b = l2[i]??"";
      if (a===b) r.push("  "+a);
      else if (!b) r.push("- "+a);
      else if (!a) r.push("+ "+b);
      else { r.push("- "+a); r.push("+ "+b); }
    }
    o.innerHTML = r.map(l => l.startsWith("+ ") ? '<span style="color:#22c55e">'+l+'</span>' : l.startsWith("- ") ? '<span style="color:#ef4444">'+l+'</span>' : l).join("\n");
  };
}

function setupMarkdownPreview(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">Markdown</label>
      <textarea id="md-input" class="input-field font-mono text-sm min-h-[200px] resize-y" spellcheck="false"># Hello World\n\nThis is **Markdown** with *italic* and code.\n\n- List item 1\n- List item 2\n\n> A quote</textarea></div>
    <button id="md-preview" class="btn-primary text-sm">Preview</button>
    <div><label class="text-sm font-medium mb-1.5 block">Preview</label>
      <div id="md-output" class="input-field min-h-[200px] p-4 overflow-auto prose prose-invert max-w-none"></div></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#md-input");
  const output = qs<HTMLElement>(root, "#md-output");
  qs(root, "#md-preview").onclick = () => {
    output.innerHTML = input.value
      .replace(/^### (.+)$/gm, "<h3>$1</h3>").replace(/^## (.+)$/gm, "<h2>$1</h2>").replace(/^# (.+)$/gm, "<h1>$1</h1>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
      .replace(/^\- (.+)$/gm, "<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g, m => "<ul>" + (m.match(/<li>.*?<\/li>/g)||[]).join("") + "</ul>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>').replace(/^---$/gm, "<hr />")
      .replace(/\n\n/g, "</p><p>");
  };
}

function setupImageConverter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div class="border-2 border-dashed border-surface-container-highest rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors" id="drop-zone">
      <svg class="size-10 mx-auto text-on-surface-variant/50 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      <p class="text-sm text-on-surface-variant">Drop image or click to browse</p>
      <input type="file" id="image-file" accept="image/*" class="hidden" /></div>
    <div class="flex flex-wrap gap-2 items-center">
      <label class="text-sm font-medium">Convert to:</label>
      <select id="image-format" class="input-field w-auto">
        <option value="image/png">PNG</option><option value="image/jpeg">JPEG</option><option value="image/webp">WebP</option><option value="image/bmp">BMP</option></select>
      <button id="image-convert" class="btn-primary text-sm" disabled>Convert</button></div>
    <div id="image-preview" class="hidden"><label class="text-sm font-medium mb-1.5 block">Original</label>
      <img id="image-preview-img" class="max-w-full rounded-lg border border-surface-container-highest max-h-64" /></div>
    <div id="image-result" class="hidden"><label class="text-sm font-medium mb-1.5 block">Converted</label>
      <img id="image-result-img" class="max-w-full rounded-lg border border-surface-container-highest max-h-64" />
      <a id="image-download" class="btn-primary text-sm mt-2 inline-flex" download="converted">Download</a></div></div>`;
  const fi = qs<HTMLInputElement>(root, "#image-file");
  const dz = qs<HTMLElement>(root, "#drop-zone");
  const fmt = qs<HTMLSelectElement>(root, "#image-format");
  const cv = qs<HTMLButtonElement>(root, "#image-convert");
  const pe = qs<HTMLElement>(root, "#image-preview");
  const pi = qs<HTMLImageElement>(root, "#image-preview-img");
  const re = qs<HTMLElement>(root, "#image-result");
  const ri = qs<HTMLImageElement>(root, "#image-result-img");
  const dl = qs<HTMLAnchorElement>(root, "#image-download");
  let file: File | null = null;
  dz.onclick = () => fi.click();
  dz.ondragover = e => { e.preventDefault(); dz.classList.add("border-primary"); };
  dz.ondragleave = () => dz.classList.remove("border-primary");
  dz.ondrop = e => { e.preventDefault(); dz.classList.remove("border-primary"); if (e.dataTransfer?.files[0]) h(e.dataTransfer.files[0]); };
  fi.onchange = () => { if (fi.files?.[0]) h(fi.files[0]); };
  function h(f: File) { file = f; const r = new FileReader(); r.onload = e2 => { pi.src = e2.target?.result as string; pe.classList.remove("hidden"); cv.disabled = false; }; r.readAsDataURL(f); }
  cv.onclick = () => {
    if (!file) return;
    const c = document.createElement("canvas"), ctx = c.getContext("2d")!;
    const img = new Image();
    img.onload = () => { c.width = img.width; c.height = img.height; ctx.drawImage(img,0,0); c.toBlob(b => { if(!b) return; const u = URL.createObjectURL(b); ri.src = u; re.classList.remove("hidden"); dl.href = u; const e2 = fmt.value.split("/")[1]; dl.download = "converted."+(e2==="jpeg"?"jpg":e2); }, fmt.value); };
    img.src = pi.src;
  };
}

function setupYamlConverter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">YAML</label>
      <textarea id="yaml-input" class="input-field font-mono text-sm min-h-[200px] resize-y" placeholder="name: John&#10;age: 30" spellcheck="false"></textarea></div>
    <button id="yaml-convert" class="btn-primary text-sm">YAML to JSON</button>
    <div><label class="text-sm font-medium mb-1.5 block">JSON</label>
      <pre id="yaml-output" class="input-field font-mono text-sm min-h-[150px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#yaml-input");
  const output = qs<HTMLPreElement>(root, "#yaml-output");
  qs(root, "#yaml-convert").onclick = () => {
    try {
      const obj: Record<string, unknown> = {};
      input.value.split("\n").forEach(line => {
        const m = line.match(/^(\s*)([\w-]+)\s*:\s*(.*)$/);
        if (m && m[1].length === 0) {
          const v = m[3].trim();
          if (v==="true") obj[m[2]]=true; else if (v==="false") obj[m[2]]=false;
          else if (/^\d+$/.test(v)) obj[m[2]]=parseInt(v);
          else if (/^\d+\.\d+$/.test(v)) obj[m[2]]=parseFloat(v);
          else if (v.startsWith("[")) try { obj[m[2]]=JSON.parse(v.replace(/'/g,'"')); } catch {}
          else obj[m[2]]=v;
        }
      });
      output.textContent = JSON.stringify(obj, null, 2);
    } catch (e: unknown) { output.textContent = "Error: "+(e as Error).message; }
  };
}

function setupSQLFormatter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">SQL</label>
      <textarea id="sql-input" class="input-field font-mono text-sm min-h-[200px] resize-y" placeholder="SELECT * FROM users WHERE id = 1" spellcheck="false"></textarea></div>
    <div class="flex gap-2"><button id="sql-format" class="btn-primary text-sm">Format</button><button id="sql-clear" class="btn-secondary text-sm">Clear</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="sql-output" class="input-field font-mono text-sm min-h-[200px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#sql-input");
  const output = qs<HTMLPreElement>(root, "#sql-output");
  qs(root, "#sql-format").onclick = () => {
    const kw = ["SELECT","FROM","WHERE","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","OFFSET","INSERT INTO","VALUES","UPDATE","SET","DELETE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AS","DISTINCT","COUNT","SUM","AVG","MIN","MAX","IN","BETWEEN","LIKE","IS NULL","IS NOT NULL","NOT","UNION","ALL"];
    let s = input.value.replace(/\s+/g," ").trim();
    kw.forEach(k => { s = s.replace(new RegExp(k.replace(/ /g,"\\s+"),"gi"),"\n"+k+"\n"); });
    output.textContent = s.replace(/\n\s*\n/g,"\n").replace(/,\s*/g,",\n  ").trim();
  };
  qs(root, "#sql-clear").onclick = () => { input.value=""; output.textContent=""; };
}

function setupXMLFormatter(root: HTMLElement): void {
  root.innerHTML = `<div class="grid gap-4">
    <div><label class="text-sm font-medium mb-1.5 block">XML</label>
      <textarea id="xml-input" class="input-field font-mono text-sm min-h-[200px] resize-y" placeholder="<root><item>value</item></root>" spellcheck="false"></textarea></div>
    <div class="flex gap-2"><button id="xml-format" class="btn-primary text-sm">Format</button><button id="xml-clear" class="btn-secondary text-sm">Clear</button></div>
    <div><label class="text-sm font-medium mb-1.5 block">Output</label>
      <pre id="xml-output" class="input-field font-mono text-sm min-h-[200px] whitespace-pre-wrap overflow-auto"></pre></div></div>`;
  const input = qs<HTMLTextAreaElement>(root, "#xml-input");
  const output = qs<HTMLPreElement>(root, "#xml-output");
  qs(root, "#xml-format").onclick = () => {
    try {
      const xml = new DOMParser().parseFromString(input.value, "text/xml");
      let f = new XMLSerializer().serializeToString(xml);
      let ind = 0;
      output.textContent = f.replace(/(<\/?[^>]+>)/g, m => {
        if (m.startsWith("</")) ind = Math.max(0, ind-1);
        const r = "  ".repeat(ind)+m;
        if (m.startsWith("<") && !m.startsWith("</") && !m.endsWith("/>")) ind++;
        return r;
      });
    } catch (e: unknown) { output.textContent = "Error: "+(e as Error).message; }
  };
  qs(root, "#xml-clear").onclick = () => { input.value=""; output.textContent=""; };
}

const toolSetups: Record<string, (root: HTMLElement) => void> = {
  "json-formatter": setupJSONFormatter,
  "base64-encoder": setupBase64,
  "url-encoder": setupUrlEncoder,
  "html-entities": setupHtmlEntities,
  "password-generator": setupPasswordGenerator,
  "uuid-generator": setupUUIDGenerator,
  "color-converter": setupColorConverter,
  "case-converter": setupCaseConverter,
  "lorem-ipsum": setupLoremIpsum,
  "text-diff": setupTextDiff,
  "markdown-preview": setupMarkdownPreview,
  "image-converter": setupImageConverter,
  "yaml-converter": setupYamlConverter,
  "sql-formatter": setupSQLFormatter,
  "xml-formatter": setupXMLFormatter,
};

window.setupTool = (toolId: string) => {
  const root = document.getElementById("tool-ui");
  if (!root) return;
  const setup = toolSetups[toolId];
  if (setup) setup(root);
};
