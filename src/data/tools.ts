export type ToolCategory = "formatters" | "encoders" | "generators" | "converters" | "text" | "images" | "security";

export interface CodeSnippet {
  lang: "javascript" | "python" | "go" | "bash";
  label: string;
  code: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ToolData {
  id: string;
  title: string;
  description: string;
  metaDescription: string;
  category: ToolCategory;
  keywords: string[];
  relatedTools: string[];
  codeSnippets: CodeSnippet[];
  faqItems: FaqItem[];
  examplePayload?: string;
  content?: string;
}

export const toolsData: ToolData[] = [
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate, and beautify your JSON data with syntax highlighting and error detection.",
    metaDescription: "Free online JSON formatter and validator. Beautify, minify, and validate JSON data with syntax highlighting and detailed error messages. No server uploads, 100% client-side.",
    category: "formatters",
    keywords: ["json formatter", "json validator", "json beautifier", "format json", "json pretty print"],
    relatedTools: ["base64-encoder", "yaml-converter", "xml-formatter"],
    examplePayload: '{"name":"WebUtil","type":"tool","features":["formatter","validator","minifier"],"version":1.0}',
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "const formatted = JSON.stringify(data, null, 2);\nconst minified = JSON.stringify(data);\nfunction validateJSON(str) {\n  try { JSON.parse(str); return true; }\n  catch (e) { return false; }\n}" },
      { lang: "python", label: "Python", code: "import json\nformatted = json.dumps(data, indent=2)\nminified = json.dumps(data)\ndef validate_json(s):\n  try:\n    json.loads(s)\n    return True\n  except json.JSONDecodeError:\n    return False" },
      { lang: "go", label: "Go", code: `import "encoding/json"\n\nvar buf bytes.Buffer\njson.Indent(&buf, data, "", "  ")\nfmt.Println(buf.String())\n\nfunc isValidJSON(s string) bool {\n  var js json.RawMessage\n  return json.Unmarshal([]byte(s), &js) == nil\n}` },
      { lang: "bash", label: "Bash", code: "jq . input.json\njq -c . input.json\njq empty input.json && echo \"Valid\" || echo \"Invalid\"" },
    ],
    content: "JSON (JavaScript Object Notation) is the most widely used data interchange format for web APIs, configuration files, and data storage. A JSON formatter takes raw, minified JSON and reformats it with proper indentation, line breaks, and color syntax highlighting — making it readable for developers debugging API responses or editing configuration files. Beyond beautification, formatting also validates the JSON structure and pinpoints syntax errors like missing commas, trailing commas, or unquoted keys. Modern development workflows rely on JSON formatting for code reviews, logging analysis, API development, and data migration tasks. Unlike editor plugins that require setup, an online JSON formatter works instantly in any browser with zero configuration.",
    faqItems: [
      { question: "What is a JSON formatter?", answer: "A JSON formatter takes raw JSON and reformats it with proper indentation for readability. Also called JSON beautification or pretty-printing." },
      { question: "Is this tool free?", answer: "Yes, completely free. No sign-up, no limits, no server uploads — everything runs in your browser." },
      { question: "What's the difference between format and minify?", answer: "Formatting adds indentation for readability. Minifying removes whitespace for smaller file sizes." },
      { question: "Is my JSON data safe?", answer: "Yes. All processing happens client-side. Your data never leaves your device." },
      { question: "Can I use this offline?", answer: "Yes. Once the page loads, it works fully offline since everything runs in-browser." },
    ],
  },
  {
    id: "base64-encoder", title: "Base64 Encoder / Decoder",
    description: "Encode or decode text and files to and from Base64 format instantly.",
    metaDescription: "Free online Base64 encoder and decoder. Convert text and files to/from Base64 encoding. 100% client-side.",
    category: "encoders", keywords: ["base64 encoder", "base64 decoder", "base64 encode", "base64 decode"],
    relatedTools: ["json-formatter", "url-encoder", "html-entities"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "const encoded = btoa('hello world');\nconst decoded = atob(encoded);" },
      { lang: "python", label: "Python", code: "import base64\nencoded = base64.b64encode(b'hello').decode()\ndecoded = base64.b64decode(encoded)" },
      { lang: "go", label: "Go", code: `import "encoding/base64"\n\nencoded := base64.StdEncoding.EncodeToString([]byte("hello"))\ndecoded, _ := base64.StdEncoding.DecodeString(encoded)` },
      { lang: "bash", label: "Bash", code: "echo -n 'hello' | base64\necho 'aGVsbG8=' | base64 -d" },
    ],
    content: "Base64 encoding converts binary data into a text format using 64 printable ASCII characters (A-Z, a-z, 0-9, +, /). It is fundamental to web development because many systems — JSON, HTTP headers, URLs, and email — are designed to carry text, not raw binary. Developers use Base64 to embed images directly in HTML/CSS as data URIs, encode binary payloads in JSON API requests, transmit file attachments in email (MIME), and store cryptographic keys in configuration files. A critical distinction: Base64 is encoding, not encryption — it makes data text-safe but provides zero confidentiality. Always use encryption (AES, RSA) for sensitive data, not Base64.",
    faqItems: [
      { question: "What is Base64?", answer: "Base64 is an encoding scheme that converts binary data to a text format using 64 printable ASCII characters. It's commonly used for transmitting data over text-based protocols like HTTP." },
      { question: "Is Base64 encryption?", answer: "No. Base64 is encoding, not encryption. Anyone can decode Base64. Never use it to protect sensitive data." },
    ],
  },
  {
    id: "url-encoder", title: "URL Encoder / Decoder",
    description: "Encode or decode URLs and query parameters for proper web transmission.",
    metaDescription: "Free online URL encoder and decoder. Encode or decode URLs and query parameters.",
    category: "encoders", keywords: ["url encoder", "url decoder", "url encode", "url decode", "percent encoding"],
    relatedTools: ["base64-encoder", "html-entities", "json-formatter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "const encoded = encodeURIComponent('hello world');\nconst decoded = decodeURIComponent(encoded);" },
      { lang: "python", label: "Python", code: "from urllib.parse import quote, unquote\nencoded = quote('hello world')\ndecoded = unquote(encoded)" },
      { lang: "go", label: "Go", code: `import "net/url"\n\nencoded := url.QueryEscape("hello world")\ndecoded, _ := url.QueryUnescape(encoded)` },
      { lang: "bash", label: "Bash", code: 'echo "hello world" | xxd -plain | sed "s/\\(..\\)/%\\1/g"' },
    ],
    content: "URL encoding, also called percent-encoding, converts characters that are not permitted in URLs into a safe %XX hex format. Spaces become %20, ampersands become %26, hashes become %23, and non-ASCII characters are encoded as multi-byte sequences. This encoding is essential because URLs have strict character rules — certain characters like space, &, and # have special meanings in URL syntax and will break links or cause incorrect parsing if left unencoded. Modern web frameworks handle URL encoding automatically in most cases, but developers regularly need to encode/decode manually when working with query parameters, building API requests, debugging HTTP traffic, or passing complex values in URL segments.",
    faqItems: [
      { question: "Why URL-encode?", answer: "URL encoding converts characters that are not allowed in URLs (like spaces, &, #) into %-encoded format so they transmit safely." },
      { question: "What characters need encoding?", answer: "Spaces become %20, & becomes %26, # becomes %23, and other non-ASCII characters are encoded as %XX in hex." },
    ],
  },
  {
    id: "html-entities", title: "HTML Entities Encoder",
    description: "Convert special characters to HTML entities and vice versa for safe web rendering.",
    metaDescription: "Free online HTML entities encoder and decoder. Escape HTML special characters.",
    category: "encoders", keywords: ["html entities", "html encoder", "html escape", "html unescape"],
    relatedTools: ["url-encoder", "base64-encoder", "markdown-preview"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "const escaped = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');" },
      { lang: "python", label: "Python", code: "import html\nescaped = html.escape('<script>alert(1)</script>')" },
      { lang: "go", label: "Go", code: `import "html"\n\nescaped := html.EscapeString("<script>alert(1)</script>")` },
      { lang: "bash", label: "Bash", code: "echo '<div>' | sed 's/</\\&lt;/g; s/>/\\&gt;/g'" },
    ],
    content: "HTML entities are special character codes that represent reserved HTML characters (like <, >, &, \") in a way that browsers render as text rather than interpreting as markup. For example, <code>&lt;</code> renders < and <code>&amp;</code> renders &. HTML entity encoding is a critical security practice — failing to encode user-generated content before inserting it into HTML is the primary cause of cross-site scripting (XSS) vulnerabilities. Beyond security, encoding is also necessary when displaying code snippets, mathematical symbols, special punctuation, and international characters that might not be supported by the document encoding. Most modern template engines auto-escape HTML, but developers still need to encode manually when building HTML strings in JavaScript or working with raw templates.",
    faqItems: [
      { question: "What are HTML entities?", answer: "HTML entities are special codes (like &amp; for &, &lt; for <) that display reserved HTML characters safely in rendered pages." },
    ],
  },
  {
    id: "password-generator", title: "Password Generator",
    description: "Generate strong, secure passwords with customizable length and character sets.",
    metaDescription: "Free online secure password generator. Create strong random passwords with customizable options. 100% client-side.",
    category: "generators", keywords: ["password generator", "secure password", "random password", "strong password"],
    relatedTools: ["uuid-generator", "base64-encoder", "lorem-ipsum"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function generatePassword(len) {\n  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';\n  return Array.from(crypto.getRandomValues(new Uint32Array(len)))\n    .map(v => chars[v % chars.length]).join('');\n}" },
      { lang: "python", label: "Python", code: "import secrets\nimport string\nchars = string.ascii_letters + string.digits + '!@#$%^&*()'\npassword = ''.join(secrets.choice(chars) for _ in range(16))" },
      { lang: "go", label: "Go", code: `import "crypto/rand"\n\nfunc genPassword(n int) string {\n  chars := []byte("ABC...xyz0129!@#$")\n  b := make([]byte, n)\n  rand.Read(b)\n  for i := range b { b[i] = chars[b[i] % byte(len(chars))] }\n  return string(b)\n}` },
      { lang: "bash", label: "Bash", code: "openssl rand -base64 12\n< /dev/urandom tr -dc 'A-Za-z0-9!@#$' | head -c16" },
    ],
    content: "A strong password generator creates random, unpredictable passwords using cryptographically secure randomness — the same technology that powers encryption key generation. The best passwords are long (16+ characters), include a mix of uppercase, lowercase, digits, and symbols, and contain no patterns derived from words, dates, or personal information. Password managers are the recommended way to handle strong passwords: they generate, store, and auto-fill unique passwords for every site so you only need to remember one master password. This password generator runs entirely in your browser using the Web Crypto API — no passwords are ever sent to a server, logged, or stored. Each password is generated fresh on your device and disappears when you close the page.",
    faqItems: [
      { question: "How secure are these passwords?", answer: "Passwords are generated using your browser's cryptographically secure random API — the same standard used for encryption keys." },
      { question: "Are passwords saved or stored?", answer: "No. Passwords are generated client-side and never sent to any server. Once you leave the page they're gone." },
    ],
  },
  {
    id: "uuid-generator", title: "UUID Generator",
    description: "Generate UUID v4 identifiers for databases, APIs, and distributed systems.",
    metaDescription: "Free online UUID generator. Generate random UUID v4 identifiers instantly. 100% client-side.",
    category: "generators", keywords: ["uuid generator", "uuid v4", "generate uuid", "guid generator"],
    relatedTools: ["password-generator", "json-formatter", "base64-encoder"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "crypto.randomUUID();\n// or: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (crypto.getRandomValues(new Uint8Array(1))[0] & 15 | (c === 'x' ? 0 : 8)).toString(16))" },
      { lang: "python", label: "Python", code: "import uuid\nuuid.uuid4()" },
      { lang: "go", label: "Go", code: `import "github.com/google/uuid"\n\nid := uuid.New().String()` },
      { lang: "bash", label: "Bash", code: "uuidgen\ncat /proc/sys/kernel/random/uuid" },
    ],
    content: "A UUID (Universally Unique Identifier) is a 128-bit identifier standardized by RFC 4122. UUID v4 generates identifiers using random numbers — each UUID is independent and unique without requiring a central registration authority. The collision probability is so low (one in 2^122) that systems can generate UUIDs independently without coordination. UUIDs are the standard choice for database primary keys in distributed systems, API resource identifiers in RESTful services, event IDs in logging systems, and correlation IDs in microservice architectures. Unlike auto-incrementing integers, UUIDs are unique across tables, databases, and even organizations — making them ideal for merge replication and distributed databases like CockroachDB and Cassandra.",
    faqItems: [
      { question: "What is UUID v4?", answer: "UUID v4 generates a 128-bit universally unique identifier using random numbers. The chance of collision is effectively zero." },
      { question: "Where are UUIDs used?", answer: "UUIDs are used as database primary keys, API resource identifiers, session tokens, and anywhere unique IDs are needed across distributed systems." },
    ],
  },
  {
    id: "lorem-ipsum", title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your designs, mockups, and layouts.",
    metaDescription: "Free Lorem Ipsum generator. Create placeholder text for designs, mockups, and wireframes.",
    category: "generators", keywords: ["lorem ipsum", "placeholder text", "dummy text", "text generator"],
    relatedTools: ["password-generator", "uuid-generator", "case-converter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "const lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';\nfunction getLorem(n) { return Array(n).fill(lorem).join(' '); }" },
      { lang: "python", label: "Python", code: "from lorem_text import lorem\nlorem.paragraph()\nlorem.words(10)" },
      { lang: "bash", label: "Bash", code: "cat /usr/share/dict/words | shuf -n 50 | paste -sd ' '\n# or install 'lorem' package" },
    ],
    content: "Lorem Ipsum is placeholder text derived from sections 1.10.32 and 1.10.33 of Cicero's De Finibus Bonorum et Malorum (The Extremes of Good and Evil), written in 45 BC. It has been the standard dummy text in the printing and typesetting industry since the 1500s, and it remains the default placeholder text for web design, graphic design, and publishing today. Designers use Lorem Ipsum because it closely resembles natural written language in word distribution and letter frequency — unlike repetitive 'content here' text, it provides a realistic visual preview of how final content will look. This generator creates Lorem Ipsum text in your browser with customizable paragraph, sentence, and word counts suitable for any layout or mockup.",
    faqItems: [
      { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is dummy text derived from Latin literature, used since the 1500s as placeholder text in design mockups." },
      { question: "How much text can I generate?", answer: "There's no limit. The text is generated in your browser — you can create as many paragraphs, words, or bytes as you need." },
    ],
  },
  {
    id: "yaml-converter", title: "YAML to JSON Converter",
    description: "Convert YAML data to JSON format and vice versa with live preview.",
    metaDescription: "Free online YAML to JSON converter. Convert YAML to JSON and JSON to YAML with live preview.",
    category: "converters", keywords: ["yaml to json", "json to yaml", "yaml converter", "yaml formatter"],
    relatedTools: ["json-formatter", "xml-formatter", "sql-formatter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "import { parse, stringify } from 'yaml';\nconst json = parse(yamlString);\nconst yaml = stringify(jsonObj);" },
      { lang: "python", label: "Python", code: "import yaml\nimport json\ndata = yaml.safe_load(yaml_string)\njson_str = json.dumps(data, indent=2)" },
      { lang: "go", label: "Go", code: `import "gopkg.in/yaml.v3"\n\nvar data map[string]any\nyaml.Unmarshal([]byte(yamlStr), &data)\njsonData, _ := json.MarshalIndent(data, "", "  ")` },
      { lang: "bash", label: "Bash", code: "yq -o=json input.yaml\njq -c . | yq -P > output.yaml" },
    ],
    content: "YAML (YAML Ain't Markup Language) is a human-readable data serialization format commonly used for configuration files — from Kubernetes manifests to GitHub Actions workflows to Docker Compose files. JSON (JavaScript Object Notation) is the standard format for web APIs and data exchange. Converting between YAML and JSON bridges two worlds: developers use YAML for readable configuration in their repos, while APIs and web services almost exclusively use JSON. The conversion preserves all data but has some limitations — YAML features like anchors (&), aliases (*), and comments are not representable in JSON and may be lost during conversion. Running entirely in your browser, this converter processes all data locally with no server uploads.",
    faqItems: [
      { question: "Why convert YAML to JSON?", answer: "JSON is better for APIs and web transmission. YAML is more human-readable for config files. Converting between them gives you the best of both." },
      { question: "Is either format lossy?", answer: "Most YAML features (like anchors and aliases) are not representable in JSON, so some data may be expanded during conversion." },
    ],
  },
  {
    id: "color-converter", title: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and named CSS colors with live preview.",
    metaDescription: "Free online color converter. Convert between HEX, RGB, HSL, and named CSS colors.",
    category: "converters", keywords: ["color converter", "hex to rgb", "rgb to hex", "hex color converter"],
    relatedTools: ["image-converter", "json-formatter", "case-converter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function hexToRgb(hex) {\n  const r = parseInt(hex.slice(1,3), 16);\n  const g = parseInt(hex.slice(3,5), 16);\n  const b = parseInt(hex.slice(5,7), 16);\n  return { r, g, b };\n}" },
      { lang: "python", label: "Python", code: "def hex_to_rgb(hex):\n  h = hex.lstrip('#')\n  return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))" },
      { lang: "go", label: "Go", code: `import "fmt"\n\nfunc hexToRGB(hex string) (r, g, b int) {\n  fmt.Sscanf(hex, "#%02x%02x%02x", &r, &g, &b)\n  return\n}` },
    ],
    content: "Color conversion between HEX, RGB, HSL, and named CSS colors is a frequent task in web design and frontend development. HEX codes (like #ff0000) are the most common format in CSS, but they are not intuitive for programmatic color manipulation. RGB (0-255 per channel) maps naturally to how screens display color and is useful for opacity (rgba). HSL (hue-saturation-lightness) is the most human-readable format — you can adjust a color by rotating the hue (0-360°) while keeping saturation and lightness constant. Designers use color converters when extracting colors from design tools (which often output HEX), translating brand guidelines, creating color palettes programmatically, or ensuring accessibility compliance with proper contrast ratios. This converter provides live preview so you see the color instantly.",
    faqItems: [
      { question: "What's the difference between HEX, RGB, and HSL?", answer: "HEX is a 6-digit hex code (#ff0000). RGB uses 0-255 values per channel. HSL uses hue (0-360°), saturation (%), and lightness (%)." },
    ],
  },
  {
    id: "case-converter", title: "Case Converter",
    description: "Convert text between camelCase, snake_case, kebab-case, and more.",
    metaDescription: "Free online case converter. Convert text between camelCase, snake_case, kebab-case, and more.",
    category: "text", keywords: ["case converter", "camel case", "snake case", "kebab case", "text converter"],
    relatedTools: ["json-formatter", "markdown-preview", "text-diff"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function toCamelCase(str) {\n  return str.replace(/[-_\\s]+(.)/g, (_, c) => c.toUpperCase());\n}\nfunction toSnakeCase(str) {\n  return str.replace(/[A-Z]/g, l => '_' + l.toLowerCase()).replace(/^_/, '');\n}" },
      { lang: "python", label: "Python", code: "import re\ndef to_snake(s):\n  return re.sub(r'([A-Z])', r'_\\1', s).lower().lstrip('_')" },
    ],
    content: "Case conversion is a routine but essential task for developers working across multiple programming languages and frameworks. Each language community has established naming conventions: JavaScript and TypeScript use camelCase for variables and functions, PascalCase for classes and constructors; Python uses snake_case for everything except classes; CSS properties use kebab-case; environment variables and constants use UPPER_CASE (screaming snake case). Converting between these conventions manually is error-prone, especially when migrating code between languages or renaming API fields. A case converter eliminates these errors by instantly transforming text between all common formats, letting developers focus on logic rather than formatting details. All conversion happens client-side with no data uploads.",
    faqItems: [
      { question: "What is camelCase?", answer: "camelCase capitalizes each word after the first (e.g., getUserName). PascalCase capitalizes all words (e.g., GetUserName). snake_case uses underscores between lowercase words." },
      { question: "Which naming convention should I use?", answer: "JavaScript/TypeScript uses camelCase for variables. Python uses snake_case. CSS uses kebab-case. Use PascalCase for classes and constructors." },
    ],
  },
  {
    id: "markdown-preview", title: "Markdown Preview",
    description: "Write and preview Markdown in real-time with syntax highlighting and HTML output.",
    metaDescription: "Free online Markdown previewer and editor. Write Markdown with live HTML preview.",
    category: "text", keywords: ["markdown preview", "markdown editor", "markdown to html", "md editor"],
    relatedTools: ["html-entities", "case-converter", "text-diff"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "import { marked } from 'marked';\nconst html = marked.parse(markdownString);\ndocument.getElementById('preview').innerHTML = html;" },
      { lang: "python", label: "Python", code: "import markdown\nhtml = markdown.markdown(text)" },
      { lang: "go", label: "Go", code: `import "github.com/yuin/goldmark"\n\nvar buf bytes.Buffer\ngoldmark.Convert([]byte(md), &buf)` },
      { lang: "bash", label: "Bash", code: "echo '# Hello' | pandoc -f markdown -t html" },
    ],
    content: "Markdown is the de facto standard for documentation across the developer ecosystem. GitHub README files, technical documentation, API guides, blog posts, and internal wikis all rely on Markdown for its simplicity and readability. Unlike WYSIWYG editors that hide formatting complexity, Markdown uses plain text conventions that are readable even in raw form — making it version-control friendly and universally compatible. A Markdown previewer with live HTML rendering is essential for anyone writing documentation: it shows exactly how your content will appear when rendered on GitHub, npm, or any other Markdown-consuming platform. This tool renders GitHub-flavored Markdown in real-time as you type, supporting tables, task lists, fenced code blocks with syntax highlighting, and strikethrough.",
    faqItems: [
      { question: "What is Markdown?", answer: "Markdown is a lightweight markup language that uses plain text formatting to create structured documents that can be converted to HTML." },
      { question: "What syntax is supported?", answer: "Headings (# ), bold (**), italic (*), links, images, code blocks, lists, tables, and blockquotes are all supported." },
    ],
  },
  {
    id: "text-diff", title: "Text Diff Checker",
    description: "Compare two texts side by side and highlight the differences between them.",
    metaDescription: "Free online text diff checker. Compare two texts side-by-side and highlight changes.",
    category: "text", keywords: ["text diff", "diff checker", "compare text", "text comparison"],
    relatedTools: ["json-formatter", "markdown-preview", "case-converter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "import { diffChars } from 'diff';\nconst changes = diffChars(oldText, newText);\nchanges.forEach(part => {\n  const color = part.added ? 'green' : part.removed ? 'red' : 'grey';\n  console.log(`%c${part.value}`, `color: ${color}`);\n});" },
      { lang: "python", label: "Python", code: "import difflib\ndiff = difflib.unified_diff(old.splitlines(), new.splitlines(), lineterm='')\nprint('\\n'.join(diff))" },
      { lang: "bash", label: "Bash", code: "diff -u file1.txt file2.txt\n# or with colordiff:\ncolordiff -u file1.txt file2.txt" },
    ],
    content: "A text diff tool compares two versions of text and highlights what changed — additions, deletions, and modifications. This is one of the most fundamental operations in software development: code reviews operate on diffs, version control systems (Git) store changes as diffs, and debugging often involves comparing expected vs actual output. A dedicated diff checker provides a focused, distraction-free comparison view that is often more convenient than command-line diff tools or IDE plugins. Developers use diff checkers to compare configuration files across environments, validate refactored code produces identical output, review translation changes, and debug data transformation pipelines. This tool performs line-by-line and character-by-character comparison entirely in your browser.",
    faqItems: [
      { question: "How does diff work?", answer: "The diff algorithm finds the longest common subsequence between two texts and highlights additions (green), deletions (red), and unchanged sections." },
    ],
  },
  {
    id: "image-converter", title: "Image Converter",
    description: "Convert images between formats using your browser's Canvas API. No uploads needed.",
    metaDescription: "Free online image converter. Convert images between PNG, JPEG, WebP, and GIF formats using your browser. 100% client-side.",
    category: "images", keywords: ["image converter", "convert image", "png to jpg", "jpg to png"],
    relatedTools: ["color-converter", "base64-encoder", "json-formatter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function convertImage(file, format) {\n  const img = new Image();\n  const canvas = document.createElement('canvas');\n  img.onload = () => {\n    canvas.width = img.width;\n    canvas.height = img.height;\n    canvas.getContext('2d').drawImage(img, 0, 0);\n    canvas.toBlob(blob => download(blob), `image/${format}`);\n  };\n  img.src = URL.createObjectURL(file);\n}" },
      { lang: "python", label: "Python", code: "from PIL import Image\nimg = Image.open('input.png')\nimg.save('output.jpg', 'JPEG')" },
      { lang: "bash", label: "Bash", code: "convert input.png output.jpg\n# or: magick input.png output.webp" },
    ],
    content: "Image format conversion is a common task in web development and design. PNG offers lossless compression with transparency support, ideal for screenshots, logos, and graphics with sharp edges. JPEG uses lossy compression that can achieve 50-80% size reduction but introduces artifacts, best for photographs and complex images. WebP is Google's modern format that provides 25-35% smaller files than JPEG at equivalent quality, with support for both lossy and lossless compression plus transparency. GIF supports animation but is limited to 256 colors and produces large file sizes. Unlike server-based converters that upload your files to remote servers, this tool uses your browser's Canvas API to process images locally — your images never leave your device.",
    faqItems: [
      { question: "What formats are supported?", answer: "PNG (lossless), JPEG (lossy), WebP (modern, smaller), and GIF (animated) are supported." },
      { question: "Are my images uploaded to a server?", answer: "No. All image processing happens in your browser using the Canvas API. Your files never leave your device." },
    ],
  },
  {
    id: "sql-formatter", title: "SQL Formatter",
    description: "Format and beautify SQL queries for better readability and maintainability.",
    metaDescription: "Free online SQL formatter and beautifier. Format SQL queries with customizable indentation.",
    category: "formatters", keywords: ["sql formatter", "sql beautifier", "format sql", "sql pretty print"],
    relatedTools: ["json-formatter", "yaml-converter", "xml-formatter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "// Using sql-formatter\nimport { format } from 'sql-formatter';\nconst formatted = format('SELECT * FROM users WHERE id = 1', { language: 'sql' });" },
      { lang: "python", label: "Python", code: "import sqlparse\nformatted = sqlparse.format(sql, reindent=True, keyword_case='upper')" },
      { lang: "bash", label: "Bash", code: "echo 'SELECT * FROM users;' | sqlformat --reindent --keywords upper -" },
    ],
    content: "SQL formatting transforms raw, hard-to-read SQL queries into properly indented, structured statements that are easier to review, debug, and maintain. A well-formatted SQL query capitalizes keywords (SELECT, FROM, WHERE, JOIN), aligns columns and conditions vertically, and breaks long statements into logical lines. This is essential for code reviews — unformatted SQL is difficult to review for correctness and security issues. Database administrators and backend developers frequently need to format SQL when sharing queries, documenting database logic, or converting inline query strings into maintainable code. This tool supports standard SQL plus MySQL, PostgreSQL, and SQLite dialects, running entirely in your browser with no server uploads.",
    faqItems: [
      { question: "What SQL dialects are supported?", answer: "Standard SQL, MySQL, PostgreSQL, and SQLite are all supported by the formatter." },
    ],
  },
  {
    id: "xml-formatter", title: "XML Formatter",
    description: "Format, validate, and beautify XML data with syntax highlighting.",
    metaDescription: "Free online XML formatter and validator. Beautify, minify, and validate XML data. 100% client-side.",
    category: "formatters", keywords: ["xml formatter", "xml validator", "xml beautifier", "format xml"],
    relatedTools: ["json-formatter", "yaml-converter", "sql-formatter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function formatXml(xml) {\n  const xsltDoc = new DOMParser().parseFromString(\n    '<xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">' +\n    '<xsl:output indent=\"yes\" method=\"xml\"/>' +\n    '<xsl:template match=\"/\"><xsl:copy-of select=\".\"/></xsl:template></xsl:stylesheet>', 'text/xml');\n  const result = new XSLTProcessor();\n  result.importStylesheet(xsltDoc);\n  return new XMLSerializer().serializeToString(result.transformToDocument(xmlDoc));\n}" },
      { lang: "python", label: "Python", code: "import xml.dom.minidom\nformatted = xml.dom.minidom.parseString(xml_str).toprettyxml(indent='  ')" },
      { lang: "bash", label: "Bash", code: "xmllint --format input.xml\n# or:\nxq . input.xml | jq ." },
    ],
    content: "XML (eXtensible Markup Language) is a markup language designed for storing and transporting data, widely used in web services (SOAP, RSS/Atom feeds), configuration files (Android manifests, Maven POM, .NET config), and document formats (SVG, Office Open XML). XML formatting — also called XML beautification or pretty-printing — adds proper indentation, line breaks, and structure to make raw XML readable. Beyond aesthetics, the formatting process also validates the XML structure and identifies well-formedness errors such as missing closing tags, incorrect nesting, or invalid characters. Developers frequently use XML formatters when debugging SOAP API responses, editing configuration files, transforming XML with XSLT, or reviewing RSS feed output.",
    faqItems: [
      { question: "What is XML formatting?", answer: "XML formatting adds proper indentation and line breaks to make XML data human-readable. It also helps identify structural issues in your XML." },
    ],
  },
  {
    id: "jwt-decoder", title: "JWT Decoder",
    description: "Decode and inspect JWT tokens — view header, payload, and signature information instantly.",
    metaDescription: "Free online JWT decoder. Decode JSON Web Tokens and inspect header, payload, and signature. 100% client-side.",
    category: "security", keywords: ["jwt decoder", "jwt token decoder", "decode jwt", "jwt inspector"],
    relatedTools: ["base64-encoder", "json-formatter", "uuid-generator"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function decodeJWT(token) {\n  const parts = token.split('.');\n  const header = JSON.parse(atob(parts[0]));\n  const payload = JSON.parse(atob(parts[1]));\n  return { header, payload, signature: parts[2] };\n}" },
      { lang: "python", label: "Python", code: "import base64, json\ndef decode_jwt(token):\n  parts = token.split('.')\n  header = json.loads(base64.b64decode(parts[0] + '=='))\n  payload = json.loads(base64.b64decode(parts[1] + '=='))\n  return header, payload" },
      { lang: "bash", label: "Bash", code: "cut -d. -f1 <<< \"$token\" | base64 -d 2>/dev/null | jq .\ncut -d. -f2 <<< \"$token\" | base64 -d 2>/dev/null | jq ." },
    ],
    content: "JSON Web Tokens (JWT) are the industry standard for authentication and authorization in modern web applications. A JWT consists of three Base64-encoded segments separated by dots: a header (specifying the signing algorithm), a payload (containing claims like user ID, expiration time, and roles), and a cryptographic signature (verifying the token has not been tampered with). JWT decoding is the first step when debugging authentication issues — you need to inspect the payload to check expiration (exp), issuer (iss), and custom claims. This tool decodes JWTs completely client-side: paste a token and immediately see the decoded header and payload in readable JSON. Your tokens never leave your browser.",
    faqItems: [
      { question: "What is a JWT?", answer: "A JSON Web Token (JWT) is a compact, URL-safe token format used for authentication. It consists of a header, payload, and signature, each Base64-encoded." },
      { question: "Can I see the signature?", answer: "Yes, the signature is Base64-decoded and displayed. However, JWTs are signed, not encrypted — the signature verifies integrity, not confidentiality." },
    ],
  },
  {
    id: "hash-generator", title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input.",
    metaDescription: "Free online hash generator. Generate MD5, SHA-1, SHA-256, and SHA-512 hashes instantly.",
    category: "security", keywords: ["hash generator", "md5 generator", "sha256 generator", "sha1 generator"],
    relatedTools: ["jwt-decoder", "base64-encoder", "uuid-generator"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "async function hashString(algo, str) {\n  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(str));\n  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');\n}\nhashString('SHA-256', 'hello').then(console.log);" },
      { lang: "python", label: "Python", code: "import hashlib\nhashlib.md5(b'hello').hexdigest()\nhashlib.sha256(b'hello').hexdigest()" },
      { lang: "go", label: "Go", code: `import "crypto/sha256"\n\nh := sha256.Sum256([]byte("hello"))\nfmt.Printf("%x", h)` },
      { lang: "bash", label: "Bash", code: "echo -n 'hello' | md5sum\necho -n 'hello' | sha256sum" },
    ],
    content: "A cryptographic hash function takes an input (any text or file) and produces a fixed-length string of characters — the hash or digest. Hashing is a one-way operation: you cannot reverse a hash to recover the original input. This makes hashes useful for verifying data integrity (does the downloaded file match the original?), storing passwords securely (store the hash, not the password), and detecting duplicate content. MD5 (128-bit) and SHA-1 (160-bit) are fast but cryptographically broken — attackers can generate collisions. SHA-256 and SHA-512 are recommended for security-sensitive applications. This tool uses the Web Crypto API to compute hashes entirely in your browser.",
    faqItems: [
      { question: "What is the difference between MD5, SHA-1, and SHA-256?", answer: "SHA-256 offers the strongest security (256-bit hash). SHA-1 (160-bit) is deprecated for security. MD5 (128-bit) is broken and should only be used for checksums, not security." },
      { question: "Which hash should I use?", answer: "For security-sensitive applications, use SHA-256 or SHA-512. MD5 and SHA-1 should only be used for checksums and legacy compatibility." },
    ],
  },
  {
    id: "regex-tester", title: "Regex Tester",
    description: "Test regular expressions in real-time with match highlighting, group capture, and flag controls.",
    metaDescription: "Free online regex tester. Test regular expressions in real-time with match highlighting and group capture. 100% client-side.",
    category: "text", keywords: ["regex tester", "regular expression tester", "regex checker", "regex playground"],
    relatedTools: ["json-formatter", "case-converter", "text-diff"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "const regex = /hello (\\w+)/gi;\nconst match = regex.exec('Hello World hello everyone');\n// match[0] = full match, match[1] = captured group" },
      { lang: "python", label: "Python", code: "import re\npattern = r'hello (\\w+)'\nmatches = re.findall(pattern, 'hello world', re.IGNORECASE)" },
      { lang: "go", label: "Go", code: `import "regexp"\n\nre := regexp.MustCompile(\`hello (\\w+)\`)\nmatches := re.FindStringSubmatch("hello world")` },
      { lang: "bash", label: "Bash", code: "echo 'hello world' | grep -Eo 'hello [a-z]+'\necho 'hello world' | sed -n 's/hello \\([a-z]*\\)/found: \\1/p'" },
    ],
    content: "Regular expressions are patterns used to match character combinations in text — one of the most powerful tools in a developer's arsenal. From validating email addresses and phone numbers to extracting data from logs and performing search-and-replace across thousands of files, regex is essential for text processing. A regex tester provides real-time feedback showing exactly which parts of your test string match the pattern, what each capture group extracts, and how flags (g, i, m, s) affect matching behavior. This interactive feedback loop is invaluable for debugging complex patterns before using them in code. Testing regex in a dedicated tool is faster than the edit-refresh cycle in application code and helps avoid production bugs caused by incorrect patterns.",
    faqItems: [
      { question: "What regex flavors are supported?", answer: "This tool uses JavaScript's RegExp engine, which follows the ECMAScript specification. It supports most common patterns including groups, lookaheads, and quantifiers." },
      { question: "What do the flags do?", answer: "g = global (find all matches, not just first), i = case-insensitive, m = multiline (^ and $ match line boundaries), s = dotAll (. matches newlines)." },
    ],
  },
  {
    id: "json-to-csv",
    title: "JSON to CSV for Excel",
    description: "Convert JSON arrays into CSV files ready for Excel. Handles nested objects, arrays, and Unicode with BOM.",
    metaDescription: "Free online JSON to CSV converter for Excel. Convert JSON arrays to Excel-ready CSV with BOM, proper escaping, and nested object flattening. 100% client-side.",
    category: "converters",
    keywords: ["json to csv", "json to excel", "csv converter", "json to csv excel", "convert json to csv"],
    relatedTools: ["json-formatter", "yaml-converter", "sql-formatter"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function jsonToCsv(json, flatten = true) {\n  const items = Array.isArray(json) ? json : [json];\n  if (!items.length) return '';\n  const keys = [...new Set(items.flatMap(obj => flattenKeys(obj)))];\n  const csv = [keys.join(','), ...items.map(item =>\n    keys.map(k => {\n      const val = flatten ? getFlattened(item, k) : item[k];\n      const str = val == null ? '' : String(val);\n      return str.includes(',') || str.includes('\"') || str.includes('\\n')\n        ? '\"' + str.replace(/\"/g, '\"\"') + '\"'\n        : str;\n    }).join(',')\n  )].join('\\n');\n  return '\\uFEFF' + csv; // BOM for Excel\n}" },
      { lang: "python", label: "Python", code: "import json, csv, io\n\ndef json_to_csv(json_str):\n    data = json.loads(json_str)\n    if not data:\n        return ''\n    output = io.StringIO()\n    # Flatten nested objects\n    def flatten(obj, prefix=''):\n        items = {}\n        for k, v in obj.items():\n            key = f'{prefix}{k}'\n            if isinstance(v, dict):\n                items.update(flatten(v, key + '_'))\n            else:\n                items[key] = v\n        return items\n    flat = [flatten(row) for row in data]\n    writer = csv.DictWriter(output, fieldnames=flat[0].keys())\n    writer.writeheader()\n    writer.writerows(flat)\n    return output.getvalue()" },
      { lang: "bash", label: "Bash", code: "# Convert JSON to CSV with jq\ncat data.json | jq -r '(.[0] | keys_unsorted) as $keys | $keys, (.[] | [.[$keys[]]] | @csv)' > output.csv\n\n# Add BOM for Excel compatibility\nprintf '\\uFEFF' | cat - output.csv > excel_ready.csv" },
    ],
    content: "Converting JSON data to CSV format is a common workflow when moving data from APIs and databases into spreadsheets and analytics tools. JSON structures data hierarchically with nested objects and arrays, while CSV uses a flat tabular format with rows and columns — making the conversion non-trivial. This tool handles the complexity automatically: nested objects are flattened using underscore notation (user.name becomes user_name), arrays are serialized as JSON strings within cells, and special characters in values are properly escaped with quotes. A key compatibility feature is the Byte Order Mark (BOM), which tells Excel to interpret the CSV as UTF-8 instead of the system default encoding. Without a BOM, Excel misreads accented characters, emoji, and international text. All processing happens client-side with zero server uploads.",
    faqItems: [
      { question: "Why won't my CSV open correctly in Excel?", answer: "Excel often misreads UTF-8 CSV files without a BOM (Byte Order Mark). This tool adds a BOM (\\uFEFF) automatically, so your CSV opens with correct encoding in Excel, including special characters and emoji." },
      { question: "How are nested objects handled?", answer: "Nested objects are flattened with underscore notation. For example, {\"user\": {\"name\": \"John\"}} becomes a column named user_name. Nested arrays are converted to JSON strings within the cell." },
      { question: "Can I convert large JSON files?", answer: "Yes, the conversion runs entirely in your browser. However, very large files may be slow. For optimal performance, keep files under 10MB. There is no server upload — everything stays on your device." },
    ],
  },
  {
    id: "px-to-rem",
    title: "CSS px to rem Converter",
    description: "Convert pixel values to rem units instantly. Includes a reference table for common values at any base font size.",
    metaDescription: "Free online CSS px to rem converter. Instantly convert pixel values to rem units with a reference table. Set any base font size (default 16px). 100% client-side.",
    category: "converters",
    keywords: ["px to rem", "rem converter", "css units", "px to rem converter", "rem calculator"],
    relatedTools: ["color-converter", "case-converter", "regex-tester"],
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function pxToRem(px, base = 16) {\n  return px / base;\n}\n\n// Usage\nconsole.log(pxToRem(16)); // 1rem\nconsole.log(pxToRem(32, 16)); // 2rem\nconsole.log(pxToRem(24, 14)); // 1.714rem" },
      { lang: "python", label: "Python", code: "def px_to_rem(px, base=16):\n    return px / base\n\n# Usage\nprint(px_to_rem(16))  # 1.0\nprint(px_to_rem(32))  # 2.0\nprint(px_to_rem(24, 14))  # 1.714" },
      { lang: "bash", label: "Bash", code: "# Quick px to rem in bash\npx_to_rem() {\n  echo \"scale=3; $1 / ${2:-16}\" | bc\n}\n\npx_to_rem 32   # 2.000\npx_to_rem 24 14  # 1.714" },
    ],
    content: "The rem (root em) unit is the foundation of accessible, scalable CSS layouts. Unlike px (pixels), which are absolute and ignore user preferences, rem is relative to the root HTML element's font size — usually 16px by default in browsers. This means that when users increase their browser's default font size for accessibility, every element sized in rem scales proportionally. Modern CSS frameworks like Tailwind and Bootstrap use rem-based design systems for this reason. Common conversions: 16px = 1rem, 32px = 2rem, 8px = 0.5rem at the default 16px base. Using rem for font sizes, padding, margins, and max-widths ensures your design respects user accessibility settings and adapts to different viewport sizes without media query overrides.",
    faqItems: [
      { question: "What is the rem unit?", answer: "rem (root em) is a CSS unit relative to the root element's font size. 1rem equals the font size of the <html> element, which is typically 16px by default in browsers. Using rem units ensures your layout scales when users change their browser's base font size." },
      { question: "What base font size should I use?", answer: "The default browser font size is 16px, which is what most websites use as their base. Some design systems use 14px or 10px for easier math (1rem = 10px). You can set any base size with this tool." },
      { question: "Why use rem instead of px?", answer: "rem units respect user accessibility settings. If a user increases their browser's default font size, your entire layout scales proportionally. px units are absolute and ignore these settings, making rem the recommended choice for font sizes and spacing in modern responsive design." },
      { question: "What is the difference between rem and em?", answer: "rem is relative to the root (<html>) font size. em is relative to the parent element's font size, which can compound and cause unpredictable results. rem is generally preferred for consistency across components." },
    ],
  },
  {
    id: "kubernetes-yaml-validator",
    title: "Kubernetes YAML Validator",
    description: "Validate Kubernetes YAML manifests — check pods, deployments, services, and more for correct structure and required fields.",
    metaDescription: "Free online Kubernetes YAML validator. Validate K8s manifests for pods, deployments, services, configmaps, and more. Check required fields, structure, and syntax. 100% client-side.",
    category: "web",
    keywords: ["kubernetes validator", "k8s yaml validator", "kubernetes yaml lint", "k8s manifest validator", "kubernetes config validator"],
    relatedTools: ["yaml-converter", "docker-compose-validator", "github-actions-validator"],
    examplePayload: 'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx:latest\n      ports:\n        - containerPort: 80',
    codeSnippets: [
      { lang: "bash", label: "Bash", code: "kubectl apply --dry-run=client -f manifest.yaml\nkubectl explain pod\nkubectl create deployment test --image=nginx --dry-run=client -o yaml" },
      { lang: "javascript", label: "JavaScript", code: "const yaml = require('js-yaml');\nconst fs = require('fs');\nconst doc = yaml.load(fs.readFileSync('pod.yaml', 'utf8'));\nconsole.log(doc.apiVersion, doc.kind);" },
      { lang: "python", label: "Python", code: "import yaml\nwith open('deployment.yaml') as f:\n    data = yaml.safe_load(f)\nprint(data['apiVersion'], data['kind'])" },
      { lang: "go", label: "Go", code: `import ("os"; "sigs.k8s.io/yaml")\n\ndata, _ := os.ReadFile("deploy.yaml")\nout, _ := yaml.YAMLToJSON(data)\nfmt.Println(string(out))` },
    ],
    content: "Kubernetes manifests are YAML files that define the desired state of resources in a Kubernetes cluster. A single typo, missing required field, or incorrect indentation can cause deployments to fail, pods to crash, or services to be unreachable — wasting developer time on debugging YAML instead of application logic. This validator checks Kubernetes manifest syntax client-side before you apply it to a cluster: it verifies apiVersion and kind are valid, metadata.name is present, spec sections follow the expected structure for each resource type, and YAML indentation is correct. This catches common mistakes like forgetting service selectors, missing container ports, or using wrong apiVersion for a resource type. Unlike kubectl --dry-run=client, this tool works without any cluster access and never sends your manifests anywhere.",
    faqItems: [
      { question: "What does this Kubernetes YAML validator check?", answer: "It validates YAML syntax and checks that your Kubernetes manifest has the required fields (apiVersion, kind, metadata.name), valid resource kinds, and correct structural patterns for common resources like Pods, Deployments, Services, ConfigMaps, and Namespaces." },
      { question: "Can I validate live Kubernetes manifests?", answer: "This tool validates YAML syntax and K8s structure client-side. For live validation against your cluster's API server, use kubectl apply --dry-run=server." },
      { question: "Is my manifest data safe?", answer: "Yes. All processing happens client-side in your browser. Your manifest data never leaves your device." },
      { question: "What Kubernetes resource kinds are supported?", answer: "Common kinds like Pod, Deployment, Service, ConfigMap, Secret, Namespace, Ingress, PersistentVolume, PersistentVolumeClaim, ServiceAccount, Role, RoleBinding, and more are recognized with their required fields." },
    ],
  },
  {
    id: "docker-compose-validator",
    title: "Docker Compose Validator",
    description: "Validate docker-compose.yml files for correct syntax, structure, and required fields like services, images, and ports.",
    metaDescription: "Free online Docker Compose validator. Validate docker-compose.yml files for correct YAML syntax, service structure, image references, port mappings, and volume configurations. 100% client-side.",
    category: "web",
    keywords: ["docker compose validator", "docker-compose lint", "docker compose yaml validator", "docker compose check", "compose file validator"],
    relatedTools: ["kubernetes-yaml-validator", "yaml-converter", "github-actions-validator"],
    examplePayload: 'version: "3.8"\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - "80:80"\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: secret',
    codeSnippets: [
      { lang: "bash", label: "Bash", code: "docker compose config --quiet\ndocker compose config --services\ndocker compose config --volumes" },
      { lang: "javascript", label: "JavaScript", code: "const yaml = require('js-yaml');\nconst fs = require('fs');\nconst doc = yaml.load(fs.readFileSync('docker-compose.yml', 'utf8'));\nconsole.log('Services:', Object.keys(doc.services));" },
      { lang: "python", label: "Python", code: "import yaml\nwith open('docker-compose.yml') as f:\n    data = yaml.safe_load(f)\nfor svc, config in data.get('services', {}).items():\n    print(f'{svc}: {config.get(\"image\", \"build\")}')" },
      { lang: "go", label: "Go", code: `import ("os"; "gopkg.in/yaml.v3")\n\ndata, _ := os.ReadFile("docker-compose.yml")\nvar config map[string]any\nyaml.Unmarshal(data, &config)` },
    ],
    content: "Docker Compose defines multi-container Docker applications in a YAML file called docker-compose.yml. Common configuration errors include missing service definitions, incorrect port mapping syntax (host:container format required), invalid image references, and misconfigured volumes or networks. This validator checks your compose file for the correct structure: it ensures the services top-level key exists, each service defines either an image or build context, port mappings use the correct string or numeric format, environment variables follow the proper syntax, and volume references are valid. Catching these errors before running docker compose up saves significant troubleshooting time, especially in CI/CD pipelines where compose files are used for integration testing. All validation runs in your browser with zero server uploads.",
    faqItems: [
      { question: "What does this Docker Compose validator check?", answer: "It validates YAML syntax and checks your docker-compose.yml for required top-level fields (services), valid service definitions with image or build references, correct port mapping format, environment variable syntax, and volume configurations." },
      { question: "Does this replace docker compose config?", answer: "This is a quick client-side check for syntax and structure. For full validation against the Docker Compose specification, use 'docker compose config' from the CLI." },
      { question: "What Docker Compose versions are supported?", answer: "The validator checks version 2 and 3 format files, which are the most commonly used versions in production." },
    ],
  },
  {
    id: "github-actions-validator",
    title: "GitHub Actions Validator",
    description: "Validate GitHub Actions workflow YAML files — check triggers, jobs, steps, and required action syntax.",
    metaDescription: "Free online GitHub Actions workflow validator. Validate .github/workflows YAML files for correct triggers, jobs, steps, action references, and required syntax. 100% client-side.",
    category: "web",
    keywords: ["github actions validator", "github actions yaml", "workflow validator", "github actions lint", "ci yaml validator"],
    relatedTools: ["yaml-converter", "kubernetes-yaml-validator", "docker-compose-validator"],
    examplePayload: 'name: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm install && npm test',
    codeSnippets: [
      { lang: "bash", label: "Bash", code: "gh workflow view\nyq eval .github/workflows/ci.yml" },
      { lang: "javascript", label: "JavaScript", code: "const yaml = require('js-yaml');\nconst fs = require('fs');\nconst wf = yaml.load(fs.readFileSync('.github/workflows/ci.yml', 'utf8'));\nconsole.log('Jobs:', Object.keys(wf.jobs || {}));" },
      { lang: "python", label: "Python", code: "import yaml\nwith open('.github/workflows/ci.yml') as f:\n    wf = yaml.safe_load(f)\nprint('Name:', wf.get('name'))\nprint('Jobs:', list(wf.get('jobs', {}).keys()))" },
      { lang: "go", label: "Go", code: `import ("os"; "gopkg.in/yaml.v3")\n\ndata, _ := os.ReadFile('.github/workflows/ci.yml')\nvar wf map[string]any\nyaml.Unmarshal(data, &wf)` },
    ],
    faqItems: [
      { question: "What does this GitHub Actions workflow validator check?", answer: "It validates YAML syntax and checks for required workflow fields (name, on triggers, jobs), valid trigger events (push, pull_request, schedule, workflow_dispatch), runs-on configuration, step structure with uses or run commands, and valid action reference syntax." },
      { question: "Can I use this for GitLab CI or CircleCI?", answer: "This validator is specifically for GitHub Actions workflow syntax. GitLab CI and CircleCI use different YAML structures with different required fields." },
      { question: "Does this validate action versions?", answer: "This checks that action references use the @version syntax (e.g., actions/checkout@v4) but does not validate whether the version actually exists on the marketplace." },
    ],
    content: "GitHub Actions workflows are YAML files stored in .github/workflows/ that define CI/CD pipelines triggered by events like pushes, pull requests, or schedule. A single configuration error — like a missing trigger event, incorrect runs-on specification, or invalid action reference syntax — can break your entire CI pipeline. This workflow validator checks GitHub Actions YAML syntax and structure: it validates that workflow triggers (on) use valid event names (push, pull_request, workflow_dispatch, schedule), jobs have runs-on configurations, steps contain either uses or run commands, and action references follow the owner/repo@version format. Catching these issues before committing prevents wasted CI time and keeps your development workflow running smoothly. All validation happens client-side with no uploads.",
  },
  {
    id: "jwt-expiration-checker",
    title: "JWT Expiration Checker",
    description: "Check when a JWT token expires. Decode JWT headers and payloads, inspect exp, iat, and other claims in real-time.",
    metaDescription: "Free online JWT expiration checker. Decode JWT tokens and inspect expiration (exp), issued at (iat), and other claims. Check if your token is expired or valid. 100% client-side.",
    category: "security",
    keywords: ["jwt expiration checker", "jwt token expiry", "jwt decode", "check jwt expiration", "jwt expiry check"],
    relatedTools: ["jwt-decoder", "hash-generator", "base64-encoder"],
    examplePayload: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.7H_EwmJIhb4BMpuSjQxRciNQZmlRJTb5Fye5_00oGVI',
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function decodeJWT(token) {\n  const parts = token.split('.');\n  const payload = JSON.parse(atob(parts[1]));\n  const expDate = new Date(payload.exp * 1000);\n  const now = new Date();\n  return { expired: expDate < now, expiresAt: expDate };\n}" },
      { lang: "python", label: "Python", code: "import jwt, time\ntoken = \"your.jwt.token\"\ndecoded = jwt.decode(token, options={\"verify_signature\": False})\nexpired = decoded['exp'] < time.time()\nprint(f\"Expired: {expired}\")" },
      { lang: "go", label: "Go", code: `import ("time"; "github.com/golang-jwt/jwt/v5")\n\ntoken, _, _ := jwt.NewParser().ParseUnverified(jwtStr, jwt.MapClaims{})\nclaims := token.Claims.(jwt.MapClaims)\nexp, _ := claims.GetExpirationTime()\nfmt.Println(\"Expired:\", exp.Time.Before(time.Now()))` },
      { lang: "bash", label: "Bash", code: `echo "token" | cut -d. -f2 | base64 -d 2>/dev/null | jq -r '.exp, .iat'\n# Or use jwt-cli:\njwt decode "token"` },
    ],
    content: "JWT expiration checking is essential for debugging authentication issues in modern web applications. Every JWT contains an exp (expiration) claim — a Unix timestamp after which the token is no longer valid. Tokens may also include iat (issued at), nbf (not before), and custom claims. When an API returns a 401 Unauthorized error, the first thing to check is whether the JWT has expired. This tool decodes your JWT client-side and displays the expiration date in your local timezone, the time remaining (or how long ago it expired), the issued-at timestamp, and whether the token is currently valid. Unlike server-side debugging that requires access to application logs, this tool works with the token alone. All processing is client-side — your token never leaves your browser.",
    faqItems: [
      { question: "What is JWT expiration?", answer: "JWT expiration is the exp claim in a JWT payload — a Unix timestamp indicating when the token becomes invalid. The iat (issued at) claim indicates when the token was created. Tokens with no exp claim are considered non-expiring." },
      { question: "How is expiration time displayed?", answer: "The tool shows the expiration date/time in your local timezone, the issued-at date/time, the time remaining (or how long ago it expired), and whether the token is currently valid or expired." },
      { question: "Can I check JWT signature?", answer: "This tool focuses on expiration and payload inspection. For signature verification, use our JWT Decoder or a server-side JWT library." },
    ],
  },
  {
    id: "uuid-v7-generator",
    title: "UUID v7 Generator",
    description: "Generate time-ordered UUID v7 identifiers. UUID v7 combines a Unix timestamp with random bits for sortable, database-friendly unique IDs.",
    metaDescription: "Free online UUID v7 generator. Generate time-ordered UUID v7 identifiers with embedded timestamps for sortable database keys. Copy single or batch IDs. 100% client-side.",
    category: "generators",
    keywords: ["uuid v7", "uuid v7 generator", "time-ordered uuid", "uuid7", "sortable uuid"],
    relatedTools: ["uuid-generator", "jwt-expiration-checker", "hash-generator"],
    examplePayload: '',
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: "function uuidv7() {\n  const ts = Date.now() * 0x100000;\n  const rnd = crypto.getRandomValues(new Uint8Array(8));\n  const hex = (ts + (rnd[0] << 16 | rnd[1] << 8 | rnd[2])).toString(16).padStart(12, '0');\n  return `${hex.slice(0,8)}-${hex.slice(8,12)}-7${hex.slice(12,15)}-${(8|rnd[3]>>4).toString(16)}${hex.slice(15,16)}-${Array.from(rnd.slice(4)).map(b=>b.toString(16).padStart(2,'0')).join('')}`;\n}" },
      { lang: "python", label: "Python", code: "import uuid, time\ndef uuid7():\n    ts = int(time.time() * 1000)\n    return str(uuid.uuid7())\n# Python 3.14+ has uuid.uuid7() built-in" },
      { lang: "go", label: "Go", code: `import "github.com/google/uuid"\n\nid := uuid.Must(uuid.NewV7())\nfmt.Println(id.String())` },
      { lang: "bash", label: "Bash", code: `# Install: go install github.com/mattn/uuid7@latest\nuuid7` },
    ],
    content: "UUID v7 is the newest UUID format standardized in RFC 9562, designed to solve the database performance problems caused by random UUID v4 identifiers. The key innovation: UUID v7 embeds a Unix millisecond timestamp in its first 48 bits, making newly generated UUIDs sort sequentially by creation time. This dramatically improves B-tree index performance in databases like PostgreSQL, MySQL, and SQLite because new index entries are appended sequentially rather than inserted at random positions — reducing index fragmentation and page splits. For applications that use UUIDs as primary keys, migrating from UUID v4 to UUID v7 can significantly improve write performance and reduce storage overhead. Unlike auto-increment IDs, UUID v7 remains globally unique across tables and databases. All generation is client-side using the Web Crypto API.",
    faqItems: [
      { question: "What is UUID v7?", answer: "UUID v7 is a time-ordered UUID format (RFC 9562) that embeds a Unix millisecond timestamp in the first 48 bits. This makes UUIDs sortable by creation time, improving database index performance compared to random UUID v4." },
      { question: "UUID v7 vs UUID v4 — what's the difference?", answer: "UUID v4 is completely random. UUID v7 embeds a timestamp, making IDs sortable and clustered by creation time. UUID v7 performs better with B-tree database indexes because new IDs are appended sequentially rather than inserted randomly." },
      { question: "What databases support UUID v7?", answer: "PostgreSQL, MySQL 8.0+, and SQLite support UUID types that work well with UUID v7. The sequential nature of UUID v7 reduces index fragmentation compared to v4." },
    ],
  },
  {
    id: "word-counter",
    title: "Word & Character Counter",
    description: "Count words, characters, sentences, and paragraphs in real-time as you type. Perfect for writers, students, and SEO professionals.",
    metaDescription: "Free online word and character counter. Count words, characters (with and without spaces), sentences, paragraphs, and reading time in real-time. 100% client-side, no data uploads.",
    category: "text",
    keywords: ["word counter", "character counter", "word count", "character count", "word count tool", "text counter"],
    relatedTools: ["case-converter", "remove-duplicate-lines", "text-diff"],
    examplePayload: "The quick brown fox jumps over the lazy dog.",
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: `function wordCount(text) {
  const words = text.trim().split(/\\s+/).filter(Boolean);
  return { words: words.length, chars: text.length, charsNoSpace: text.replace(/\\s/g, '').length };
}` },
      { lang: "python", label: "Python", code: `def word_count(text):
  words = [w for w in text.split() if w]
  return {
    "words": len(words),
    "chars": len(text),
    "chars_no_space": len(text.replace(" ", ""))
  }` },
      { lang: "go", label: "Go", code: `import "strings"\n\nfunc WordCount(s string) map[string]int {\n  return map[string]int{\n    "words": len(strings.Fields(s)),\n    "chars": len(s),\n  }\n}` },
      { lang: "bash", label: "Bash", code: `wc -w file.txt  # word count\nwc -c file.txt  # byte count\nwc -m file.txt  # character count` },
    ],
    content: "A word counter is an essential tool for writers, editors, students, and SEO professionals who need precise text statistics. Beyond the basic word count, professional writing requires tracking characters (for meta descriptions and SMS messages), sentences (for readability scoring), paragraphs (for content structure), and estimated reading time (for blog posts and documentation). Content writers use word counters to hit SEO-optimized article lengths, students meet essay requirements, and copywriters craft messages within character limits for platforms like Twitter and Google Ads. This word counter provides all these metrics in real-time as you type, with no page reloads or button clicks needed. All text processing is client-side — your content never leaves your device.",
    faqItems: [
      { question: "What does a word counter do?", answer: "A word counter counts the number of words, characters, sentences, and paragraphs in a text. It's essential for writers meeting word count requirements, students writing essays, and SEO professionals optimizing meta descriptions." },
      { question: "Is my text data safe?", answer: "Yes. All processing happens client-side in your browser. Your text never leaves your device." },
      { question: "What's the difference between characters with and without spaces?", answer: "Characters with spaces includes every character including spaces. Without spaces excludes whitespace. This is useful for character-limited fields like SMS messages or meta descriptions." },
    ],
  },
  {
    id: "remove-duplicate-lines",
    title: "Remove Duplicate Lines",
    description: "Remove duplicate lines from any text, sort alphabetically or reverse, and get a clean unique list. Perfect for cleaning up lists and data.",
    metaDescription: "Free online tool to remove duplicate lines from text. Remove duplicates, sort alphabetically (A-Z or Z-A), trim whitespace, and ignore empty lines. 100% client-side.",
    category: "text",
    keywords: ["remove duplicate lines", "duplicate line remover", "deduplicate text", "remove duplicate text", "unique lines"],
    relatedTools: ["case-converter", "word-counter", "text-diff"],
    examplePayload: "apple\nbanana\napple\ncherry\nbanana\ndate",
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: `function removeDuplicates(text) {
  const lines = text.split('\\n').map(l => l.trim()).filter(Boolean);
  return [...new Set(lines)].join('\\n');
}` },
      { lang: "python", label: "Python", code: `def remove_duplicates(text):
  lines = [l.strip() for l in text.split('\\n') if l.strip()]
  return '\\n'.join(dict.fromkeys(lines))` },
      { lang: "go", label: "Go", code: `import "strings"\n\nfunc RemoveDups(s string) string {\n  seen := map[string]bool{}\n  var result []string\n  for _, line := range strings.Split(s, "\\n") {\n    line = strings.TrimSpace(line)\n    if line != "" && !seen[line] {\n      seen[line] = true\n      result = append(result, line)\n    }\n  }\n  return strings.Join(result, "\\n")\n}` },
      { lang: "bash", label: "Bash", code: "sort file.txt | uniq\nawk '!seen[$0]++' file.txt\nsort -u file.txt" },
    ],
    content: "Removing duplicate lines from text is a common data cleaning task when working with lists, logs, CSV exports, and configuration files. Duplicates can creep into data through copy-paste errors, merged datasets, repeated log entries, or accumulated list entries. A duplicate line remover identifies identical lines, keeps only the first occurrence, and returns a clean, deduplicated list. Additional features like alphabetical sorting (A-Z or Z-A), whitespace trimming, and empty line removal make the cleaned output immediately useful for further processing. This operation is the text equivalent of SELECT DISTINCT in SQL or sort | uniq in Unix — but available instantly in your browser without any command-line knowledge. All processing is client-side with zero data uploads.",
    faqItems: [
      { question: "How does the duplicate line remover work?", answer: "It splits your text into lines, removes any that are identical, and gives you a clean list. You can sort the result alphabetically (A-Z or Z-A) and optionally trim whitespace and ignore empty lines." },
      { question: "Is this case-sensitive?", answer: "Yes, by default. Lines are compared exactly. 'Apple' and 'apple' are treated as different lines. You can use the Case Converter first to normalize case." },
      { question: "Can I process large files?", answer: "Since everything runs in your browser, performance depends on your device. For very large files, the browser may become slow. For typical use (up to 100,000 lines), it works smoothly." },
    ],
  },
  {
    id: "wi-fi-qr-code-generator",
    title: "Wi-Fi QR Code Generator",
    description: "Generate a QR code that smartphones can scan to instantly join your Wi-Fi network. Enter SSID, password, and encryption type.",
    metaDescription: "Free online Wi-Fi QR code generator. Create a QR code for your Wi-Fi network — anyone can scan it with their phone to connect instantly. Supports WPA, WEP, and open networks. 100% client-side.",
    category: "generators",
    keywords: ["wi-fi qr code", "wifi qr code generator", "qr code wifi", "wifi qr code maker", "qr code for wifi password"],
    relatedTools: ["qr-code-generator", "password-generator", "uuid-generator"],
    examplePayload: "",
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: `function wifiQR(ssid, password, encryption) {
  const str = \`WIFI:T:\${encryption};S:\${ssid};P:\${password};;\`;
  const qr = qrcode(0, 'M');
  qr.addData(str);
  qr.make();
  return qr;
}` },
      { lang: "python", label: "Python", code: `import qrcode
ssid, password, enc = "MyNetwork", "Pass123", "WPA"
data = f"WIFI:T:{enc};S:{ssid};P:{password};;"
img = qrcode.make(data)
img.save("wifi_qr.png")` },
      { lang: "go", label: "Go", code: `import "github.com/skip2/go-qrcode"\n\nstr := fmt.Sprintf("WIFI:T:%s;S:%s;P:%s;;", enc, ssid, pwd)\nqr, _ := qrcode.New(str, qrcode.Medium)\nqr.WriteFile(256, "wifi_qr.png")` },
      { lang: "bash", label: "Bash", code: `qrencode -o wifi_qr.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"` },
    ],
    content: "A Wi-Fi QR code encodes your wireless network credentials (SSID, password, and encryption type) into a scannable QR code using the standard format defined by the WiFi Alliance. Any modern smartphone with a built-in camera can scan this QR code and connect to the network automatically — no manual password typing required. This is particularly useful for homes with many devices, guest networks, offices, coffee shops, and Airbnb rentals where typing a complex WPA2 password on a TV remote or game controller is frustrating. The encoding format is WIFI:T:WPA;S:YourNetwork;P:YourPassword;;. The QR code itself does not reveal the password visually, but anyone who can scan it can read the network credentials. All generation happens client-side in your browser.",
    faqItems: [
      { question: "What is a Wi-Fi QR code?", answer: "A Wi-Fi QR code encodes your network credentials (SSID, password, and encryption type) in a standard format. Smartphones with built-in QR scanners can read it and connect to your network automatically without typing the password." },
      { question: "Which devices support Wi-Fi QR codes?", answer: "All modern smartphones: iPhones (iOS 11+), Android (Android 10+), and most tablets. Just point the camera at the QR code and tap the notification to connect." },
      { question: "Is the Wi-Fi password visible in the QR code?", answer: "The password is encoded in the QR code but not visible to the naked eye. However, anyone who can scan the QR code can read the password. Only share Wi-Fi QR codes with people you trust." },
      { question: "What encryption types are supported?", answer: "WPA/WPA2 (most common for modern routers), WEP (older routers), and WPA2-Enterprise or None (open networks). Select the correct type matching your router configuration." },
      { question: "Does this store my Wi-Fi credentials?", answer: "No. Everything runs client-side in your browser. Your SSID and password never leave your device." },
    ],
  },
  {
    id: "secure-wpa2-password-generator",
    title: "Secure WPA2 Password Generator",
    description: "Generate strong Wi-Fi passwords for routers — exactly 16-20 characters, no ambiguous characters like l, 1, O, 0 that are hard to type.",
    metaDescription: "Free online secure Wi-Fi password generator. Create strong WPA2-compatible passwords (16-20 chars) without ambiguous characters l, 1, O, 0. Easy to type, hard to crack. 100% client-side.",
    category: "generators",
    keywords: ["wpa2 password generator", "wifi password generator", "secure wifi password", "wpa2 key generator", "router password generator"],
    relatedTools: ["password-generator", "wi-fi-qr-code-generator", "uuid-generator"],
    examplePayload: "",
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: `function generateWPA2Key(length = 16) {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%^&*';
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array).map(v => chars[v % chars.length]).join('');
}` },
      { lang: "python", label: "Python", code: `import secrets, string
chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%^&*'
password = ''.join(secrets.choice(chars) for _ in range(16))
print(password)` },
      { lang: "go", label: "Go", code: `import "crypto/rand"\n\nfunc genWPA2() string {\n  chars := []byte("ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$")\n  b := make([]byte, 16)\n  rand.Read(b)\n  for i := range b { b[i] = chars[b[i] % byte(len(chars))] }\n  return string(b)\n}` },
      { lang: "bash", label: "Bash", code: `< /dev/urandom tr -dc 'A-HJKMNP-Za-hjkmnp-z2-9!@#$%^&*' | head -c16` },
    ],
    content: "A strong Wi-Fi password is your network's first line of defense against unauthorized access and security breaches. The recommended WPA2 password length is 16-20 characters — long enough to resist brute force attacks but short enough to type manually when needed. This password generator is specifically designed for WPA2/WPA3 wireless networks: it excludes ambiguous characters like lowercase l, uppercase I, digit 1, uppercase O, and digit 0 that are easily confused on router labels, printed cards, and device screens. The character set includes only distinct, unambiguous letters and numbers plus special characters. Each password is generated using your browser's cryptographically secure Web Crypto API — the same standard used for TLS encryption keys. No passwords are ever sent to any server.",
    faqItems: [
      { question: "What is a WPA2 password?", answer: "A WPA2 password (also called a Wi-Fi passphrase or pre-shared key) is the password used to secure a wireless network with WPA2 encryption. Strong WPA2 passwords are at least 8 characters, but 16-20 characters is recommended for maximum security." },
      { question: "Why avoid ambiguous characters?", answer: "Characters like l (lowercase L), 1 (one), O (uppercase O), and 0 (zero) look similar on many screens and printed labels. Removing them eliminates confusion when manually typing the password into smart TVs, game consoles, IoT devices, and other devices without copy-paste." },
      { question: "Can I use this password with any router?", answer: "Yes. Most routers support WPA2 passwords up to 63 characters. The 16-20 character length is compatible with all WPA2/WPA3 routers while providing excellent security. Copy the password into your router's admin panel and share the QR code with guests." },
      { question: "Is this password truly random?", answer: "Yes, using your browser's Crypto API — the same cryptographically secure random generator used for encryption keys. Each password is genuinely random and unpredictable." },
    ],
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    description: "Generate QR codes instantly from any text or URL. Download as SVG. No tracking, no server uploads, pure client-side generation.",
    metaDescription: "Free online QR code generator. Create QR codes from text or URLs instantly. Download as SVG vector graphics. 100% client-side, no tracking, no uploads.",
    category: "generators",
    keywords: ["qr code generator", "qr generator", "create qr code", "qr code maker", "free qr code"],
    relatedTools: ["password-generator", "uuid-generator", "lorem-ipsum"],
    examplePayload: "https://webutil.tech",
    codeSnippets: [
      { lang: "javascript", label: "JavaScript", code: `// Lightweight QR generation using canvas
function generateQR(text, size) {
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  // Use a minimal QR library like qrcode-generator
  const qr = qrcode(0, 'M');
  qr.addData(text); qr.make();
  const modCount = qr.getModuleCount();
  const ctx = canvas.getContext('2d');
  for (let r = 0; r < modCount; r++)
    for (let c = 0; c < modCount; c++)
      ctx.fillStyle = qr.isDark(r, c) ? '#000' : '#fff';
  return canvas.toDataURL('image/png');
}` },
      { lang: "python", label: "Python", code: `import qrcode\nimg = qrcode.make("https://webutil.tech")\nimg.save("qrcode.png")\n\n# With customization\nqr = qrcode.QRCode(box_size=10, border=4)\nqr.add_data("https://webutil.tech")\nqr.make(fit=True)\nimg = qr.make_image(fill_color="black", back_color="white")` },
      { lang: "go", label: "Go", code: `import "github.com/skip2/go-qrcode"\n\nqr, _ := qrcode.New("https://webutil.tech", qrcode.Medium)\nqr.WriteFile(256, "qrcode.png")\n\n// PNG byte output\npng, _ := qr.PNG(256)` },
      { lang: "bash", label: "Bash", code: `# Install: apt install qrencode\nqrencode -o qrcode.png "https://webutil.tech"\nqrencode -t SVG -o qrcode.svg "https://webutil.tech"` },
    ],
    content: "QR (Quick Response) codes are two-dimensional barcodes that can be scanned by smartphone cameras to instantly access encoded information — URLs, text, contact details, Wi-Fi credentials, or any other data. Originally invented by Denso Wave in 1994 for tracking automotive parts, QR codes are now ubiquitous in marketing, payments, authentication, and information sharing. A QR code generator creates these codes from any text input: paste a URL to create a scannable link, enter Wi-Fi credentials for instant network access, or encode contact information as a vCard. The SVG output format is resolution-independent and works perfectly for both print (business cards, posters, menus) and digital (websites, emails, presentations). This generator runs entirely in your browser — no data is sent to any server, and there are no usage limits or watermarks.",
    faqItems: [
      { question: "How does this QR code generator work?", answer: "It uses the lightweight qrcode-generator library running entirely in your browser. No data is sent to any server. You can generate QR codes from any text or URL and download them as SVG files." },
      { question: "Can I use the QR codes commercially?", answer: "Yes. QR codes generated by this tool are free to use for any purpose, including commercial use. There are no watermarks, tracking, or limitations." },
      { question: "What data can I encode in a QR code?", answer: "Any text: URLs, email addresses, phone numbers, Wi-Fi credentials (WIFI:T:WPA;S:name;P:password;;), contact info (vCard), SMS messages (SMSTO:number:body), or plain text. The SVG output is scalable and works in print and web." },
    ],
  },
];

export function getToolDataById(id: string): ToolData | undefined {
  return toolsData.find(t => t.id === id);
}

export function getRelatedToolData(toolData: ToolData): ToolData[] {
  return toolData.relatedTools.map(id => getToolDataById(id)).filter(Boolean) as ToolData[];
}
