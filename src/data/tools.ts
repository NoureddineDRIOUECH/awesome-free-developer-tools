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
    content: "JSON (JavaScript Object Notation) is the ubiquitous data interchange standard for web APIs, microservices, configuration files, and distributed databases specified by RFC 8259 and ECMA-404. A JSON formatter takes unformatted or minified JSON strings and parses them into a hierarchical, human-readable structure with consistent indentation, proper whitespace, and color-coded syntax highlighting. Beyond visual beautification, online JSON formatting is an essential debugging tool for developers inspecting REST, GraphQL, or RPC API payloads, validating data schemas, and catching subtle syntax errors. Common syntax pitfalls such as trailing commas, single quotes instead of double quotes, unquoted property names, and special character escapes are immediately detected with precise line and column numbers. WebUtil's JSON Formatter executes 100% client-side inside your browser's V8 JavaScript engine. Your API responses, proprietary JSON models, authentication payloads, and configuration files never leave your device, ensuring complete data confidentiality and zero latency.",
    faqItems: [
      { question: "What is the difference between JSON formatting, beautifying, and pretty-printing?", answer: "All three terms refer to the same process: parsing raw, compact JSON data and reformatting it with structured indentation (typically 2 or 4 spaces) and line breaks so humans can easily read and debug it." },
      { question: "What are the most common JSON syntax errors and how do I fix them?", answer: "The most frequent errors include: 1) Trailing commas after the last item in an object or array, 2) Using single quotes (') instead of double quotes (\"), 3) Unquoted object keys, and 4) Unescaped special characters. Valid JSON strictly requires double quotes and forbids trailing commas." },
      { question: "What is the difference between formatted JSON and minified JSON?", answer: "Formatted JSON includes whitespace and indentation for human readability. Minified JSON strips all unnecessary whitespace, comments, and line breaks to minimize payload byte size for faster network transmission across APIs." },
      { question: "Is my sensitive API data or token uploaded to any server?", answer: "No. WebUtil processes all data 100% client-side in your web browser. Nothing is transmitted over the network, logged, or stored on external servers." },
      { question: "Can I format and validate JSON while offline?", answer: "Yes. Once the WebUtil page is loaded in your browser, the formatter and validator work completely offline without an active internet connection." },
      { question: "Can this JSON formatter handle large files?", answer: "Yes. Modern browser JavaScript engines can comfortably parse and format multi-megabyte JSON files in milliseconds without freezing your tab." }
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
    content: "Base64 encoding, standardized under RFC 4648, is a binary-to-text encoding scheme that translates arbitrary binary data into a sequence of 64 printable ASCII characters (A-Z, a-z, 0-9, +, /). In modern web development, network protocols such as HTTP, MIME email, and JSON are designed to transmit textual data. When developers need to transmit binary payloads—such as images, PDF documents, cryptographic keys, or compiled WebAssembly modules—over text-only channels, Base64 ensures the data passes through firewalls, gateways, and mail servers without character corruption. Base64 works by dividing binary input into 6-bit chunks, each representing a value from 0 to 63 mapped to the standard Base64 index table, using '=' padding characters to ensure the total output length is a multiple of four. A critical engineering distinction to remember is that Base64 is an encoding format, NOT encryption: it provides zero confidentiality and can be decoded by anyone with access to the string. WebUtil's Base64 Encoder / Decoder processes both plain text and files directly in your browser using native JavaScript Uint8Array and the FileReader API, guaranteeing that private keys, credentials, and confidential files never leave your computer.",
    faqItems: [
      { question: "What is Base64 encoding and why is it used?", answer: "Base64 encoding translates binary data into 64 ASCII characters so it can be safely transmitted across text-based protocols like HTTP, JSON, XML, and email without character corruption." },
      { question: "Is Base64 considered encryption or secure?", answer: "No. Base64 is strictly an encoding mechanism, not encryption. Anyone who intercepts a Base64 string can decode it back to original data instantly. Never rely on Base64 for data security—always use AES or RSA encryption for sensitive data." },
      { question: "Why does Base64 increase data size by ~33%?", answer: "Base64 represents 3 bytes (24 bits) of binary data using 4 ASCII characters (32 bits). This mathematical ratio causes an unavoidable 33% increase in data transfer size." },
      { question: "What is the difference between standard Base64 and Base64URL?", answer: "Standard Base64 uses '+' and '/' characters, which have special syntactic meanings in URLs and file systems. Base64URL replaces '+' with '-' and '/' with '_', and often omits '=' padding to make tokens URL-safe." },
      { question: "How do Data URIs work with Base64 in HTML and CSS?", answer: "A Data URI allows small images and fonts to be inlined directly into HTML or CSS using the syntax: data:image/png;base64,iVBORw0KGgo... This eliminates an extra HTTP request at the expense of caching efficiency." }
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
    content: "URL encoding, officially known as percent-encoding and defined in RFC 3986, is the standard mechanism for representing arbitrary characters within Uniform Resource Identifiers (URIs). URIs have strict syntax rules: characters are divided into 'unreserved' characters (alphanumeric characters, hyphen, underscore, period, and tilde) which never need encoding, and 'reserved' characters (such as ?, &, =, #, /, and :) which possess structural syntactic meaning. When query parameters or form submissions contain spaces, punctuation, or non-ASCII international characters, they must be converted into a safe percent-encoded format consisting of '%' followed by two hexadecimal digits representing the UTF-8 byte. For example, a space character becomes '%20' (or '+' in application/x-www-form-urlencoded), ampersands become '%26', and question marks become '%3F'. Failing to encode query parameters properly results in broken hyperlinks, dropped parameters, and potential HTTP parameter pollution vulnerabilities. WebUtil's online URL encoder and decoder handles single values, full URL strings, and multi-line query parameters instantly in your browser with full Unicode UTF-8 support.",
    faqItems: [
      { question: "Why do URLs require percent-encoding?", answer: "URLs can only be safely transmitted across the internet using the standard US-ASCII character set. Special characters like spaces, &, and # have syntactic meanings in URLs and must be encoded to prevent link corruption and misinterpretation." },
      { question: "What is the difference between encodeURI() and encodeURIComponent()?", answer: "encodeURI() encodes a complete URL while preserving protocol and path separators (: / ? # & =). In contrast, encodeURIComponent() encodes every reserved character, making it ideal for individual query parameter values." },
      { question: "Why does space sometimes encode as %20 and other times as '+'?", answer: "%20 is the official RFC 3986 percent-encoding standard for URIs. The plus sign '+' is used specifically for query strings formatted under HTML form submissions (application/x-www-form-urlencoded)." },
      { question: "Which characters must always be encoded in query parameters?", answer: "Characters with special syntactic meaning in query strings must always be encoded: & (parameter separator), = (key-value separator), # (fragment identifier), ? (query start), and spaces." },
      { question: "Does this tool support international characters and emoji?", answer: "Yes. WebUtil encodes international characters (such as Arabic, Chinese, Cyrillic) and emoji into their correct multi-byte UTF-8 percent-encoded representations." }
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
    content: "HTML entity encoding is a foundational web security and typography standard defined by the W3C HTML specifications. In HTML syntax, certain characters—specifically '<', '>', '&', '\"', and \"'\"—are reserved because they define tag boundaries, attributes, and entity declarations. If user-submitted data containing these characters is inserted directly into an HTML document without encoding, the browser's HTML parser interprets them as executable markup. This is the root cause of Cross-Site Scripting (XSS), one of the most dangerous and prevalent web application vulnerabilities. By converting '<' to '&lt;', '>' to '&gt;', and '&' to '&amp;', the browser safely displays the intended text glyphs without executing scripts or altering DOM structure. In addition to security escaping, HTML entities provide named codes (like '&copy;' for © or '&mdash;' for —) and numeric character references (like '&#8364;' for €) for displaying typography and international symbols reliably across all devices. WebUtil converts special characters to named entities, numeric codes, or decoded raw text instantly in your browser.",
    faqItems: [
      { question: "What are HTML entities and why are they used?", answer: "HTML entities are special character codes used to represent reserved HTML characters (like < and >) and typographic symbols so browsers render them as visual text rather than executable markup." },
      { question: "How does HTML entity encoding prevent Cross-Site Scripting (XSS)?", answer: "When user input containing characters like <script> is converted to &lt;script&gt;, the browser renders the code harmlessly as text on the screen rather than executing it as JavaScript in the DOM." },
      { question: "What are the 5 critical HTML characters that must always be escaped?", answer: "The five essential characters are: & (becomes &amp;), < (becomes &lt;), > (becomes &gt;), \" (becomes &quot;), and ' (becomes &#39; or &apos;)." },
      { question: "What is the difference between named entities and numeric character references?", answer: "Named entities use readable names (like &copy; or &euro;), while numeric character references use decimal (&#169;) or hexadecimal (&#xA9;) Unicode code points. Numeric references work for every Unicode glyph." },
      { question: "When should you encode vs decode HTML entities in web development?", answer: "Encode text before rendering dynamic, untrusted user data into HTML templates. Decode entities when parsing scraped HTML or converting HTML document content back into plain text." }
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
    content: "A strong random password generator is your first line of defense against credential stuffing, brute force attacks, and dictionary attacks across digital services. According to the National Institute of Standards and Technology (NIST SP 800-63B), the single most important factor determining password strength is length and entropy rather than complex arbitrary substitution rules. A 16-character password chosen uniformly from a 94-character set (uppercase, lowercase, numbers, and symbols) provides over 105 bits of cryptographic entropy: cracking it would take a modern high-performance GPU cluster billions of years. WebUtil's password generator uses the browser's native Web Crypto API (`window.crypto.getRandomValues`), which accesses the operating system's kernel-level cryptographically secure pseudo-random number generator (CSPRNG, such as /dev/urandom on Linux/macOS or CryptGenRandom on Windows). Crucially, all password generation happens entirely client-side on your local CPU. Passwords are never sent across a network, never logged on any server, and never cached. Once you close or reload the tab, the generated passwords vanish completely from memory.",
    faqItems: [
      { question: "How secure are passwords generated by WebUtil?", answer: "They are cryptographically secure. WebUtil utilizes the browser's Web Crypto API (crypto.getRandomValues), drawing randomness directly from your operating system's entropy pool." },
      { question: "What is password entropy and how many bits do I need?", answer: "Entropy measures unpredictability in bits. A password with 80+ bits is considered strong against offline attacks, while 100+ bits (achieved with a 16+ character random password) provides robust long-term defense." },
      { question: "What do the latest NIST SP 800-63B guidelines recommend?", answer: "NIST recommends prioritizing password length (at least 12-16 characters) over frequent expiration or forced symbol combinations, and checking against lists of known breached passwords." },
      { question: "Are passwords generated here ever sent over the network or saved?", answer: "Never. Generation runs entirely inside your browser's local memory. No passwords, timestamps, or telemetry are ever sent to WebUtil servers or third parties." },
      { question: "How long would it take a supercomputer to brute-force a 16-character password?", answer: "A random 16-character password with letters, digits, and symbols contains ~105 bits of entropy. At 100 trillion guesses per second, brute-forcing it would take hundreds of trillions of years." },
      { question: "Can I use this password generator offline?", answer: "Yes. Once this page is loaded in your browser, it operates fully offline without any internet connection." }
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
    content: "A Universally Unique Identifier (UUID), standardized by RFC 4122 and RFC 9562, is a 128-bit label used to uniquely identify information across computer systems without requiring central coordination. UUID Version 4 generates identifiers using pseudo-random numbers: out of the 128 bits, 122 bits are purely random, 4 bits designate the version (0100 for v4), and 2 bits designate the variant (10 for RFC 4122). Because there are 2^122 (approximately 5.3 x 10^36) possible UUID v4 values, the mathematical probability of a duplicate collision is so infinitesimally low that it is practically zero: generating one billion UUIDs every second for 100 years would only yield a one-in-a-billion chance of collision. UUIDs are the de facto standard for primary keys in distributed databases (such as CockroachDB, Cassandra, and MongoDB), microservice request tracing correlation IDs, session tokens, and RESTful resource endpoints. WebUtil allows you to generate single or bulk UUID v4 identifiers instantly in your browser with one-click copying, uppercase/lowercase options, and zero server requests.",
    faqItems: [
      { question: "What is a UUID v4 and how is it generated?", answer: "UUID v4 is a 128-bit universally unique identifier created from cryptographically random numbers. It is formatted as 32 hexadecimal characters in five hyphen-separated groups: 8-4-4-4-12." },
      { question: "What are the odds of two UUID v4 values colliding?", answer: "The probability is approximately 1 in 2^122. You would need to generate over 1 billion UUIDs per second for decades before expecting a single accidental collision." },
      { question: "Why use UUIDs instead of auto-incrementing integers for database IDs?", answer: "UUIDs allow distributed servers and microservices to generate IDs independently without a central database lock, prevent enumeration attacks, and make merging databases seamless." },
      { question: "What is the difference between a UUID and a GUID?", answer: "GUID (Globally Unique Identifier) is Microsoft's implementation of the RFC 4122 UUID standard. The two terms are practically synonymous in software development." },
      { question: "Can I bulk generate hundreds of UUIDs at once?", answer: "Yes. You can select the count in the generator controls and copy all generated UUIDs formatted as a clean list with a single click." }
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
    content: "Lorem Ipsum has been the printing and typesetting industry's standard placeholder text since the 1500s. Adapted from sections of Cicero's 45 BC philosophical treatise 'De finibus bonorum et malorum' (On the Ends of Good and Evil), Lorem Ipsum mimics the natural word frequency, sentence structure, and visual rhythm of Latin and English prose. In modern UI/UX design, web development, and digital marketing, using realistic placeholder text is critical during wireframing and prototyping: it fills layouts naturally so clients and stakeholders evaluate typographic hierarchy, line spacing, and component layout without being distracted by readable content. Unlike simple letter repetition or repetitive sample words, Lorem Ipsum features a balanced distribution of letter lengths, punctuation, and paragraphs that accurately stress-tests responsive CSS grids and flexbox containers. WebUtil's Lorem Ipsum generator lets you produce custom paragraphs, sentences, or word counts with one click, copying directly to your clipboard.",
    faqItems: [
      { question: "Where does Lorem Ipsum placeholder text originate?", answer: "Lorem Ipsum is derived from sections 1.10.32 and 1.10.33 of Cicero's philosophical work 'De finibus bonorum et malorum', written in 45 BC during the Roman Republic." },
      { question: "Why do designers use Lorem Ipsum instead of real English copy?", answer: "Readable text distracts viewers from focusing on typography, layout balance, visual hierarchy, and interface design. Lorem Ipsum provides a natural visual texture without drawing attention to the words." },
      { question: "What does the Latin text in Lorem Ipsum mean?", answer: "The passage discusses pleasure and pain ('dolorem ipsum' means 'pain itself'). The modern Lorem Ipsum text was scrambled over centuries, making it nonsensical pseudo-Latin." },
      { question: "Can I generate specific quantities of words, sentences, or paragraphs?", answer: "Yes. You can configure WebUtil's generator to output exactly the number of paragraphs, sentences, or words needed to fit your UI mockup." },
      { question: "Is Lorem Ipsum readable by screen readers?", answer: "Screen readers will attempt to pronounce Lorem Ipsum as Latin. In production applications, always replace placeholder text with accessible, semantic copy before publishing." }
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
    content: "YAML (YAML Ain't Markup Language) and JSON (JavaScript Object Notation) are the two leading data serialization formats in cloud-native computing, software engineering, and DevOps. YAML is designed for human readability and concise configuration: it uses whitespace indentation instead of braces and quotes, supports inline and block comments, and handles multi-line strings gracefully. It is the standard format for Kubernetes manifests, Docker Compose files, Ansible playbooks, and GitHub Actions workflows. JSON, in contrast, is the strict, universal format of web APIs, browser communication, and database document storage (such as MongoDB and PostgreSQL JSONB). Converting between YAML and JSON is a constant developer task when bridging configuration files with REST APIs, validating cloud templates against JSON schemas, or transforming API responses into readable configuration files. WebUtil's YAML to JSON Converter provides bidirectional conversion with real-time syntax validation, indentation controls, and instant error detection—running 100% client-side with zero data uploads.",
    faqItems: [
      { question: "What is the primary difference between YAML and JSON?", answer: "YAML uses indentation and whitespace to define hierarchy and supports comments, making it ideal for human-edited configuration files. JSON uses strict braces, brackets, and quotes, making it faster to parse across web APIs." },
      { question: "Why does indentation matter so strictly in YAML?", answer: "In YAML, indentation levels define parent-child relationships and nested data structures. Mixing tabs and spaces or using inconsistent spacing causes syntax parse errors." },
      { question: "Can all YAML documents be converted to JSON?", answer: "Most standard YAML data can be converted to JSON. However, advanced YAML features like custom type tags, circular anchors/aliases, and multiple documents in a single file (---) require flattening or adjustment for JSON." },
      { question: "How does this converter handle multi-line strings and comments?", answer: "Comments are stripped during conversion to JSON since the JSON standard forbids comments. Multi-line YAML strings (| and >) are converted into standard JSON strings with escaped newline characters (\\n)." },
      { question: "Is my YAML configuration or secret data safe?", answer: "Yes. All conversion executes entirely in your browser using client-side JavaScript. Your Kubernetes secrets, database credentials, and cloud configurations are never transmitted over the internet." }
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
    content: "Color representation in digital design and web development spans several mathematical color spaces and CSS standards: HEX, RGB, HSL, and HSV. RGB (Red, Green, Blue) is an additive color model based on digital displays where each channel is expressed from 0 to 255. HEX represents RGB values compactly in hexadecimal (e.g. #8B5CF6). HSL (Hue, Saturation, Lightness) models color in a cylindrical coordinate system that mirrors human perception: Hue represents the color wheel angle (0-360 deg), Saturation represents color intensity (0-100%), and Lightness represents brightness from black to white. HSL makes creating color palettes, hover states, and dark mode themes intuitive because you can adjust brightness or saturation without altering the underlying hue. Web accessibility standards (WCAG 2.1) require minimum contrast ratios (4.5:1 for standard text, 3:1 for large text) between foreground text and background colors to ensure readability for visually impaired users. WebUtil's Color Converter translates colors across HEX, RGB, HSL, and HSV formats with live visual previews, alpha transparency support, and one-click CSS code generation.",
    faqItems: [
      { question: "What is the difference between RGB, HEX, and HSL color models?", answer: "RGB and HEX describe how computer monitors emit light (Red, Green, Blue). HSL describes colors how humans perceive them: Hue (tint), Saturation (intensity), and Lightness (brightness)." },
      { question: "Why do UI designers and developers prefer HSL over HEX for styling?", answer: "HSL allows developers to create cohesive color schemes, hover states, and dark mode variations easily by tweaking lightness or saturation percentages while keeping the hue constant." },
      { question: "How do I check if a color combination meets WCAG accessibility standards?", answer: "WCAG 2.1 requires a contrast ratio of at least 4.5:1 for standard body text and 3:1 for large text (18pt or 14pt bold). Check the calculated contrast score before finalizing your UI colors." },
      { question: "What does the alpha channel (RGBA/HEX8) represent?", answer: "The alpha channel defines color opacity from 0 (completely transparent) to 1 or 100% (fully opaque), allowing background layers to show through." },
      { question: "Can I copy CSS-ready color variables directly from this tool?", answer: "Yes. WebUtil provides ready-to-paste CSS color declarations in HEX, rgb(), and hsl() formats with a single click." }
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
    content: "Consistent naming conventions and text casing are critical in modern software engineering, database design, API development, and technical writing. Different programming languages and frameworks enforce distinct casing standards: JavaScript and Java utilize camelCase for variables and methods (`userProfile`), TypeScript and C# utilize PascalCase for classes and interfaces (`UserProfile`), Python and Rust mandate snake_case for functions and variables (`user_profile`), and environment variables demand CONSTANT_CASE (`USER_PROFILE`). In web development and SEO, kebab-case (`user-profile`) is the universal standard for URL slugs and CSS classes because search engine crawlers treat hyphens as natural word separators. Converting variable names across language boundaries, transforming database columns into API JSON models, or formatting article titles into Title Case or sentence case can be tedious and prone to typos. WebUtil's Case Converter parses text across spaces, underscores, and hyphens to convert strings into camelCase, snake_case, kebab-case, PascalCase, CONSTANT_CASE, Title Case, UPPERCASE, and lowercase in real time.",
    faqItems: [
      { question: "What is the difference between camelCase, PascalCase, snake_case, and kebab-case?", answer: "camelCase capitalizes every word except the first without spaces (myVariable). PascalCase capitalizes all words (MyClass). snake_case separates words with underscores (my_variable). kebab-case separates words with hyphens (my-variable)." },
      { question: "Which casing convention is best for SEO-friendly URLs?", answer: "kebab-case (hyphen-separated words) is the official Google-recommended convention for URL slugs. Googlebot interprets hyphens as word delimiters, whereas underscores can concatenate terms." },
      { question: "Which naming conventions are standard in Python, JavaScript, and C#?", answer: "Python uses snake_case for functions and variables. JavaScript uses camelCase for functions and PascalCase for classes. C# uses PascalCase for methods and public properties." },
      { question: "How does this tool handle numbers, acronyms, and special characters?", answer: "WebUtil identifies word boundaries using whitespace, casing transitions, and punctuation, preserving numbers and converting acronyms cleanly into your desired case format." },
      { question: "Can I convert large blocks of text or code at once?", answer: "Yes. You can paste paragraphs of text or multi-line lists of variables to convert them all simultaneously with zero latency." }
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
    content: "Markdown is the lightweight markup language created by John Gruber and Aaron Swartz in 2004, now standardized under CommonMark and expanded through GitHub Flavored Markdown (GFM). Markdown enables developers, technical writers, and content creators to format documents using plain text syntax that can be converted cleanly into semantically structured HTML. From writing GitHub READMEs and issue tickets to drafting blog posts, API documentation, and static site content, Markdown is the primary documentation standard across the software industry. A live Markdown editor and previewer bridges the gap between raw text and rendered output: it gives immediate visual feedback on headings, lists, tables, strikethrough, fenced code blocks, blockquotes, and hyperlinks. WebUtil's Markdown Previewer provides a side-by-side editing interface with instant HTML rendering, syntax sanitization to prevent XSS attacks, and one-click export of both formatted HTML and raw Markdown.",
    faqItems: [
      { question: "What is GitHub Flavored Markdown (GFM) and how does it differ from standard Markdown?", answer: "GFM extends standard CommonMark with support for tables, task lists with checkboxes (- [x]), strikethrough (~~text~~), autolinks, and syntax-highlighted code fences." },
      { question: "How does the live HTML preview sanitize code to prevent XSS?", answer: "WebUtil sanitizes all rendered HTML by stripping dangerous script tags, malicious event handlers (onerror, onload), and unsafe URL protocols (like javascript:)." },
      { question: "Can I write and preview Markdown tables and checklists?", answer: "Yes. WebUtil fully supports GFM table syntax with column alignment (| --- | :---: | ---: |) and interactive task lists." },
      { question: "How do I export my Markdown to formatted HTML?", answer: "Click the 'Copy HTML' button to copy clean, semantic HTML directly to your clipboard, ready to paste into web editors or CMS platforms." },
      { question: "Does this editor autosave my work in my browser?", answer: "Yes. Your current text is preserved in browser local storage so you won't lose your work if you accidentally refresh or close the tab." }
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
    content: "Text diff checking is a fundamental diagnostic technique for identifying additions, deletions, and modifications between two versions of text or source code. Diff algorithms, historically pioneered by Eugene Myers and the Unix `diff` utility, compute the Longest Common Subsequence (LCS) to determine the minimal number of edit operations required to transform one string into another. Software developers, DevOps engineers, and technical editors rely on diff checkers daily to review code pull requests, audit configuration changes before deployment, compare JSON/XML API responses, and inspect contract or documentation revisions. A visual diff checker highlights inserted lines in green, deleted lines in red, and pinpoints exact inline character changes so subtle discrepancies—such as whitespace changes, altered port numbers, or swapped query parameters—are immediately obvious. WebUtil's Text Diff Checker runs entirely client-side: paste your original and modified text to inspect side-by-side or unified differences without uploading sensitive company data to third-party servers.",
    faqItems: [
      { question: "How does the text diff algorithm identify changes between two texts?", answer: "The diff engine calculates the Longest Common Subsequence (LCS) between the two inputs, identifying which lines were retained, added, or removed with minimal edit distance." },
      { question: "What is the difference between side-by-side and unified diff views?", answer: "A side-by-side view displays the original and modified texts in parallel columns. A unified diff combines both into a single linear view using + and - indicators." },
      { question: "Does this diff checker detect whitespace and indentation differences?", answer: "Yes. WebUtil highlights subtle whitespace changes, tab-versus-space differences, and newline alterations that frequently cause syntax bugs in code." },
      { question: "Is my sensitive code or document content uploaded to any server?", answer: "No. All text comparison executes locally on your device inside your browser's JavaScript sandbox. No content is ever sent over the network." },
      { question: "Can this tool compare structured data like JSON or YAML?", answer: "Yes. Paste two JSON payloads or YAML manifests to quickly spot differing keys, changed values, or missing properties." }
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
    content: "Image format conversion is a critical workflow for optimizing web performance, reducing bandwidth consumption, and meeting platform asset requirements. Modern web optimization revolves around choosing the optimal format: WebP offers superior lossy and lossless compression (typically 25-34% smaller file sizes than JPEG and PNG at equivalent visual quality) while retaining full alpha transparency support. PNG provides lossless raster compression ideal for logos, screenshots, and graphics requiring crisp lines and transparency. JPEG remains the standard for photographic imagery where lossy compression balances visual detail and file size. Traditional online image converters upload your personal photos, design mockups, or sensitive documents to third-party servers for backend processing, creating serious privacy and security risks. WebUtil's Image Converter uses the HTML5 Canvas API and browser-native decoding to convert images directly in your browser. Your images are loaded into local GPU/canvas memory, converted to WebP, PNG, JPEG, or GIF, and downloaded instantly—with zero server uploads and complete privacy.",
    faqItems: [
      { question: "Why should I convert PNG and JPEG images to WebP for my website?", answer: "WebP reduces image file sizes by 25% to 35% compared to PNG and JPEG without perceptible loss of quality, dramatically improving Core Web Vitals (LCP) and page load speed." },
      { question: "Does converting images in the browser reduce image quality?", answer: "Lossless conversion (e.g. converting to PNG or lossless WebP) retains 100% of image quality. When converting to JPEG or lossy WebP, WebUtil uses high-quality compression settings to preserve visual fidelity." },
      { question: "Are my images or photos uploaded to any external server?", answer: "No. The entire conversion process occurs in-memory on your computer using the HTML5 Canvas API. No images leave your device." },
      { question: "Does WebP support transparent backgrounds like PNG?", answer: "Yes. WebP supports full 8-bit alpha transparency with both lossy and lossless compression, making it a complete replacement for heavy PNG files." },
      { question: "What browsers support WebP images?", answer: "All modern web browsers—including Chrome, Firefox, Safari, Edge, and mobile browsers—have full native support for WebP images." }
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
    content: "SQL (Structured Query Language) is the global standard for querying, defining, and manipulating data across relational databases like PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server. In fast-paced development environments, SQL queries written inside application code, ORM queries, and database logs often become dense, unindented, one-line strings that are difficult to read, optimize, or debug. A dedicated SQL formatter parses complex SQL statements into a clean, hierarchical layout: keywords (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY) are capitalized and left-aligned, subqueries and CTEs (Common Table Expressions) are indented logically, and column lists are split across readable lines. Cleanly formatted SQL makes query execution plans easier to reason about, helps index optimization, accelerates code reviews, and prevents costly bugs in production database migrations. WebUtil's SQL Formatter beautifies and standardizes your queries instantly in your browser with zero data transmission, keeping your proprietary database schemas completely private.",
    faqItems: [
      { question: "Why is proper SQL query formatting important for developer teams?", answer: "Formatted SQL improves readability, makes subquery logic and JOIN relationships obvious, speeds up code reviews, and simplifies database performance tuning." },
      { question: "Which SQL dialects does this formatter support?", answer: "WebUtil supports standard ANSI SQL, PostgreSQL, MySQL, SQLite, MariaDB, Oracle SQL, and Microsoft SQL Server (T-SQL)." },
      { question: "How does the SQL formatter handle complex subqueries and CTEs?", answer: "The formatter identifies nested query boundaries and WITH clauses, applying consistent indentation to clarify execution hierarchy." },
      { question: "Will formatting change the query performance in the database?", answer: "No. SQL database query optimizers ignore whitespace and formatting. The query execution plan and performance remain identical." },
      { question: "Is my proprietary database schema or SQL script secure?", answer: "Yes. WebUtil processes all SQL queries client-side in your browser. No queries, table names, or credentials are sent over the network." }
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
    content: "XML (eXtensible Markup Language), standardized by the W3C, is a foundational markup language for encoding structured documents and data. While JSON dominates public web APIs, XML remains the backbone of enterprise software, SOAP web services, RSS and Atom feeds, Android layout resources, SVG graphics, Office Open XML documents (DOCX, XLSX), and financial exchange protocols (FIX, SWIFT). In production environments, XML payloads transmitted over the wire are frequently minified into dense single-line strings without whitespace to reduce bandwidth. Inspecting or debugging these files requires reformatting into a hierarchical tree with proper indentation, tag alignment, and attribute wrapping. An XML formatter parses document structure, validates opening and closing tags, checks attribute quote consistency, and highlights syntax errors such as mismatched tags or unclosed elements. WebUtil's XML Formatter & Validator beautifies XML documents, strips unnecessary whitespace, and checks well-formedness entirely in your browser with zero server uploads.",
    faqItems: [
      { question: "What is the difference between well-formed XML and valid XML?", answer: "Well-formed XML obeys basic XML syntax rules (matching tags, unique attributes, proper root element). Valid XML additionally conforms to a specific schema definition (DTD or XSD)." },
      { question: "How does the XML formatter handle CDATA sections and comments?", answer: "WebUtil preserves CDATA sections (<![CDATA[ ... ]]>) and XML comments intact without altering their internal content or line breaks." },
      { question: "Can this tool format SOAP API payloads and RSS XML feeds?", answer: "Yes. WebUtil handles complex enterprise SOAP envelopes, XML namespaces (xmlns), and RSS/Atom feeds with clean hierarchical indentation." },
      { question: "What causes the common 'mismatched tag' XML error?", answer: "XML is strictly case-sensitive. A mismatch error occurs when an opening tag does not match its closing tag (e.g. <Item> ... </item>) or when nested tags overlap improperly." },
      { question: "Is my proprietary XML data processed privately?", answer: "Yes. All XML parsing and beautification runs locally in your browser. No files, corporate configurations, or data are transmitted over the internet." }
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
    content: "JSON Web Tokens (JWT), defined in RFC 7519, are compact, URL-safe security tokens widely used for authentication and authorization in modern web applications, microservices, and OAuth 2.0 / OpenID Connect flows. A JWT consists of three Base64URL-encoded strings separated by dots: the Header (identifying the token type and cryptographic signing algorithm such as HS256 or RS256), the Payload (containing claims like user ID, roles, issuer, and expiration time), and the Signature (used to verify token authenticity and integrity). Decoding a JWT is the first step in diagnosing authentication failures, expired sessions, and authorization permission issues. A common misconception among developers is that JWT payloads are encrypted: in standard JWS (JSON Web Signature), the payload is simply encoded in Base64URL, meaning anyone who inspects the token can read the claims. WebUtil's JWT Decoder & Token Inspector decodes the header and payload into formatted JSON, calculates token expiration status, and highlights standard claims instantly. All decoding executes 100% client-side in your browser: sensitive access tokens, refresh tokens, and internal user claims are never transmitted to any external server.",
    faqItems: [
      { question: "Can a JWT be decoded without knowing the secret signature key?", answer: "Yes. Standard JWTs (JWS) are signed, not encrypted. The header and payload are Base64URL-encoded JSON strings that anyone can decode and read without the signing secret." },
      { question: "What is the difference between a JWT header, payload, and signature?", answer: "The Header specifies metadata and the signing algorithm (e.g. RS256). The Payload contains the claims and data (user ID, expiration, roles). The Signature cryptographically verifies that the token was not modified after issuance." },
      { question: "What are standard JWT registered claims (iss, sub, aud, exp, iat)?", answer: "Standard claims include: iss (issuer), sub (subject/user ID), aud (audience/intended recipient), exp (expiration timestamp), nbf (not before timestamp), and iat (issued-at timestamp)." },
      { question: "What is the 'alg: none' JWT vulnerability?", answer: "It is a severe security vulnerability where flawed authentication libraries accept tokens that specify 'none' as their algorithm, bypassing signature verification entirely." },
      { question: "Is it safe to paste production authentication tokens into WebUtil?", answer: "Yes. WebUtil runs 100% client-side in your browser. No tokens, claims, or telemetry are ever sent across the network." },
      { question: "Where should JWT tokens be stored securely in web applications?", answer: "For web applications, storing JWTs in httpOnly, secure, sameSite cookies protects them from XSS attacks. Avoid storing sensitive tokens in localStorage or sessionStorage." }
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
    content: "Cryptographic hash functions are mathematical algorithms that transform arbitrary-length input data into a fixed-size bit string (a digest or hash) in a strictly deterministic, one-way manner. A secure cryptographic hash exhibits four primary properties: 1) Determinism (the same input always produces the exact same hash), 2) Pre-image resistance (it is computationally infeasible to reverse the hash to find the original input), 3) Second pre-image resistance (it is infeasible to find another input that yields the same hash), and 4) The Avalanche Effect (changing a single bit of input radically alters the resulting hash). Hash algorithms are fundamental to digital signatures, SSL/TLS certificates, Git commit integrity, blockchain consensus, and file checksum verification. MD5 (128-bit) and SHA-1 (160-bit) are now cryptographically broken due to practical collision attacks and must never be used for security. SHA-256 and SHA-512 (from the SHA-2 family) represent the current industry gold standard. Importantly, raw cryptographic hashes like SHA-256 should NEVER be used for user passwords without salting and iteration: attackers can crack raw hashes at billions of guesses per second using rainbow tables and GPUs (use key-derivation algorithms like Argon2 or Bcrypt instead). WebUtil's Hash Generator computes MD5, SHA-1, SHA-256, and SHA-512 hashes simultaneously in your browser using the native Web Crypto API with zero data upload.",
    faqItems: [
      { question: "What is a cryptographic hash function and how does it work?", answer: "A cryptographic hash function takes any text or binary input and processes it through mathematical compression functions to produce a fixed-length string (digest) that cannot be reversed." },
      { question: "Can a SHA-256 or SHA-512 hash be decrypted or reversed?", answer: "No. Cryptographic hashes are one-way mathematical operations, not encryption. They contain no decryption key. The only way to find the original text is guessing (brute force or dictionary attacks)." },
      { question: "Why are MD5 and SHA-1 no longer considered secure?", answer: "Researchers have discovered collision vulnerabilities in both MD5 and SHA-1, meaning attackers can generate two different files that produce the exact same hash. Use SHA-256 or SHA-512 for security." },
      { question: "What is the difference between hashing and encryption?", answer: "Encryption is a two-way function designed to hide data with a secret key so it can later be decrypted. Hashing is a one-way function designed to verify data integrity and identity without revealing original contents." },
      { question: "Why should I use Bcrypt or Argon2 instead of SHA-256 for user passwords?", answer: "SHA-256 is designed to be fast, enabling attackers to test billions of password guesses per second on GPUs. Password hashing algorithms like Argon2 and Bcrypt are deliberately slow and memory-hard to prevent brute-force attacks." },
      { question: "How does WebUtil compute hashes in the browser?", answer: "WebUtil uses the browser's native window.crypto.subtle.digest API, executing cryptographic math on your local CPU without sending any data over the network." }
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
    content: "Regular expressions (regex) are formal pattern-matching languages used across software engineering for data validation, string parsing, text extraction, and automated search-and-replace. Despite their power, crafting regular expressions is notoriously tricky: subtle distinctions between greedy (`*`) and lazy (`*?`) quantifiers, character classes (`\\d`, `\\w`, `\\s`), boundary anchors (`^`, `$`, `\\b`), and lookarounds (`(?=...)`, `(?<=...)`) can lead to unexpected matching bugs or catastrophic backtracking. Catastrophic backtracking, also known as Regular Expression Denial of Service (ReDoS), occurs when an unanchored pattern with overlapping nested quantifiers causes an exponential number of search paths, freezing CPU cores. A real-time regex tester provides an interactive feedback loop: as you type your pattern, matches are highlighted instantly in your sample text, capture groups are parsed into structured results, and flags (`g`, `i`, `m`, `s`, `u`) can be toggled effortlessly. WebUtil's Regex Tester runs directly in your browser with built-in execution limits to protect against runaway loops, ensuring safe, rapid regex development.",
    faqItems: [
      { question: "What regex engine does this online tester use?", answer: "WebUtil uses the ECMAScript (JavaScript) RegExp engine built into modern web browsers, supporting modern features like named capture groups, unicode property escapes, and lookbehinds." },
      { question: "What do the regex flags (g, i, m, s, u) mean?", answer: "g = global (find all matches), i = case-insensitive, m = multiline (^ and $ match line boundaries), s = dotAll (. matches newlines), and u = unicode (treat pattern as unicode code points)." },
      { question: "What is Regular Expression Denial of Service (ReDoS) and how is it prevented?", answer: "ReDoS happens when complex patterns with nested quantifiers cause exponential backtracking on non-matching strings, freezing CPU cores. WebUtil includes safety execution limits to prevent browser tab lockups." },
      { question: "How do lookahead and lookbehind assertions work in JavaScript regex?", answer: "Lookahead (?=...) checks if a pattern follows without including it in the match. Lookbehind (?<=...) checks if a pattern precedes. Negative assertions (?!...) and (?<!...) ensure patterns do NOT match." },
      { question: "Can I test regex substitution and replacement patterns ($1, $2)?", answer: "Yes. You can enter a replacement string using $1, $2, or named group references $<name> to preview string replacements in real time." },
      { question: "Why does my regex work in Python or PCRE but fail in JavaScript?", answer: "Different languages use different regex engines. While JavaScript now supports lookbehinds and named groups, features like possessive quantifiers (*+) and atomic grouping ((?>...)) are unique to PCRE/Java." }
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
    content: "Converting hierarchical JSON data into flat CSV (Comma-Separated Values) format is one of the most common data wrangling tasks in business analytics, data science, and web development. While JSON is the native format for web APIs, NoSQL databases, and application logs, business analysts and spreadsheet tools like Microsoft Excel, Google Sheets, and Tableau require flat tabular structures with rows and columns. Flattening nested JSON into CSV involves complex edge cases: nested object properties must be unrolled into column headers (e.g. `user.address.city` becomes `user_address_city`), nested arrays must be serialized without breaking CSV delimiters, and values containing commas, quotes, or newlines must be properly escaped according to RFC 4180. A major source of frustration when opening CSV files in Microsoft Excel is character encoding: Excel defaults to local legacy encodings unless a UTF-8 Byte Order Mark (BOM: `\\uFEFF`) is prepended to the file. Without BOM, international characters, accented names, and currency symbols display as corrupted text (mojibake). WebUtil's JSON to CSV Converter flattens nested JSON, formats values per RFC 4180, embeds an Excel-compatible UTF-8 BOM, and renders an interactive table preview with instant CSV download—100% in-browser.",
    faqItems: [
      { question: "Why does my CSV export look scrambled in Microsoft Excel, and how does BOM fix it?", answer: "Excel often defaults to legacy system encodings instead of UTF-8. WebUtil adds a UTF-8 Byte Order Mark (\\uFEFF) to the start of the CSV file, forcing Excel to read accents, symbols, and international characters correctly." },
      { question: "How does this tool flatten deeply nested JSON objects and arrays?", answer: "Nested object keys are flattened using underscore notation (e.g. user: { name: 'Alex' } becomes column user_name). Arrays are converted into compact JSON strings within the cell." },
      { question: "What is RFC 4180 and how are quotes and commas escaped in CSV?", answer: "RFC 4180 is the official CSV specification. Any cell containing commas, newlines, or quotation marks is enclosed in double quotes, and internal quotes are escaped by doubling them (\"\")." },
      { question: "Can I convert large JSON API payloads without browser lag?", answer: "Yes. WebUtil's flattening and serialization engine processes thousands of records in milliseconds using optimized array iterators inside your browser." },
      { question: "Is any of my financial or customer JSON data uploaded to a server?", answer: "No. All parsing, flattening, table rendering, and file generation runs client-side in your browser. Nothing is uploaded, logged, or tracked." }
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
    content: "Responsive web design and digital accessibility mandate a flexible typography system that respects user device settings. Pixels (`px`) are absolute units of measurement: 16px always renders as 16 physical pixels on standard displays, regardless of whether a visually impaired user has customized their operating system or browser font size preferences. Hardcoding px values in CSS violates WCAG 2.1 Guideline 1.4.4 (Resize Text). Root em (`rem`) units, by contrast, are relative to the root `<html>` element's font size (defaulting to 16px in all modern browsers). When you specify font sizes, padding, and layout dimensions in rem, your website scales proportionally and harmoniously when users adjust their browser font preferences or zoom levels. Converting px to rem follows the formula: `rem = px / baseFontSize`. For example, at a 16px base, 24px equals 1.5rem, 32px equals 2rem, and 12px equals 0.75rem. WebUtil's CSS px to rem Converter provides real-time bidirectional calculations, an interactive conversion reference table for common design system values, customizable root font sizes (including 10px 62.5% trick setups), and instant CSS code snippets.",
    faqItems: [
      { question: "What is the difference between px, rem, and em units in CSS?", answer: "px is an absolute unit that does not scale. rem is relative to the root <html> font size. em is relative to its immediate parent element's font size, which can compound unpredictably in nested components." },
      { question: "Why is using rem better for web accessibility than px?", answer: "When visually impaired users change their default browser font size from 16px to 24px, layouts built with rem scale up proportionally. Layouts hardcoded with px remain rigid and fail WCAG 1.4.4 criteria." },
      { question: "What is the default base font size in modern web browsers?", answer: "The standard root font size in all modern browsers (Chrome, Safari, Firefox, Edge) is 16 pixels." },
      { question: "How do I calculate rem from px mathematically?", answer: "Divide the target pixel value by the root font size: rem = px / baseFontSize. For example: 20px / 16px = 1.25rem." },
      { question: "What is the CSS 62.5% root font-size trick?", answer: "Setting html { font-size: 62.5%; } resets the base font size to 10px (62.5% of 16px). This makes mental math easy (1.4rem = 14px, 2.4rem = 24px) while preserving accessibility scaling." }
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
    content: "Kubernetes YAML manifests define desired state configurations for containers, pods, deployments, services, ingress controllers, configmaps, and secrets across cloud-native clusters. Because YAML relies strictly on whitespace indentation and lacks runtime type safety, small syntax errors—such as using tabs instead of spaces, misaligned key blocks, invalid API versions, or missing required fields—frequently cause deployment failures during `kubectl apply` in CI/CD pipelines. Catching configuration bugs before committing code saves cluster downtime and prevents pipeline rollbacks. Every valid Kubernetes manifest requires four core top-level fields: `apiVersion` (specifying the Kubernetes API endpoint group), `kind` (the resource type, e.g. Deployment, Service), `metadata` (including name, namespace, and labels), and `spec` (the desired state specification). In addition, security best practices require declaring resource requests and limits, readiness and liveness probes, and non-root security contexts to prevent container escape and cluster starvation. WebUtil's Kubernetes YAML Validator parses manifests against official K8s schema structures, validates syntax and indentation, and checks for required fields entirely in your browser with zero file upload.",
    faqItems: [
      { question: "What required top-level fields must every Kubernetes manifest contain?", answer: "Every valid Kubernetes manifest must define: apiVersion (e.g. apps/v1), kind (e.g. Deployment), metadata (with at least a name), and spec (describing the desired resource state)." },
      { question: "What are the most common Kubernetes YAML syntax mistakes?", answer: "The most frequent mistakes are: 1) Using tabs instead of spaces, 2) Inconsistent indentation on list items (-), 3) Missing required fields like selector.matchLabels, and 4) Mismatched port names." },
      { question: "How does client-side validation prevent cluster deployment failures?", answer: "Validating manifests before running kubectl apply or pushing to CI/CD pipelines catches syntax errors and malformed specs before they can trigger failed rollout deployments in production." },
      { question: "What is the difference between apiVersion 'apps/v1' and 'v1'?", answer: "Core resources like Pods, Services, and ConfigMaps belong to the core API group 'v1'. Workload controllers like Deployments, DaemonSets, and StatefulSets belong to 'apps/v1'." },
      { question: "Are my Kubernetes secrets and manifests safe in this validator?", answer: "Yes. All validation runs client-side in your browser's JavaScript sandbox. No manifests, secret tokens, or configurations are ever sent to an external server." }
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
    content: "Docker Compose is the standard configuration tool for defining and running multi-container Docker applications locally and in production. Defined in `docker-compose.yml` files, Docker Compose configurations coordinate application services, database containers, volume persistence, internal networks, and environment variables into a single reproducible stack. Because Docker Compose files use YAML, syntax errors like tab characters, incorrect port mapping types (where unquoted `80:80` can be misparsed as base-60 sexagesimal numbers), missing service images or build contexts, and malformed volume mounts can prevent containers from launching or cause subtle networking failures. A Docker Compose validator inspects the structural hierarchy of your compose file, checks service configurations (`services`), verifies network definitions (`networks`), inspects named volumes (`volumes`), and validates port string formats. WebUtil's Docker Compose Validator validates your configuration against modern Compose specifications in real time directly in your browser, keeping your container architecture and environment secrets strictly confidential.",
    faqItems: [
      { question: "What are the essential top-level keys in a docker-compose.yml file?", answer: "A modern Docker Compose file requires a services block defining your containers. Optional top-level blocks include networks, volumes, secrets, and configs." },
      { question: "Why does port mapping in Docker Compose sometimes fail or get parsed as octal?", answer: "In YAML, unquoted numbers like 80:80 or 22:22 can be interpreted by some YAML parsers as sexagesimal (base-60) numbers. Always quote your port mappings as strings: \"8080:80\"." },
      { question: "What is the difference between Compose File Version 2, 3, and the Compose Specification?", answer: "Versions 2 and 3 required a top-level 'version:' attribute. The modern Compose Specification (Docker Compose V2) deprecates the version attribute and provides a unified schema across local dev and cloud deployments." },
      { question: "How should environment variables and secrets be handled in Docker Compose?", answer: "Use an .env file for default configuration and Docker Compose 'secrets:' for sensitive credentials rather than hardcoding passwords directly in the YAML file." },
      { question: "Is my compose file or environment configuration uploaded anywhere?", answer: "No. WebUtil parses and validates Docker Compose files 100% locally in your browser. Nothing is sent over the network." }
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
    content: "GitHub Actions is the premier CI/CD automation platform integrated natively into GitHub repositories, executing automated build, test, lint, and deployment pipelines. Workflows are configured using YAML files located in the `.github/workflows/` directory. Each workflow defines triggers (`on: [push, pull_request]`), jobs running on virtual runners (`runs-on: ubuntu-latest`), execution steps (`steps`), action references (`uses: actions/checkout@v4`), and shell commands (`run`). Because GitHub Actions charges for runner compute minutes and pipeline execution happens asynchronously after a git push, syntax mistakes—such as indentation errors in matrix strategies, malformed expression syntax (`${{ ... }}`), or invalid step keys—cause frustrating build failures and wasted developer time. Validating workflow YAML files before committing guarantees that job dependencies (`needs`), trigger filters, and action parameters conform to GitHub's workflow schema. WebUtil's GitHub Actions Validator checks workflow syntax, verifies trigger and job hierarchies, and checks step declarations entirely in your browser with zero data transmission.",
    faqItems: [
      { question: "What is the required structure of a GitHub Actions workflow YAML file?", answer: "A valid workflow requires: 'name:' (optional but recommended), 'on:' (trigger events), and 'jobs:' containing one or more jobs with 'runs-on:' and 'steps:' arrays." },
      { question: "What are the most common GitHub Actions syntax errors?", answer: "Common errors include: incorrect indentation under 'steps:', forgetting the pipe character (|) for multiline 'run:' scripts, malformed expression brackets ${{ }}, and invalid action names." },
      { question: "How do trigger events (push, pull_request, schedule) work in workflow syntax?", answer: "The 'on:' block defines when workflows run. You can filter by branches, tags, paths, pull request activity types, or cron schedules (e.g. schedule: - cron: '0 0 * * *')." },
      { question: "How do I format multiline bash scripts under 'run' steps?", answer: "Use the YAML literal block scalar indicator '|' under run: to execute multi-line shell commands without needing continuation backslashes." },
      { question: "Are my CI/CD deployment scripts and secret references safe?", answer: "Yes. Validation runs entirely inside your browser. No workflow definitions, repository names, or secret identifiers are ever sent to any server." }
    ],
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
    content: "Managing token lifetimes and session expiration is a foundational security requirement in modern OAuth 2.0, OpenID Connect, and JWT-based authentication architectures. In RFC 7519, JSON Web Tokens convey timing constraints using standard Unix timestamp claims: `exp` (Expiration Time, defining when the token becomes invalid), `iat` (Issued At, recording generation time), and `nbf` (Not Before, declaring when the token starts being valid). Understanding token expiration is critical for front-end developers implementing refresh token rotation, silent token renewal, and automatic session logout. If a token expires while an API request is in-flight, servers return 401 Unauthorized errors that break user workflows. Furthermore, distributed authentication systems must account for clock skew—small timing discrepancies between client devices and authentication servers—typically accommodating a 30 to 60-second grace window. WebUtil's JWT Expiration Checker decodes any JWT token instantly, computes whether the token is currently valid or expired, calculates exact remaining time down to the second, and visualizes the timeline locally without transmitting your credentials.",
    faqItems: [
      { question: "How is expiration time (exp) stored inside a JSON Web Token?", answer: "The 'exp' claim is stored as a NumericDate: a Unix epoch timestamp representing the number of seconds since January 1, 1970 UTC." },
      { question: "What is clock skew and why do authentication servers allow tolerance?", answer: "Clock skew refers to slight time differences between servers. Auth libraries typically allow a 30-60 second margin when checking 'exp' and 'nbf' to prevent valid tokens from being rejected due to server time drift." },
      { question: "What is the difference between exp, nbf, and iat claims in a JWT?", answer: "'exp' defines when the token expires, 'nbf' defines the earliest time the token can be accepted, and 'iat' records the exact time the token was issued." },
      { question: "How should single-page applications handle expired JWTs?", answer: "SPAs should track token expiration and request a fresh access token using a secure refresh token before the current access token expires, preventing user session interruptions." },
      { question: "Is checking JWT expiration in the browser secure without server verification?", answer: "Client-side expiration checks are great for UI session timers, but production APIs must always independently verify the cryptographic signature and expiration on the backend." }
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
    content: "UUID Version 7, officially standardized in RFC 9562 (updating RFC 4122), is the modern evolution of Universally Unique Identifiers designed specifically for high-performance database primary keys. Traditional UUID v4 identifiers are completely random. When random UUIDs are inserted into relational databases (such as PostgreSQL, MySQL InnoDB, or SQLite) as primary keys, they cause catastrophic B-Tree index fragmentation: new rows are scattered randomly across disk pages, causing frequent page splits, high I/O write amplification, and degraded cache hit ratios. UUID v7 solves this bottleneck by encoding a 48-bit millisecond Unix timestamp in the most significant bits, followed by 74 bits of cryptographically secure random data. Because the timestamp comes first, UUID v7 identifiers are naturally time-ordered and sortable: new database records are appended sequentially to the end of the B-Tree index, preserving write throughput and index compactness while retaining global uniqueness and distributed generation capabilities. WebUtil's UUID v7 Generator generates single or bulk RFC 9562 time-ordered UUIDs instantly in your browser with millisecond accuracy and zero server communication.",
    faqItems: [
      { question: "What is UUID v7 and how is it standardized by RFC 9562?", answer: "UUID v7 is a time-ordered, 128-bit universally unique identifier standardized by RFC 9562. It combines a 48-bit Unix timestamp with 74 random bits, making it sortable by generation time." },
      { question: "Why is UUID v7 vastly superior to UUID v4 for database primary keys?", answer: "UUID v4 is completely random, causing B-Tree index fragmentation, page splits, and slow database writes. UUID v7 is sequential, enabling sequential disk writes and fast index lookups like auto-incrementing IDs." },
      { question: "Can someone deduce the creation time from a UUID v7 identifier?", answer: "Yes. The first 48 bits encode the Unix epoch timestamp in milliseconds, allowing anyone to extract the exact creation date and time from the UUID string." },
      { question: "Are UUID v7 values compatible with existing UUID column types in Postgres and MySQL?", answer: "Yes. UUID v7 uses the identical 128-bit (36-character hyphenated) binary structure as UUID v4 and stores seamlessly in native UUID columns in PostgreSQL, MySQL, and SQLite." },
      { question: "Can I generate batches of UUID v7 identifiers at once?", answer: "Yes. WebUtil allows you to generate single or bulk batches of UUID v7 IDs with one-click copying to your clipboard." }
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
    content: "Accurate text metrics and character counting are essential for content writers, software developers, technical editors, and SEO professionals. Whether you are crafting meta descriptions that must fit Google's 160-character SERP snippet limit, authoring social media posts for Twitter/X (280 characters) or LinkedIn (3,000 characters), or formatting code comments and documentation, real-time character analysis prevents truncation. For digital marketing and SEO, content length correlates strongly with search engine ranking: comprehensive pillar articles typically require 1,500 to 2,500 words to establish topical authority, while blog introductions benefit from punchy, concise phrasing. Furthermore, estimating reading time (calculated at an average adult silent reading speed of 200 to 250 words per minute) and speaking time (130 to 150 words per minute) gives audiences clear expectations before engaging with long-form content. WebUtil's Word & Character Counter provides real-time character counts (with and without spaces), word counts, sentence counts, paragraph counts, reading time, and speaking time—running entirely client-side with complete privacy.",
    faqItems: [
      { question: "How is reading time calculated for articles and blog posts?", answer: "Reading time is calculated by dividing total word count by average adult reading speed (typically 200 to 250 words per minute). A 1,000-word article takes approximately 4-5 minutes to read." },
      { question: "What is the ideal word count for SEO blog articles in 2026?", answer: "Top-ranking informational guides typically range between 1,500 and 2,500 words of thorough, high-value content. However, clarity and search-intent fulfillment always outweigh word count alone." },
      { question: "What are character limits for popular social media platforms?", answer: "Twitter/X allows 280 characters (for standard accounts), LinkedIn posts allow 3,000 characters, Instagram captions allow 2,200 characters, and Google meta descriptions display ~155-160 characters." },
      { question: "How does the counter distinguish words, hyphenated compounds, and numbers?", answer: "WebUtil uses Unicode-aware regex matching whitespace boundaries. Hyphenated compound words (e.g. state-of-the-art) and standalone numbers are counted accurately according to standard publishing rules." },
      { question: "Is the text I paste into this word counter private and secure?", answer: "Yes. All text processing occurs in your browser's local memory. No essays, articles, or confidential documents are uploaded to any server or logged." }
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
    content: "Deduplicating lists and cleaning up multi-line text is an indispensable utility for data analysts, software developers, system administrators, and digital marketers. When dealing with exported customer lists, IP address blocklists, database query dumps, email directories, or server access logs, duplicate entries inflate file sizes, skew analytical metrics, and lead to repeated communications or redundant processing. Deduplication algorithms typically use a hash set data structure (`Set` in JavaScript) to achieve O(N) linear time complexity, checking each line against previously encountered values. In addition to removing identical lines, real-world data cleaning requires flexible formatting options: trimming leading and trailing whitespace, removing blank lines, choosing between case-sensitive and case-insensitive deduplication, and sorting remaining unique lines alphabetically (A to Z) or in reverse (Z to A). WebUtil's Remove Duplicate Lines tool processes thousands of lines instantly in your browser, providing instant before-and-after line counts, duplicate removal statistics, and one-click copying—all 100% client-side.",
    faqItems: [
      { question: "How does the duplicate line remover handle case sensitivity?", answer: "You can toggle case-sensitive mode. In case-sensitive mode, 'Apple' and 'apple' are treated as unique. In case-insensitive mode, they are identified as duplicates and deduplicated." },
      { question: "Can I preserve the original line order while removing duplicates?", answer: "Yes. By default, WebUtil preserves the original appearance order of lines, removing only subsequent repeated occurrences." },
      { question: "How do I remove empty lines or trim whitespace from my list?", answer: "Enable the 'Trim Whitespace' and 'Remove Empty Lines' options to strip leading/trailing spaces and discard blank rows before deduplicating." },
      { question: "Can this tool handle lists containing tens of thousands of lines?", answer: "Yes. Utilizing native JavaScript Set hashing, WebUtil can process tens of thousands of lines in milliseconds without freezing your browser." },
      { question: "Is my confidential data or email list secure?", answer: "Yes. All deduplication executes locally on your computer. No lists, contacts, or data are transmitted over the internet." }
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
    content: "Sharing Wi-Fi network credentials using a QR code is the modern, seamless standard for homes, offices, cafes, and conference venues. Typing long, complex 20+ character WPA2 or WPA3 passwords on mobile virtual keyboards is notoriously frustrating and error-prone. The Wi-Fi QR code standard, pioneered by the ZXing project and supported natively by all modern iOS (iOS 11+) and Android (Android 9+) camera apps, encodes network configuration in a standardized URI format: `WIFI:S:MyNetwork;T:WPA;P:MyPassword;H:false;;`. When a smartphone camera scans this QR code, the operating system decodes the SSID, authentication protocol (WPA/WPA2/WPA3, WEP, or Open), and network key, displaying a native prompt: 'Join MyNetwork Wi-Fi Network?'. Tapping the prompt connects the device automatically without revealing the password or requiring manual entry. Crucially, Wi-Fi passwords often contain special characters like semicolons, colons, backslashes, and quotation marks, which must be escaped properly per IEEE 802.11 standards to prevent connection failures. WebUtil's Wi-Fi QR Code Generator produces high-resolution, vector-accurate QR codes with proper escaping, hidden SSID support, and print-ready downloads—running 100% client-side so your network passwords remain strictly private.",
    faqItems: [
      { question: "How does scanning a Wi-Fi QR code connect a phone without typing a password?", answer: "The QR code encodes your network SSID, encryption type, and password in standard ZXing format. When scanned, iOS and Android cameras automatically interpret this configuration and prompt you to join the network." },
      { question: "Does this QR code work on both iPhones (iOS) and Android devices?", answer: "Yes. All modern iPhones running iOS 11 or later and Android devices running Android 9 or later natively scan and connect to Wi-Fi QR codes using their default camera apps." },
      { question: "What Wi-Fi security protocols are supported (WPA2, WPA3, WEP)?", answer: "WebUtil supports WPA/WPA2/WPA3 (the modern standard for virtually all routers), legacy WEP, and Open (unencrypted) networks." },
      { question: "Can I create a QR code for a hidden Wi-Fi network (hidden SSID)?", answer: "Yes. Check the 'Hidden Network' option. This sets the H:true parameter in the QR code so devices scan for non-broadcasting SSIDs." },
      { question: "Is my home or office Wi-Fi password stored on your servers?", answer: "No. The QR code is generated entirely in your browser using client-side JavaScript. Your Wi-Fi network name and password never touch any server." },
      { question: "What is the best way to print or display a Wi-Fi QR code for guests?", answer: "Download the generated QR code, print it on paper or cardstock, and frame it near your router, living room, office lobby, or cafe counter for easy guest scanning." }
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
    content: "Securing your wireless router with a high-entropy password is essential for protecting your local network, smart home IoT devices, and personal computers from unauthorized access. The IEEE 802.11i standard governs Wi-Fi Protected Access (WPA2 and WPA3). Under WPA2-Personal, the wireless router and client devices perform a 4-Way Handshake to derive encryption keys from the Pre-Shared Key (PSK). If a router uses a weak, dictionary-based password (like words found in common dictionaries, birth dates, or short phrases), an attacker can capture the 4-Way Handshake over the air and execute an offline dictionary attack using GPU clusters without ever connecting to your router. To prevent offline cracking, Wi-Fi passwords must be long (16 to 24+ characters) and contain high cryptographic entropy. However, typing complex symbols on gaming consoles, smart TVs, and IoT appliances can be painful. WebUtil's Secure WPA2 Password Generator creates maximum-entropy Wi-Fi passwords that deliberately exclude ambiguous, easily confused characters (`1, l, I, 0, O`) while preserving high cryptographic randomness via the Web Crypto API—ensuring both unbreakable security and effortless manual entry.",
    faqItems: [
      { question: "What makes a Wi-Fi router password secure against brute force and dictionary attacks?", answer: "A secure Wi-Fi password should be at least 16 to 20 characters long with high randomness. Because attackers can capture 4-Way Handshakes and crack passwords offline, length and entropy are critical." },
      { question: "Why does this generator exclude ambiguous characters like 0, O, 1, and l?", answer: "Excluding ambiguous characters prevents frustrating typing mistakes when manually entering passwords on smart TVs, game consoles, and IoT devices that have small virtual keyboards." },
      { question: "What is the maximum allowed password length for WPA2 and WPA3 networks?", answer: "Under the IEEE 802.11 standard, WPA2 and WPA3 Pre-Shared Keys can be up to 63 ASCII characters long (or 64 hexadecimal characters)." },
      { question: "How does a strong Wi-Fi password protect my smart home IoT devices?", answer: "Many IoT devices (security cameras, smart plugs, thermostats) have limited built-in firewalls. A strong Wi-Fi password prevents external attackers from joining your local subnet and probing vulnerable smart devices." },
      { question: "Are these generated router passwords stored anywhere?", answer: "No. All passwords are generated locally in your browser using the Web Crypto API. Once you leave the page, the password disappears from memory." }
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
    content: "Quick Response (QR) codes, invented in 1994 by Masahiro Hara of Denso Wave and standardized under ISO/IEC 18004, are two-dimensional matrix barcodes capable of storing over 7,000 numeric characters or nearly 3,000 alphanumeric characters. Unlike traditional 1D barcodes that encode data in linear vertical bars, QR codes store information in both horizontal and vertical dimensions using black and white square modules, read by digital optical sensors and camera software. A core engineering strength of QR codes is Reed-Solomon error correction: data is redundantly encoded across four standard error correction levels—Level L (7% recovery), Level M (15% recovery), Level Q (25% recovery), and Level H (30% recovery). Higher error correction allows QR codes to be read reliably even if the physical print is partially damaged, smudged, or covered by a logo. In modern business, QR codes connect physical marketing materials (posters, business cards, product packaging, menus) directly to digital URLs, vCard contact information, email drafts, and payment links. WebUtil's QR Code Generator creates clean, high-resolution vector SVG and PNG QR codes entirely in your browser with zero tracking, no expiry dates, and complete privacy.",
    faqItems: [
      { question: "How do QR codes work and how much data can they store?", answer: "QR codes store data in a two-dimensional grid of modules. Depending on the version and encoding mode, a QR code can store up to 7,089 numeric characters or 4,296 alphanumeric characters." },
      { question: "What are Reed-Solomon error correction levels and which should I choose?", answer: "Error correction allows damaged QR codes to scan: Level L (7%), Level M (15%), Level Q (25%), and Level H (30%). Level M is ideal for standard screens and paper, while Level H is recommended for outdoor posters or logos." },
      { question: "Do QR codes generated by WebUtil ever expire or require a subscription?", answer: "No. WebUtil generates static QR codes that encode your data directly into the visual pattern. They never expire, require no subscription, and work forever without third-party redirects." },
      { question: "Why is SVG format better than PNG for printing QR codes on signage?", answer: "SVG is an XML-based vector graphic format that scales infinitely without blurriness or pixelation, ensuring sharp, scannable prints on everything from business cards to giant billboards." },
      { question: "Are my QR code URLs or messages tracked by WebUtil?", answer: "No. All QR generation executes 100% client-side in your browser. WebUtil includes no tracking redirects, analytics hooks, or URL shorteners." }
    ],
  },
];

export function getToolDataById(id: string): ToolData | undefined {
  return toolsData.find(t => t.id === id);
}

export function getRelatedToolData(toolData: ToolData): ToolData[] {
  return toolData.relatedTools.map(id => getToolDataById(id)).filter(Boolean) as ToolData[];
}
