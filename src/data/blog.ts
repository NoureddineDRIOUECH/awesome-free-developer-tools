export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  readTime: string;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogContent {
  title: string;
  description: string;
  date: Date;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "json-formatting-guide",
    "title": "How to Format JSON Properly: A Complete Guide",
    "description": "Learn how to format JSON data correctly with best practices, common patterns, and troubleshooting tips for developers.",
    date: new Date("2025-12-15T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "5 min read"
  },
  {
    "slug": "common-json-errors",
    "title": "Common JSON Errors and How to Fix Them",
    "description": "A comprehensive guide to the most frequent JSON errors developers encounter and step-by-step solutions to fix them.",
    date: new Date("2025-12-10T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "6 min read"
  },
  {
    "slug": "url-encoding-decoding",
    "title": "URL Encoding and Decoding: What Every Developer Should Know",
    "description": "Understand how URL encoding works, why it matters for web development, and how to properly encode and decode URLs.",
    date: new Date("2025-12-05T00:00:00.000Z"),
    "category": "Encoders",
    "readTime": "4 min read"
  },
  {
    "slug": "base64-encoding-methods",
    "title": "Base64 Encoding: Methods, Use Cases, and Best Practices",
    "description": "A deep dive into Base64 encoding, when to use it, common pitfalls, and how it works under the hood.",
    date: new Date("2025-11-28T00:00:00.000Z"),
    "category": "Encoders",
    "readTime": "5 min read"
  },
  {
    "slug": "password-security-best-practices",
    "title": "Password Security Best Practices for 2026",
    "description": "Learn how to create and manage secure passwords, understand password strength metrics, and protect against common attacks.",
    date: new Date("2025-11-20T00:00:00.000Z"),
    "category": "Security",
    "readTime": "7 min read"
  },
  {
    "slug": "color-converter-guide",
    "title": "Color Converter Guide: HEX, RGB, and HSL Explained",
    "description": "A complete guide to understanding color models in web development, and how to convert between HEX, RGB, and HSL formats.",
    date: new Date("2025-11-15T00:00:00.000Z"),
    "category": "Converters",
    "readTime": "4 min read"
  },
  {
    "slug": "uuid-guide",
    "title": "UUIDs Explained: What They Are and How to Use Them",
    "description": "Everything you need to know about UUIDs — how they work, different versions, and when to use each type in your applications.",
    date: new Date("2025-11-10T00:00:00.000Z"),
    "category": "Generators",
    "readTime": "5 min read"
  },
  {
    "slug": "online-tools-security",
    "title": "Understanding Online Tool Security: Why Client-Side Matters",
    "description": "Discover the security implications of using online developer tools and why client-side processing is crucial for data privacy.",
    date: new Date("2025-11-05T00:00:00.000Z"),
    "category": "Security",
    "readTime": "6 min read"
  },
  {
    "slug": "json-vs-xml",
    "title": "JSON vs XML: Which Data Format Should You Use in 2026?",
    "description": "Compare JSON and XML data formats for APIs, configuration, and data exchange. Learn when to use JSON vs XML and why JSON dominates modern web development.",
    date: new Date("2026-03-01T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "5 min read"
  },
  {
    "slug": "json-schema-guide",
    "title": "JSON Schema Guide: Validate Your JSON Data Structure",
    "description": "Learn JSON Schema fundamentals — how to define validation rules, enforce data types, and ensure your JSON data meets structural requirements.",
    date: new Date("2026-02-15T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "6 min read"
  },
  {
    "slug": "how-apis-use-json",
    "title": "How APIs Use JSON: REST, GraphQL, and WebSocket Data Formats",
    "description": "A developer-focused guide to how modern APIs use JSON for request/response payloads, error handling, pagination, and real-time communication.",
    date: new Date("2026-01-20T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "7 min read"
  },
  {
    "slug": "hash-generator-guide",
    "title": "Hash Generator Guide: MD5, SHA-1, SHA-256, and SHA-512 Explained",
    "description": "Learn how cryptographic hash functions work, the differences between MD5, SHA-1, SHA-256, and SHA-512, and when to use each.",
    date: new Date("2026-04-01T00:00:00.000Z"),
    "category": "Security",
    "readTime": "6 min read"
  },
  {
    "slug": "sql-formatting-guide",
    "title": "SQL Formatter Guide: Write Clean, Readable SQL Queries",
    "description": "Learn how to format SQL queries for better readability, maintainability, and team collaboration.",
    date: new Date("2026-04-05T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "5 min read"
  },
  {
    "slug": "xml-formatting-guide",
    "title": "XML Formatter Guide: How to Format, Validate, and Beautify XML",
    "description": "Master XML formatting with best practices for indentation, validation, and comparing XML vs JSON.",
    date: new Date("2026-04-10T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "6 min read"
  },
  {
    "slug": "yaml-converter-guide",
    "title": "YAML Converter Guide: Convert Between YAML and JSON",
    "description": "Learn how to convert YAML to JSON and JSON to YAML, understand YAML syntax, and when to use each format.",
    date: new Date("2026-04-15T00:00:00.000Z"),
    "category": "Converters",
    "readTime": "5 min read"
  },
  {
    "slug": "html-entities-guide",
    "title": "HTML Entities Guide: Encode Special Characters for Safe Web Rendering",
    "description": "Learn how HTML entities work, why they matter for security, and how to encode and decode special characters.",
    date: new Date("2026-04-20T00:00:00.000Z"),
    "category": "Encoders",
    "readTime": "5 min read"
  },
  {
    "slug": "case-converter-guide",
    "title": "Case Converter Guide: camelCase, snake_case, kebab-case and More",
    "description": "Master text case conversion between camelCase, PascalCase, snake_case, kebab-case, and other naming conventions.",
    date: new Date("2026-04-25T00:00:00.000Z"),
    "category": "Text",
    "readTime": "5 min read"
  },
  {
    "slug": "markdown-guide",
    "title": "Markdown Preview Guide: Write and Preview Markdown Like a Pro",
    "description": "Learn Markdown syntax from basics to advanced — headings, lists, tables, code blocks, and more.",
    date: new Date("2026-05-01T00:00:00.000Z"),
    "category": "Text",
    "readTime": "6 min read"
  },
  {
    "slug": "text-diff-guide",
    "title": "Text Diff Guide: Compare Texts and Find Differences Like a Developer",
    "description": "Learn how text diff checkers work for comparing code and documents, and how to interpret diff output.",
    date: new Date("2026-05-05T00:00:00.000Z"),
    "category": "Text",
    "readTime": "5 min read"
  },
  {
    "slug": "image-converter-guide",
    "title": "Image Converter Guide: Convert Between PNG, JPEG, WebP, and GIF",
    "description": "Learn how to convert images between formats in your browser, and compare PNG vs JPEG vs WebP.",
    date: new Date("2026-05-10T00:00:00.000Z"),
    "category": "Images",
    "readTime": "5 min read"
  },
  {
    "slug": "lorem-ipsum-guide",
    "title": "Lorem Ipsum Generator Guide: Generate Placeholder Text for Designs",
    "description": "Learn how to use Lorem Ipsum placeholder text in web design, print layout, and UI mockups.",
    date: new Date("2026-05-15T00:00:00.000Z"),
    "category": "Generators",
    "readTime": "4 min read"
  },
  {
    "slug": "jwt-authentication-explained",
    "title": "JWT Authentication Explained: How JSON Web Tokens Work",
    "description": "A complete guide to JWT authentication — learn how JSON Web Tokens work, their structure, how they secure APIs, and best practices for implementation.",
    date: new Date("2026-06-01T00:00:00.000Z"),
    "category": "Security",
    "readTime": "7 min read"
  },
  {
    "slug": "json-vs-yaml-for-apis",
    "title": "JSON vs YAML for APIs: Choosing the Right Data Format",
    "description": "Compare JSON and YAML for API development — learn when to use each format, their strengths and weaknesses, and best practices for API design.",
    date: new Date("2026-06-05T00:00:00.000Z"),
    "category": "Converters",
    "readTime": "6 min read"
  },
  {
    "slug": "uuid-v4-vs-uuid-v7",
    "title": "UUID v4 vs UUID v7: Choosing the Right UUID for Your Application",
    "description": "Compare UUID v4 and UUID v7 — understand the differences between random and time-ordered UUIDs, database performance implications, and when to use each version.",
    date: new Date("2026-06-10T00:00:00.000Z"),
    "category": "Generators",
    "readTime": "5 min read"
  },
  {
    "slug": "regex-tutorial",
    "title": "Regex Tutorial for Beginners: Learn Regular Expressions with Examples",
    "description": "A complete regex tutorial for beginners. Learn how to use regular expressions for pattern matching, text search, and data validation with practical examples.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    "category": "Text",
    "readTime": "6 min read"
  },
  {
    "slug": "css-units-guide",
    "title": "CSS Units Guide: px, rem, em, vh, vw, and More Explained",
    "description": "A complete guide to CSS units. Learn the difference between px, rem, em, vh, vw, and other CSS units. Understand when to use each unit for responsive web design.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    "category": "Converters",
    "readTime": "6 min read"
  },
  {
    "slug": "docker-compose-tutorial",
    "title": "Docker Compose Tutorial for Beginners: Define and Run Multi-Container Apps",
    "description": "Learn Docker Compose from scratch. Define multi-container applications, manage services, networks, and volumes with docker-compose.yml files.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    "category": "Web",
    "readTime": "6 min read"
  },
  {
    "slug": "rest-api-design",
    "title": "REST API Design Best Practices: Build Better Web APIs in 2026",
    "description": "Learn REST API design best practices including resource naming, HTTP methods, status codes, pagination, error handling, and versioning strategies.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    "category": "Web",
    "readTime": "7 min read"
  },
  {
    "slug": "how-qr-codes-work",
    "title": "How QR Codes Work: A Complete Guide to QR Code Technology",
    "description": "Learn how QR codes work — from error correction and data encoding to structure and generation. Understand the technology behind every QR code you scan.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    "category": "Generators",
    "readTime": "5 min read"
  },
  {
    "slug": "common-jwt-errors",
    "title": "Common JWT Errors and How to Debug Them",
    "description": "A practical guide to debugging JWT parsing errors — base64 decoding issues, Bearer prefix problems, signature mismatches, and how to fix them.",
    date: new Date("2026-06-28T00:00:00.000Z"),
    "category": "Security",
    "readTime": "5 min read"
  },
  {
    "slug": "json-compact-pretty-print",
    "title": "JSON Compact Pretty-Print: Smart Formatting Between Minified and Expanded",
    "description": "Learn how smart JSON formatting works — keeping small objects on one line while expanding large ones. A practical guide to compact pretty-print techniques.",
    date: new Date("2026-06-30T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "4 min read"
  },
  {
    "slug": "json-to-csv-guide",
    "title": "JSON to CSV Conversion: The Complete Developer's Guide",
    "description": "Learn how to convert JSON to CSV in JavaScript, Python, and online tools. Handle nested objects, arrays, and large datasets efficiently.",
    date: new Date("2026-07-01T00:00:00.000Z"),
    "category": "Formatters",
    "readTime": "8 min read"
  },
  {
    "slug": "kubernetes-yaml-guide",
    "title": "Kubernetes YAML: Writing Production-Grade Manifests",
    "description": "A complete guide to writing Kubernetes YAML manifests — Pods, Deployments, Services, ConfigMaps, and validation best practices.",
    date: new Date("2026-07-02T00:00:00.000Z"),
    "category": "Web",
    "readTime": "9 min read"
  },
  {
    "slug": "github-actions-guide",
    "title": "GitHub Actions CI/CD: From Zero to Production Pipeline",
    "description": "Learn GitHub Actions from scratch — workflow syntax, build/test/deploy pipelines, matrix builds, and YAML validation.",
    date: new Date("2026-07-03T00:00:00.000Z"),
    "category": "Web",
    "readTime": "10 min read"
  },
  {
    "slug": "jwt-refresh-tokens",
    "title": "JWT Refresh Token Rotation: Implementation Guide",
    "description": "A practical guide to JWT refresh tokens — token rotation, expiration strategies, secure storage, and preventing replay attacks.",
    date: new Date("2026-07-04T00:00:00.000Z"),
    "category": "Security",
    "readTime": "8 min read"
  },
  {
    "slug": "wi-fi-qr-codes",
    "title": "Wi-Fi QR Codes: Generate and Share Network Access",
    "description": "Learn how Wi-Fi QR codes work, how to generate them for WPA2 and WPA3 networks, and best practices for secure sharing.",
    date: new Date("2026-07-05T00:00:00.000Z"),
    "category": "Generators",
    "readTime": "7 min read"
  },
  {
    "slug": "word-counter-guide",
    "title": "Word Counter Guide: Track Writing Metrics Like a Pro",
    "description": "A complete guide to word counting — why word count matters for SEO, technical writing, and content creation. Learn reading time estimation.",
    date: new Date("2026-07-06T00:00:00.000Z"),
    "category": "Text",
    "readTime": "7 min read"
  },
  {
    "slug": "remove-duplicate-lines-guide",
    "title": "Remove Duplicate Lines: Complete Developer's Guide",
    "description": "Learn how to remove duplicate lines from text — deduplication strategies, sorting, command-line alternatives, and online tools.",
    date: new Date("2026-07-07T00:00:00.000Z"),
    "category": "Text",
    "readTime": "7 min read"
  },
  {
    "slug": "pdf-merger-guide",
    "title": "How to Merge PDF Files Privately in Your Browser (No Server Uploads)",
    "description": "Learn how to combine and merge multiple PDF documents into a single file directly in your browser with zero server uploads, no file size limits, and 100% privacy.",
    date: new Date("2026-10-15T00:00:00.000Z"),
    "category": "Converters",
    "readTime": "7 min read"
  },
  {
    "slug": "remove-exif-data-guide",
    "title": "How to Remove GPS Location and EXIF Metadata from Photos Before Sharing",
    "description": "Learn how to inspect and strip hidden EXIF metadata, camera settings, and GPS location coordinates from photos before uploading to marketplaces and social media.",
    date: new Date("2026-10-16T00:00:00.000Z"),
    "category": "Images",
    "readTime": "8 min read"
  }
];

export const blogContent: Record<string, BlogContent> = {
  "json-formatting-guide": {
    title: "How to Format JSON Properly: A Complete Developer Guide",
    description: "Learn how to format, indent, and beautify JSON data like a pro. Covers RFC 8259 standards, CLI tools (jq), compact formatting, and memory handling for large datasets.",
    date: new Date("2025-12-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Anatomy of RFC 8259 Standard JSON",
        body: "JSON (JavaScript Object Notation) was popularized by Douglas Crockford in the early 2000s and is formalized under IETF RFC 8259. A valid JSON document consists of only two structural forms: a collection of name/value pairs (an object) or an ordered list of values (an array).\n\nValues in JSON are strictly limited to six primitive types: strings (double-quoted UTF-8), numbers (integer or floating point), booleans (true or false), null, objects, and arrays. Modern JSON formatting is not merely an aesthetic choice; properly formatted JSON directly prevents bugs during collaborative code reviews, accelerates API debugging, and ensures seamless data exchange across diverse programming environments."
      },
      {
        heading: "2. Indentation Standards: 2 Spaces vs 4 Spaces vs Tabs",
        body: "Choosing an indentation standard is one of the most debated topics among engineering teams. While standard JSON parsers ignore whitespace outside of string literals, human readability requires consistency.\n\n- 2 Spaces: The industry standard for modern web development, frontend frameworks, and Node.js ecosystems (Google, Airbnb, and Prettier default). Ideal for deeply nested objects because it conserves horizontal screen space.\n- 4 Spaces: Popular in backend languages such as Python, Java, and C# where 4-space indentation is traditional.\n- Tabs: Rare in JSON configuration files, but preferred by developers who require customizable visual indentation widths for visual accessibility.\n- Minified (0 Spaces): Strips all unnecessary newlines and whitespace. Essential for production network transport over HTTP to reduce payload size by 20% to 40%."
      },
      {
        heading: "3. Compact Pretty-Print: Formatting Dense Arrays of Objects",
        body: "Standard JSON beautifiers format every single object key on its own separate line. When dealing with arrays containing hundreds of small, uniform objects (such as geographical coordinates or transaction logs), standard expansion can produce documents with tens of thousands of lines that are difficult to scroll through.\n\n```json\n// Compact Pretty-Print Format:\n[\n  { \"id\": 1, \"lat\": 37.7749, \"lng\": -122.4194, \"city\": \"San Francisco\" },\n  { \"id\": 2, \"lat\": 40.7128, \"lng\": -74.0060, \"city\": \"New York\" },\n  { \"id\": 3, \"lat\": 51.5074, \"lng\": -0.1278, \"city\": \"London\" }\n]\n```\n\nCompact pretty-printing preserves one line per record while retaining 2-space indentation for outer containers, allowing developers to visually audit tabular datasets effortlessly."
      },
      {
        heading: "4. CLI JSON Formatting: Mastering jq, Python, and Node",
        body: "Software engineers frequently need to format and query JSON files directly from terminal environments and automated bash scripts:\n\n```bash\n# Format a file with jq (pretty-print with 2 spaces)\njq . input.json > formatted.json\n\n# Format using Python's built-in module (no dependencies required)\npython3 -m json.tool input.json formatted.json\n\n# Minify JSON via jq\njq -c . input.json > minified.json\n\n# Format directly from cURL in Bash\ncurl -s https://api.github.com/users/octocat | jq .\n```\n\nLearning these CLI utilities streamlines automated debugging during server triage, container deployment, and shell scripting."
      },
      {
        heading: "5. Handling Huge JSON Files (50MB+) Without Crashing Browser Memory",
        body: "Formatting massive JSON dumps (such as database exports or telemetry logs exceeding 50MB) can cause typical web tools and text editors to freeze or crash due to DOM rendering bottlenecks.\n\n- In Node.js, avoid reading the entire file with JSON.parse(fs.readFileSync('huge.json')). Instead, use streaming parsers like `stream-json` or `JSONStream` to process records item by item.\n- In the browser, avoid rendering millions of HTML elements at once. Virtualized windowing and web workers are essential to keep the main UI thread responsive.\n- WebUtil's JSON Formatter runs high-speed V8 formatting in client-side memory, allowing you to validate and beautify datasets with zero cloud latency."
      },
      {
        heading: "6. Best Practices for API Payloads and Configuration Files",
        body: "- Consistent casing: Standardize on camelCase for JavaScript APIs or snake_case for Python/Ruby services, but never mix both in the same payload.\n- Avoid deep nesting: Limit object hierarchy to 3-4 levels maximum. Flatten relationships using normalized IDs.\n- Always validate: Use JSON Schema or TypeScript Zod definitions to ensure incoming data strictly conforms to expected models before executing business logic."
      },
    ]
  },
  "common-json-errors": {
    title: "Common JSON Errors: How to Fix SyntaxError, Trailing Commas, and Unquoted Keys",
    description: "A comprehensive developer guide to diagnosing and fixing the most frustrating JSON errors: unexpected tokens, trailing commas, unquoted keys, and number precision loss.",
    date: new Date("2025-12-10T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Understanding JSON Parsing Errors in Modern Applications",
        body: "JavaScript Object Notation (standardized under RFC 8259 and ECMA-404) is the ubiquitous backbone of web APIs, configuration files, and state serialization. Despite its visual resemblance to JavaScript object literals, JSON enforces a significantly stricter grammar. When a client application or server encounters invalid JSON, native parsers (such as V8's JSON.parse() or Python's json.loads()) instantly throw fatal syntax exceptions.\n\nIn client-side Single Page Applications (SPAs) and microservice communication, an unhandled JSON parsing exception frequently causes white-screen crashes, failed API handshakes, or silent data dropouts. Understanding the exact mechanics of these errors and how to prevent them is critical for any software engineer building reliable web software."
      },
      {
        heading: "2. SyntaxError: Unexpected Token in JSON at Position X",
        body: "The infamous 'SyntaxError: Unexpected token < in JSON at position 0' is one of the most common exceptions in web development. In 95% of cases, this error does not mean your JSON has a minor typo—it means your application received an HTML error page (such as a 404 Not Found, 502 Bad Gateway, or Cloudflare challenge) instead of the expected application/json response body.\n\n```javascript\n// Dangerous pattern: assuming the response is always JSON\nconst response = await fetch('/api/user/profile');\nconst data = await response.json(); // Throws if server returns HTML 500 error!\n\n// Safe production pattern\nconst response = await fetch('/api/user/profile');\nif (!response.ok) {\n  const errorText = await response.text();\n  throw new Error(`API error HTTP ${response.status}: ${errorText.slice(0, 100)}`);\n}\nconst data = await response.json();\n```\n\nWhen the unexpected token appears at an arbitrary position (like position 42), check for unescaped control characters (such as raw unescaped newlines within a string) or unquoted values."
      },
      {
        heading: "3. Trailing Commas in Objects and Arrays",
        body: "JavaScript object literals natively allow trailing commas after the final key-value pair, and ECMAScript specifications actively encourage them to make git diffs cleaner. However, RFC 8259 strictly forbids trailing commas in JSON arrays and objects.\n\n```json\n// INVALID JSON (Will throw SyntaxError: Expected property name or '}')\n{\n  \"name\": \"Alice\",\n  \"role\": \"Admin\",\n}\n\n// VALID JSON\n{\n  \"name\": \"Alice\",\n  \"role\": \"Admin\"\n}\n```\n\n- Never leave a comma after the last item of an array: [\"apple\", \"banana\",] will crash standard parsers.\n- In automated CI/CD pipelines, use linters like Prettier or WebUtil's JSON Formatter to strip trailing commas prior to deployment."
      },
      {
        heading: "4. Single Quotes vs Double Quotes and Unquoted Keys",
        body: "Another frequent mistake made by JavaScript and Python developers is using single quotes (') or backticks (`) for strings or leaving object keys unquoted.\n\n- In JSON, all keys MUST be enclosed in double quotes: {\"userId\": 101} is valid, whereas {userId: 101} or {'userId': 101} is invalid syntax.\n- All string values MUST use double quotes (\"). Single quotes are treated as illegal tokens.\n- To include a double quote inside a string, escape it with a backslash: \"quote\": \"He said, \\\"Hello\\\"\".\n- To include a backslash, escape it with a double backslash: \"path\": \"C:\\\\Users\\\\AppData\"."
      },
      {
        heading: "5. Number Precision Loss Beyond 2^53 - 1 (The BigInt Problem)",
        body: "JSON specification defines numbers as arbitrary decimal values, but most language runtimes parse numbers into IEEE 754 64-bit double-precision floating-point numbers. In JavaScript, the maximum safe integer is Number.MAX_SAFE_INTEGER (9,007,199,254,740,991 or 2^53 - 1).\n\n```javascript\n// Danger: BigInt IDs lose precision in standard JSON.parse\nconst raw = '{\"orderId\": 9007199254740995}';\nconst parsed = JSON.parse(raw);\nconsole.log(parsed.orderId); // 9007199254740996 (CORRUPTED!)\n```\n\nIf your backend uses 64-bit database identifiers (such as Twitter snowflake IDs, Stripe transaction IDs, or PostgreSQL BIGINT), always serialize them as strings in your JSON payloads: {\"orderId\": \"9007199254740995\"}."
      },
      {
        heading: "6. Safe JSON Parsing Pattern in TypeScript",
        body: "To prevent uncaught runtime exceptions from crashing your web app, implement a bulletproof safe parsing utility that returns a typed result object or fallback:\n\n```typescript\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };\n\nfunction safeJsonParse<T>(jsonString: string): Result<T> {\n  try {\n    const data = JSON.parse(jsonString) as T;\n    return { success: true, data };\n  } catch (err) {\n    return {\n      success: false,\n      error: err instanceof Error ? err : new Error('Malformed JSON syntax'),\n    };\n  }\n}\n\n// Usage\nconst res = safeJsonParse<{ theme: string }>(localStorage.getItem('settings') || '');\nif (res.success) {\n  console.log(res.data.theme);\n} else {\n  console.warn('Fallback to default theme due to corrupt storage');\n}\n```\n\nFor production form handling and API validation, combine safe parsing with runtime schema validation libraries like Zod to ensure the parsed JSON matches your expected TypeScript interfaces."
      },
      {
        heading: "7. Automated Validation with WebUtil's JSON Formatter",
        body: "Whenever you encounter a cryptic JSON syntax error in an API payload or configuration file, paste the snippet into WebUtil's JSON Formatter. The tool highlights the exact line and character column where the syntax violates RFC 8259, provides 1-click beautification and minification, and processes everything 100% locally in your browser memory so your sensitive data never leaves your device."
      },
    ]
  },
  "json-vs-xml": {
    title: "JSON vs XML: Architectural Comparison, Benchmarks, and Use Cases",
    description: "An in-depth comparison of JSON and XML in modern web development: payload size benchmarks, parsing performance, document schemas, and migration paths.",
    date: new Date("2026-03-01T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Structural Comparison: Key-Value Pairs vs Semantic Markup Trees",
        body: "JSON (JavaScript Object Notation) and XML (eXtensible Markup Language) are the two most prominent data serialization languages in computing history. While both represent hierarchical tree structures, their conceptual designs diverge significantly.\n\nJSON was engineered specifically for lightweight data exchange in web applications, mapping natively to fundamental data structures found in modern programming languages: maps (objects), lists (arrays), strings, numbers, booleans, and null. XML, derived from SGML in the late 1990s, was designed as a document markup system capable of containing rich text, custom tags, attributes, and namespaces."
      },
      {
        heading: "2. Payload Overhead and Bandwidth Efficiency Benchmarks",
        body: "XML's closing tag requirement introduces substantial syntactic verbosity. In XML, every element must have a closing tag with the full tag name: `<firstName>Alice</firstName>`. In JSON, the equivalent structure is simply `\"firstName\": \"Alice\"`.\n\nIn empirical benchmarks across API payloads:\n- Raw Size: Equivalent JSON documents are consistently 25% to 45% smaller than XML documents.\n- Gzip / Brotli Compression: While HTTP compression narrows the size gap, JSON remains 10% to 15% smaller even after compression, saving significant bandwidth costs on high-volume microservice clusters."
      },
      {
        heading: "3. Parsing Performance: V8 Native JSON.parse vs DOMParser XML",
        body: "Parsing speed is critical for mobile devices and high-throughput servers. In modern JavaScript engines (such as Chrome V8), `JSON.parse()` is implemented in optimized native C++ assembler that parses serialized strings directly into native heap objects without allocating intermediate AST nodes.\n\nXML parsing requires constructing a full Document Object Model (DOM) tree, evaluating namespaces, validating entities, and resolving attributes. In JavaScript benchmarks, `JSON.parse()` consistently outperforms browser `DOMParser.parseFromString()` by 2x to 5x in throughput and memory efficiency."
      },
      {
        heading: "4. When XML is Still Superior: Documents, Namespaces, and Schemas",
        body: "Despite JSON's dominance in REST and GraphQL APIs, XML remains indispensable in several mission-critical domains:\n\n- Vector Graphics & Typography: SVG (Scalable Vector Graphics) is built on XML, allowing styles, filters, and paths to be styled with CSS.\n- Document Formats: Microsoft Office (.docx, .xlsx) and OpenDocument formats are zipped collections of XML documents.\n- Enterprise Schema Validation: XML Schema Definition (XSD) and DTDs provide robust, battle-tested schema inheritance and data type constraints that surpass basic JSON validation.\n- Namespaces: XML seamlessly merges vocabularies from multiple independent organizations in a single document using URI-backed namespaces (`xmlns:dc=\"http://purl.org/dc/elements/1.1/\"`)."
      },
      {
        heading: "5. REST vs SOAP: How the Web Transitioned to JSON Dominance",
        body: "During the 2000s, enterprise computing was dominated by SOAP (Simple Object Access Protocol) web services, which enforced strict XML envelopes, WSDL contracts, and WS-Security standards. As mobile smartphones proliferated in the 2010s, developers demanded simpler, faster protocols. REST APIs utilizing JSON payloads quickly replaced SOAP due to reduced latency, lower cognitive complexity, and native browser parsing."
      },
      {
        heading: "6. Step-by-Step Data Migration Strategies from XML to JSON",
        body: "When modernizing legacy enterprise systems, migrate incrementally: build JSON façade adapters in front of legacy XML backends, and use tools like WebUtil's XML Formatter and JSON Formatter to inspect and validate data structures during migration."
      },
    ]
  },
  "json-schema-guide": {
    title: "JSON Schema Guide: Draft 2020-12 Validation, Keywords, and Best Practices",
    description: "Learn how to validate JSON data with JSON Schema: core keywords, type constraints, composition with allOf/anyOf/oneOf, Ajv integration, and TypeScript generation.",
    date: new Date("2026-02-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. What is JSON Schema and Why Declarative Validation Matters",
        body: "As applications grow into distributed microservices and public-facing APIs, validating incoming request payloads becomes vital for application stability and security. Hardcoding manual validation logic using dozens of `if (!body.email || typeof body.email !== 'string')` checks is error-prone, difficult to maintain, and impossible to share across programming languages.\n\nJSON Schema provides a declarative, standardized vocabulary (governed by IETF specifications) to annotate and validate the structure, constraints, and data types of JSON documents. It acts as an executable contract between clients and servers."
      },
      {
        heading: "2. Core Keywords: type, properties, required, and additionalProperties",
        body: "Every JSON Schema starts by defining the root data type and structural constraints:\n\n```json\n{\n  \"$schema\": \"https://json-schema.org/draft/2020-12/schema\",\n  \"$id\": \"https://webutil.tech/schemas/user.json\",\n  \"type\": \"object\",\n  \"required\": [\"id\", \"username\", \"email\"],\n  \"properties\": {\n    \"id\": { \"type\": \"integer\", \"minimum\": 1 },\n    \"username\": { \"type\": \"string\", \"minLength\": 3, \"maxLength\": 20 },\n    \"email\": { \"type\": \"string\", \"format\": \"email\" },\n    \"role\": { \"type\": \"string\", \"enum\": [\"admin\", \"editor\", \"viewer\"] }\n  },\n  \"additionalProperties\": false\n}\n```\n\nSetting `\"additionalProperties\": false` is a critical security best practice that prevents prototype pollution and unexpected payload injections."
      },
      {
        heading: "3. Advanced Constraints: Arrays, items, and Numeric Ranges",
        body: "Validating collections and numeric values requires specialized constraint keywords:\n\n- Arrays: The `items` keyword specifies the schema for each array element. Use `minItems` and `maxItems` to control collection size, and `uniqueItems: true` to enforce set uniqueness.\n- Numbers: Use `minimum`, `maximum`, `exclusiveMinimum`, and `multipleOf` (e.g. `\"multipleOf\": 0.01` for currency).\n- Strings: Use `pattern` with standard regular expressions (e.g. `\"pattern\": \"^[a-z0-9_-]+$\"`), and `format` for semantic validation (date-time, uri, ipv4, ipv6)."
      },
      {
        heading: "4. Schema Composition: allOf, anyOf, oneOf, and Modular References ($ref)",
        body: "JSON Schema supports composition and code reuse:\n\n- `allOf`: The data must satisfy all subschemas (logical AND).\n- `anyOf`: The data must satisfy at least one subschema (logical OR).\n- `oneOf`: The data must satisfy exactly one subschema (mutually exclusive XOR).\n- `$ref`: Allows referencing reusable schema definitions across files or within a `$defs` block, keeping complex schemas modular and DRY."
      },
      {
        heading: "5. Validating JSON Schemas in Node.js with Ajv",
        body: "Ajv (Another JSON Schema Validator) is the industry-standard JSON Schema validator for Node.js, compiling schemas into highly optimized JavaScript code:\n\n```javascript\nimport Ajv from 'ajv';\nimport addFormats from 'ajv-formats';\n\nconst ajv = new Ajv({ allErrors: true });\naddFormats(ajv);\n\nconst schema = {\n  type: 'object',\n  properties: { email: { type: 'string', format: 'email' } },\n  required: ['email'],\n};\n\nconst validate = ajv.compile(schema);\nconst valid = validate({ email: 'hello@webutil.tech' });\nif (!valid) console.log(validate.errors);\n```"
      },
      {
        heading: "6. Generating TypeScript Types Directly from JSON Schema",
        body: "Instead of manually maintaining both TypeScript interfaces and JSON Schema files, automated tools like `json-schema-to-typescript` compile your schemas directly into strongly typed TypeScript declarations in your build pipeline, guaranteeing 100% type safety from database to frontend."
      },
    ]
  },
  "how-apis-use-json": {
    title: "How Modern APIs Use JSON: REST, GraphQL, WebSockets, and Streaming",
    description: "Explore how production APIs leverage JSON: HTTP content negotiation, RFC 7807 problem details, pagination strategies, and NDJSON streaming.",
    date: new Date("2026-01-20T00:00:00.000Z"),
    sections: [
      {
        heading: "1. JSON as the Universal Language of Modern Distributed Web Services",
        body: "From cloud-native microservices on Kubernetes to mobile app backends and public developer platforms (Stripe, GitHub, AWS), JSON is the unquestioned universal data exchange standard of the modern internet. Its native compatibility with JavaScript, human readability, and lightweight footprint make it the default transport format for RESTful architectures, GraphQL queries, and WebSocket messaging."
      },
      {
        heading: "2. Content Negotiation: Content-Type and Accept Headers",
        body: "HTTP content negotiation ensures that clients and servers agree on data serialization. When sending or requesting JSON payloads, proper headers must be specified:\n\n- `Content-Type: application/json; charset=utf-8`: Informs the recipient that the HTTP request or response body contains JSON encoded in UTF-8.\n- `Accept: application/json`: Informs the server that the client only accepts JSON responses. If the server cannot provide JSON, it should return an HTTP 406 Not Acceptable status code."
      },
      {
        heading: "3. Predictable Error Envelopes: RFC 7807 Problem Details",
        body: "Standardizing API error structures prevents client applications from breaking unexpectedly. RFC 7807 defines 'Problem Details for HTTP APIs' using media type `application/problem+json`:\n\n```json\n{\n  \"type\": \"https://webutil.tech/errors/invalid-token\",\n  \"title\": \"Authentication Token Expired\",\n  \"status\": 401,\n  \"detail\": \"The provided JSON Web Token expired at 2026-10-17T14:00:00Z.\",\n  \"instance\": \"/api/v1/user/account\",\n  \"invalid_params\": [{ \"name\": \"Authorization\", \"reason\": \"Signature timestamp expired\" }]\n}\n```"
      },
      {
        heading: "4. API Pagination Patterns in JSON: Offset vs Cursor-Based Structures",
        body: "When returning large collections, APIs must paginate responses:\n\n- Offset Pagination: Uses `page=2&limit=20`. Simple to implement, but suffers from performance degradation on deep database pages (`OFFSET 100000`) and can return duplicate records if new items are inserted during pagination.\n- Cursor-Based Pagination: Uses an opaque cursor (typically a base64-encoded timestamp or UUID). Highly performant, immune to phantom inserts, and recommended for infinite-scroll feeds."
      },
      {
        heading: "5. Real-Time Streaming with NDJSON and Server-Sent Events",
        body: "Standard JSON parsers require the entire document to be downloaded before parsing can begin. For large data exports or real-time LLM AI completions (like ChatGPT or Claude), modern APIs use Newline Delimited JSON (NDJSON) or Server-Sent Events (SSE):\n\n```text\n{\"event\": \"token\", \"text\": \"The\"}\n{\"event\": \"token\", \"text\": \" future\"}\n{\"event\": \"token\", \"text\": \" of\"}\n{\"event\": \"token\", \"text\": \" AI\"}\n```\n\nEach line is an independent, valid JSON document separated by a newline (`\\n`), allowing clients to stream, parse, and render output token by token without buffering gigabytes into memory."
      },
      {
        heading: "6. Security Hardening: Defending Against Prototype Pollution",
        body: "When merging untrusted JSON payloads into existing objects, attackers can exploit `__proto__` and `constructor` keys to pollute global object prototypes in JavaScript. Always sanitize input keys or use `Object.create(null)` for map lookups."
      },
    ]
  },
  "url-encoding-decoding": {
    title: "URL Encoding and Decoding: Percent-Encoding, RFC 3986, and Security",
    description: "Deep dive into URL percent-encoding: RFC 3986 rules, the difference between encodeURI and encodeURIComponent, double-decoding risks, and URLSearchParams.",
    date: new Date("2025-12-05T00:00:00.000Z"),
    sections: [
      {
        heading: "1. How Percent-Encoding Works Under RFC 3986",
        body: "Uniform Resource Identifiers (URIs) are constrained by the Internet standard RFC 3986 to a limited subset of characters from the US-ASCII repertoire. When web applications need to transmit arbitrary binary data, punctuation, spaces, or international Unicode characters (such as emojis or accented letters) inside a URL, they must convert those characters into percent-encoding.\n\nPercent-encoding represents any non-allowed byte as a triplet consisting of the percent symbol '%' followed by two hexadecimal digits denoting the byte value in ASCII (or UTF-8 for international characters). For example, a space character (ASCII 32, hex 0x20) is encoded as '%20', and an exclamation mark (ASCII 33, hex 0x21) is encoded as '%21'."
      },
      {
        heading: "2. Reserved vs Unreserved Characters: When %20 Meets Plus (+)",
        body: "RFC 3986 divides URI characters into two distinct classes:\n\n- Unreserved Characters: A-Z, a-z, 0-9, hyphen (-), underscore (_), period (.), and tilde (~). These characters never require percent-encoding and retain their literal meaning.\n- Reserved Characters: Characters with structural syntactic meaning inside a URI, including delimiters like ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', ''', '(', ')', '*', '+', ',', ';', and '='.\n\nA frequent source of confusion is the plus sign (+). Under historical HTML form submission specifications (application/x-www-form-urlencoded), spaces in form data were encoded as '+'. However, according to strict RFC 3986 URI path syntax, a plus sign literally represents '+' and not a space! Modern APIs should always use '%20' for spaces to avoid ambiguity."
      },
      {
        heading: "3. The Critical Difference: encodeURI() vs encodeURIComponent()",
        body: "In JavaScript, developers are provided two built-in global functions for percent-encoding, but using the wrong one can break URLs or introduce security flaws:\n\n```javascript\nconst baseUrl = 'https://webutil.tech/search';\nconst query = 'developer tools & utilities?';\n\n// WRONG: encodeURI preserves '&' and '?' because it treats them as URI delimiters\nconst badUrl = `${baseUrl}?q=${encodeURI(query)}`;\n// Result: https://webutil.tech/search?q=developer%20tools%20&%20utilities?\n// Breaks the query string because '&' creates a second parameter!\n\n// CORRECT: encodeURIComponent encodes '&' to '%26' and '?' to '%3F'\nconst goodUrl = `${baseUrl}?q=${encodeURIComponent(query)}`;\n// Result: https://webutil.tech/search?q=developer%20tools%20%26%20utilities%3F\n```\n\n- Use `encodeURI()` ONLY when encoding an entire, complete URL where delimiters (http://, ?, &) must remain intact.\n- Use `encodeURIComponent()` whenever encoding a specific query parameter value or path segment."
      },
      {
        heading: "4. The Double-Encoding Vulnerability in Reverse Proxies",
        body: "Double-encoding occurs when a string that is already percent-encoded is mistakenly encoded a second time by an application or proxy layer. For example, a space (' ') becomes '%20' on the client, and an unconfigured reverse proxy (such as Nginx or Apache) re-encodes the '%' into '%2520'.\n\n```text\nRaw Character:   /\nFirst Encoding:  %2F\nSecond Encoding: %252F\n```\n\nDouble-encoding is not just an annoying formatting bug—it is an established web security attack vector. Malicious actors use double-encoded path traversal sequences (such as '%252e%252e%252f' for '../') to bypass Web Application Firewalls (WAFs). If the WAF decodes the string once and finds '%2e%2e%2f' (which it considers harmless text), but the backend server decodes it a second time, the attacker successfully traverses directories."
      },
      {
        heading: "5. Modern Query String Handling with URLSearchParams",
        body: "In modern JavaScript (Node.js and modern browsers), manually string-concatenating query strings with encodeURIComponent is deprecated in favor of the standard `URLSearchParams` and `URL` APIs:\n\n```javascript\nconst url = new URL('https://webutil.tech/api/search');\nurl.searchParams.set('query', 'client-side tools & privacy');\nurl.searchParams.set('page', '1');\nurl.searchParams.set('tags', 'security');\n\nconsole.log(url.toString());\n// Output: https://webutil.tech/api/search?query=client-side+tools+%26+privacy&page=1&tags=security\n\n// Parsing an existing URL query\nconst params = new URLSearchParams(window.location.search);\nconst currentQuery = params.get('query'); // Automatically decodes percent-encoding!\n```"
      },
      {
        heading: "6. Debugging Malformed URIs and Decoding Errors in Production",
        body: "When decoding strings in JavaScript, `decodeURIComponent()` throws a fatal `URIError: URI malformed` if the string contains an invalid percent sequence (such as a '%' not followed by two hexadecimal digits, or an invalid UTF-8 byte sequence like '%E0%A4'). Always wrap decode operations in a try/catch block when handling untrusted user input.\n\nWebUtil's URL Encoder / Decoder tool allows you to instantly encode and decode query strings, full URIs, and isolated components with real-time error detection entirely in your browser."
      },
    ]
  },
  "base64-encoding-methods": {
    title: "Base64 Encoding: RFC 4648, Unicode Pitfalls, and Best Practices",
    description: "Master Base64 encoding: how 6-bit binary slicing works, standard vs URL-safe alphabets, the JavaScript btoa Unicode trap, and data URI optimization.",
    date: new Date("2025-11-28T00:00:00.000Z"),
    sections: [
      {
        heading: "1. How Base64 Binary-to-Text Encoding Works (6-Bit Slicing)",
        body: "Base64 is a binary-to-text encoding algorithm designed to represent arbitrary binary data (such as compiled executables, cryptographic keys, or image files) in a printable ASCII string format. Standardized under IETF RFC 4648, it is fundamental to email attachments (MIME), basic HTTP authentication headers, JWT token transport, and inline Data URIs in web pages.\n\nThe algorithm operates by grouping binary data into 24-bit blocks (3 bytes of 8 bits each). Each 24-bit block is then divided into four 6-bit chunks. Because 2^6 equals 64, each 6-bit chunk maps directly to one of 64 printable characters in the Base64 alphabet: A–Z (index 0–25), a–z (index 26–51), 0–9 (index 52–61), plus '+' (62), and slash '/' (63)."
      },
      {
        heading: "2. Standard Base64 vs URL-Safe Base64 (- and _ vs + and /)",
        body: "While standard Base64 works flawlessly in email and HTTP headers, the standard alphabet includes the plus sign (+) and forward slash (/), both of which are reserved delimiter characters in URL query strings and REST endpoints.\n\nTo solve this, RFC 4648 Section 5 defines 'URL-Safe Base64' (often referred to as base64url):\n\n- The plus character (+) is replaced by hyphen (-).\n- The slash character (/) is replaced by underscore (_).\n- Padding characters (=) are frequently omitted entirely.\n\nJSON Web Tokens (JWT) strictly mandate base64url encoding for their header and payload components so that tokens can be safely transmitted inside URL query parameters and cookie headers without escaping."
      },
      {
        heading: "3. The JavaScript btoa() Unicode Trap: Character Out of Range Solution",
        body: "JavaScript provides two native browser methods: `btoa()` (binary to ASCII) and `atob()` (ASCII to binary). However, `btoa()` was designed in the early days of JavaScript and only supports characters within the Latin1 (ISO-8859-1) code range (code points 0 to 255).\n\n```javascript\n// DANGER: Throws DOMException: The string to be encoded contains characters outside the Latin1 range.\nbtoa('Hello, 世界! 🚀');\n\n// MODERN SOLUTION: Using TextEncoder and TextDecoder (UTF-8 safe)\nfunction utf8ToBase64(str) {\n  const bytes = new TextEncoder().encode(str);\n  const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join('');\n  return btoa(binString);\n}\n\nfunction base64ToUtf8(base64) {\n  const binString = atob(base64);\n  const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));\n  return new TextDecoder().decode(bytes);\n}\n\nconsole.log(utf8ToBase64('Hello, 世界! 🚀')); // Safe UTF-8 Base64!\n```"
      },
      {
        heading: "4. Data URIs for Images, Fonts, and SVGs: When to Inline vs Cache",
        body: "Base64 is commonly used to embed small image assets directly into HTML and CSS files using Data URIs: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...`.\n\n- Advantages: Eliminates an additional HTTP request roundtrip, which can improve First Contentful Paint (FCP) for critical above-the-fold icons and placeholder images.\n- Disadvantages: Base64 data cannot be cached independently by the browser cache like external .png or .woff2 files. If your CSS file contains 500KB of inlined Base64 fonts, users must re-download those assets every time your stylesheet updates.\n- Best Practice: Restrict Data URIs to tiny icons (< 3KB) or single-page static widgets."
      },
      {
        heading: "5. Base64 Performance: The 33% Bandwidth Overhead Calculation",
        body: "Because Base64 translates 3 bytes of raw binary data into 4 ASCII characters, it increases the payload size by exactly 33.33% (excluding any trailing '=' padding bytes). A 3MB raw camera photograph becomes approximately 4MB of text when encoded in Base64.\n\nWhen transmitting high-volume binary data over modern APIs, prefer binary protocols like multipart/form-data or protocol buffers rather than serializing megabytes of binary into Base64 JSON strings."
      },
      {
        heading: "6. CLI Encoding and Decoding in Bash, Python, and Node",
        body: "Developers frequently encode and decode Base64 strings in terminal environments:\n\n```bash\n# Linux / macOS Base64 encoding\necho -n \"SecretAPIKey123\" | base64\n\n# Decoding in Bash\necho -n \"U2VjcmV0QVBJS2V5MTIz\" | base64 --decode\n\n# Node.js Buffer encoding\nnode -e 'console.log(Buffer.from(\"hello\").toString(\"base64\"))'\n```\n\nWebUtil's Base64 Encoder / Decoder tool provides instantaneous text and file conversion running 100% inside your browser with complete privacy."
      },
    ]
  },
  "password-security-best-practices": {
    title: "Password Security Best Practices for 2026: NIST 800-63B & Entropy",
    description: "Learn modern password security: NIST SP 800-63B recommendations, mathematical entropy calculations, passphrases, and Argon2id hashing algorithms.",
    date: new Date("2025-11-20T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Modern Authentication Standards: What NIST SP 800-63B Changes",
        body: "For over two decades, corporate IT policies forced employees to create complex passwords containing uppercase letters, numbers, and symbols, and mandated that these passwords be changed every 90 days. Research by computer scientists and official guidance from the National Institute of Standards and Technology (NIST Special Publication 800-63B) has conclusively proven that these legacy rules actually decrease security.\n\nWhen forced to change passwords frequently and include arbitrary symbols, users invariably resort to predictable patterns—such as changing 'Spring2025!' to 'Summer2025!'. Modern security recommendations prioritize password length, passphrases, screening against breached password databases (such as HaveIBeenPwned), and mandatory multi-factor authentication (MFA)."
      },
      {
        heading: "2. Password Entropy Explained: Calculating Bit Strength",
        body: "Password strength is mathematically quantified in terms of 'information entropy', measured in bits. Entropy represents the number of guesses an automated brute-force attack would need to test on average to crack the secret.\n\nThe formula for password entropy is: E = L * log2(R), where L is the password length and R is the pool size of possible characters:\n\n- Numbers only (0-9): Pool of 10. A 6-digit PIN has 6 * log2(10) ≈ 20 bits of entropy (crackable in milliseconds).\n- Lowercase letters only (a-z): Pool of 26. An 8-character word has ~37.6 bits.\n- Alphanumeric + Symbols: Pool of 94 characters. A 16-character random password has 16 * log2(94) ≈ 104.8 bits of entropy.\n\nA password with 80+ bits of entropy is computationally infeasible to brute-force using current supercomputer clusters."
      },
      {
        heading: "3. Passphrases vs Random Strings: The Diceware Method",
        body: "The human brain struggles to memorize 20-character strings of random characters like 'q#8X!mK9$wL2&vP4', leading users to write passwords down on post-it notes. The Diceware method solves this by stringing together 4 to 6 randomly selected dictionary words:\n\n```text\nLegacy Complex Password:   P@ssw0rd!2024  (13 chars, low entropy, predictable)\nDiceware Passphrase:       correct-horse-battery-staple  (28 chars, 77 bits entropy, highly memorable)\n```\n\nBecause length is the dominant factor in the entropy equation, a 5-word random passphrase offers vastly superior resistance to brute-force attacks while remaining effortless for humans to type on mobile keyboards."
      },
      {
        heading: "4. Why 90-Day Forced Expiration Is an Outdated Anti-Pattern",
        body: "NIST 800-63B explicitly advises organizations against periodic password expiration unless there is verified evidence of a compromise. When accounts are protected by strong passphrases and hardware-backed Multi-Factor Authentication (FIDO2 / WebAuthn / Passkeys), forced rotations add unnecessary friction and prompt users to degrade their password complexity.\n\nInstead of forced rotation, security systems should:\n- Reject passwords that appear on public breach lists.\n- Enforce minimum length of 12-16 characters.\n- Require Multi-Factor Authentication (TOTP or hardware security keys) on all logins."
      },
      {
        heading: "5. Server-Side Hashing: Argon2id vs bcrypt vs PBKDF2",
        body: "Never store plaintext passwords or use fast general-purpose cryptographic hashes like MD5, SHA-1, or plain SHA-256 in user databases. Modern GPUs can compute over 10 billion SHA-256 hashes per second, allowing attackers to crack leaked database hashes in hours.\n\n- Argon2id: The winner of the Password Hashing Competition (PHC) and the gold standard for modern applications. It provides memory-hard protection that resists GPU and ASIC cracking.\n- bcrypt: A battle-tested Blowfish-based algorithm with an adjustable work factor (salt rounds). A work factor of 12 or 14 is widely recommended in 2026.\n- PBKDF2: Approved by NIST and widely used in enterprise Java/.NET applications, but less resistant to GPU attacks than Argon2id."
      },
      {
        heading: "6. Generating Cryptographically Secure Passwords with Web Crypto",
        body: "When generating random passwords in JavaScript, never use `Math.random()`, which is a pseudo-random number generator (PRNG) with predictable internal state. Always use `crypto.getRandomValues()`:\n\n```javascript\nfunction generateSecurePassword(length = 20) {\n  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|';\n  const randomValues = new Uint32Array(length);\n  window.crypto.getRandomValues(randomValues);\n  return Array.from(randomValues, (v) => charset[v % charset.length]).join('');\n}\n\nconsole.log(generateSecurePassword(24));\n```\n\nWebUtil's Password Generator uses browser-native Web Crypto APIs to create uncrackable passwords entirely on your device with zero cloud tracking."
      },
    ]
  },
  "color-converter-guide": {
    title: "Color Converter Guide: HEX, RGB, HSL, and Modern OKLCH in CSS",
    description: "A complete guide to digital color models: HEX, RGB, HSL, and modern OKLCH in CSS Color Module Level 4. Includes WCAG contrast accessibility formulas.",
    date: new Date("2025-11-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Physics and Math Behind Digital Color Models",
        body: "Every color displayed on an OLED monitor, phone screen, or laptop display is created by emitting light from microscopic red, green, and blue subpixels. In digital computing, various color spaces and notation models have been created to translate human visual perception into mathematical coordinates.\n\nUnderstanding how HEX, RGB, HSL, and next-generation OKLCH color models function allows frontend developers and UI designers to build accessible themes, design systems, and color palette generators that render consistently across all devices."
      },
      {
        heading: "2. HEX Codes: 3-Digit, 6-Digit, and 8-Digit Alpha Channels",
        body: "HEX color codes are base-16 representations of RGB intensity, prefixed by a hash symbol (#). Each pair of hexadecimal digits (00 to FF in hex, 0 to 255 in decimal) defines the intensity of the red, green, and blue channels:\n\n- 6-Digit Syntax: #RRGGBB. For example, #5C7CFA represents 92 Red, 124 Green, and 250 Blue.\n- 3-Digit Shorthand: #RGB expands by duplicating each digit (#F0A becomes #FF00AA).\n- 8-Digit Alpha Syntax: #RRGGBBAA. The final two hex digits specify the alpha opacity (e.g. #00000080 represents 50% transparent black, where 0x80 is 128/255)."
      },
      {
        heading: "3. RGB & RGBA: Additive Light Color Synthesis",
        body: "The RGB model is the native color coordinate system of digital hardware. Intensities are specified as integers from 0 to 255 or percentages from 0% to 100%:\n\n```css\n/* CSS Color Module Level 3 */\ncolor: rgba(92, 124, 250, 0.8);\n\n/* Modern CSS Color Module Level 4 syntax (no comma, forward-slash alpha) */\ncolor: rgb(92 124 250 / 80%);\n```\n\nWhen all three channels are 0, no light is emitted (pure black). When all three channels are 255, maximum light is combined (pure white)."
      },
      {
        heading: "4. HSL & HSLA: Cylindrical Coordinates for Intuitive Palettes",
        body: "While RGB is intuitive for computers, it is notoriously counter-intuitive for humans. If a designer asks you to make a button 'slightly lighter or less saturated', modifying RGB values requires recalculating all three channels simultaneously. HSL solves this by using a cylindrical coordinate geometry:\n\n- Hue (H): An angle from 0 to 360 degrees on the color wheel (0° = Red, 120° = Green, 240° = Blue).\n- Saturation (S): A percentage from 0% (monochrome gray) to 100% (vibrant, pure pigment).\n- Lightness (L): A percentage from 0% (pure black) through 50% (normal color) to 100% (pure white).\n\nHSL makes generating UI state variations (hover states, active borders, disabled states) effortless: simply increment or decrement the lightness channel by 5% or 10%."
      },
      {
        heading: "5. CSS Color Module Level 4: Why OKLCH is the Future of Web UI",
        body: "Despite HSL's popularity, it suffers from a major mathematical flaw: it is not 'perceptually uniform'. In HSL, pure blue (hsl(240, 100%, 50%)) and pure yellow (hsl(60, 100%, 50%)) both have 50% lightness, yet the human eye perceives yellow as significantly brighter than blue!\n\nThe new W3C CSS Color Module Level 4 introduces `oklch()`, based on the OKLab color space designed by Björn Ottosson:\n\n```css\n/* OKLCH: Lightness (0-1), Chroma (saturation), Hue (0-360) */\nbackground-color: oklch(0.65 0.22 260);\n```\n\nIn OKLCH, two colors with the same lightness value are guaranteed to have identical perceived brightness to human eyes, making automated accessible color palette generation truly reliable."
      },
      {
        heading: "6. Web Accessibility (WCAG 2.1): Calculating Contrast Ratios",
        body: "The Web Content Accessibility Guidelines (WCAG 2.1) require text to maintain sufficient contrast against its background:\n\n- Level AA: Minimum contrast ratio of 4.5:1 for standard body text, and 3:1 for large headings (18pt+ or 14pt bold).\n- Level AAA: Minimum contrast ratio of 7:1 for normal text, and 4.5:1 for large text.\n\nRelative luminance is calculated using standardized sRGB coefficients: L = 0.2126 * R + 0.7152 * G + 0.0722 * B. Always test your color palettes against these standards to ensure your site is readable for users with low vision or color blindness."
      },
      {
        heading: "7. JavaScript Algorithms for Color Format Conversions",
        body: "WebUtil's Color Converter tool allows you to convert seamlessly between HEX, RGB, and HSL formats in real-time with automatic WCAG contrast calculation. All conversions execute locally in your browser with zero latency."
      },
    ]
  },
  "uuid-guide": {
    title: "UUIDs Explained: UUID v4 vs UUID v7, Standards, and Database Indexing",
    description: "Everything developers need to know about Universally Unique Identifiers: RFC 9562 standards, UUID v4 vs v7, database B-Tree index performance, and collision math.",
    date: new Date("2025-11-10T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Anatomy of a 128-Bit Universally Unique Identifier (RFC 9562)",
        body: "A Universally Unique Identifier (UUID), standardized under IETF RFC 9562 (superseding RFC 4122), is a 128-bit label used to uniquely identify information across computer systems without requiring central coordination or database locks.\n\nIn canonical textual representation, a UUID is written as 32 hexadecimal characters divided into five groups separated by hyphens (8-4-4-4-12 format), totaling 36 characters: `f47ac10b-58cc-4372-a567-0e02b2c3d479`. The 13th hexadecimal character indicates the UUID version (e.g., '4' for UUID v4, '7' for UUID v7), while the 17th character indicates the UUID variant."
      },
      {
        heading: "2. UUID v4: Random Generation and Collision Probability Math",
        body: "UUID v4 is generated entirely from pseudorandom or cryptographically random numbers. Out of the 128 total bits, 6 bits are reserved for version and variant metadata, leaving 122 bits of pure entropy (2^122 possible values, or approximately 5.3 x 10^36 unique IDs).\n\nWhat is the probability of a collision? Based on the Birthday Paradox, if you generated 1 billion UUID v4 identifiers every single second for 100 consecutive years, the probability of creating a single duplicate would still be less than 0.00000000006. For virtually all software architectures, UUID v4 collisions can be treated as mathematically impossible."
      },
      {
        heading: "3. The Hidden Cost of UUID v4 in B-Tree Database Indexes",
        body: "Despite their ubiquity, using UUID v4 as a primary key in relational databases (PostgreSQL, MySQL InnoDB, SQL Server) introduces severe performance penalties as tables grow beyond millions of rows.\n\nRelational databases organize primary keys using B-Tree index structures. Because UUID v4 values are completely random, new records are inserted at random locations throughout the B-Tree leaf pages. This causes constant 'page splits', destroys memory locality, and forces the database engine to perform expensive disk I/O because index pages cannot remain cached in RAM. Insert throughput on large tables can drop by 50% to 80% when using UUID v4 compared to sequential keys."
      },
      {
        heading: "4. UUID v7: Time-Ordered Monotonic Identifiers for Modern Databases",
        body: "Published in RFC 9562, UUID v7 resolves the B-Tree index fragmentation problem while retaining all the distributed benefits of UUIDs. A UUID v7 embeds a 48-bit UNIX millisecond timestamp at the beginning of the identifier, followed by version bits and 74 bits of random entropy.\n\n```text\nUUID v7 Structure:\n[48-bit Millisecond Timestamp] - [4-bit Version (7)] [12-bit Sub-ms Counter] - [2-bit Variant] [62-bit Random Bits]\n```\n\nBecause UUID v7 values naturally sort chronologically, database inserts append sequentially to the right side of B-Tree indexes, eliminating page fragmentation and restoring near-identical insert performance to auto-incrementing integers."
      },
      {
        heading: "5. Comparing UUIDs to ULID, NanoID, and Auto-Incrementing BigInts",
        body: "- Auto-incrementing BigInt (1, 2, 3...): Maximizes database insert speed and uses only 8 bytes of storage, but leaks business metrics (competitors can deduce total orders placed) and cannot be generated client-side.\n- NanoID: Uses a customizable URL-friendly alphabet and smaller character lengths (e.g. 21 chars), popular in frontend applications.\n- ULID (Universally Unique Lexicographically Sortable Identifier): A predecessor to UUID v7 using Crockford's Base32 encoding (26 characters).\n- UUID v7: The official IETF standardized format that offers native 128-bit UUID database column compatibility while providing time-ordered performance."
      },
      {
        heading: "6. Generating Cryptographically Strong UUIDs in Modern JavaScript",
        body: "Modern browsers and Node.js (v14.17+) natively support cryptographically secure UUID v4 generation without external npm packages:\n\n```javascript\n// Native browser & Node.js UUID v4 generator\nconst id = crypto.randomUUID();\nconsole.log(id); // e.g., '36b8f84d-df4e-4d49-b662-bcde71a8764f'\n```\n\nWebUtil's UUID Generator allows you to instantly generate single or bulk batches of UUID v4 and UUID v7 identifiers directly in your browser with zero server roundtrips."
      },
    ]
  },
  "online-tools-security": {
    title: "Online Developer Tool Security: Why Client-Side Processing Is Essential",
    description: "Understand the security and privacy risks of online utility sites. Learn how to verify zero-tracking tools in Chrome DevTools and protect corporate secrets.",
    date: new Date("2025-11-05T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Hidden Risks of Cloud-Based Developer Utility Sites",
        body: "Every day, thousands of developers copy and paste proprietary code, database credentials, production JSON Web Tokens, customer personal data (PII), and private cryptographic keys into online formatters, converters, and decoders. Most developers assume these utilities run harmlessly in their browser.\n\nHowever, a staggering percentage of popular utility websites are built with traditional server-side architectures: when you click 'Format' or 'Convert', your sensitive data is transmitted over HTTP POST requests to third-party web servers. On those servers, your data may be logged, stored in plain text, processed through third-party telemetry, or exposed to unauthorized access."
      },
      {
        heading: "2. Corporate Security Breaches Caused by Pasting Secrets into Web Tools",
        body: "Accidental data leakage through online web utilities is a recognized cybersecurity risk in corporate security audits:\n\n- Leaking JWT Session Tokens: Pasting production JWT tokens into public decoders can expose user IDs, email addresses, and session signatures to logging servers.\n- Leaking API Keys & DB Credentials: Paste dumps into SQL formatters or JSON pretty-printers often include embedded database passwords, AWS access keys, or Stripe webhook secrets.\n- Regulatory Compliance Violations: Submitting healthcare records, European citizen data, or credit card information to unvetted cloud tools violates GDPR, HIPAA, and PCI-DSS compliance, exposing companies to severe legal fines."
      },
      {
        heading: "3. Client-Side vs Server-Side Architecture: Inspecting Network Payloads",
        body: "The defining engineering difference between a secure utility and an insecure one lies in where the computation executes:\n\n- Server-Side Tools: Input data is sent via network requests to an API endpoint (`POST /api/format`), processed on a remote Linux container, and returned in the response.\n- Client-Side Tools: Code execution happens entirely in the local browser JavaScript engine (V8, JavaScriptCore, or SpiderMonkey). The data never leaves the browser tab's RAM."
      },
      {
        heading: "4. How to Verify Zero-Tracking in Chrome DevTools Network Tab",
        body: "You do not have to blindly trust a website's privacy claims. You can verify whether a tool transmits your data in 30 seconds using Chrome DevTools:\n\n1. Open your browser's Developer Tools (Press F12 or right-click and select 'Inspect').\n2. Navigate to the 'Network' tab and ensure the recording icon is active (red circle).\n3. Check the 'Fetch/XHR' filter so you only see asynchronous background data transmissions.\n4. Paste a dummy payload into the tool and click the action button ('Format', 'Decode', 'Generate').\n5. Inspect the Network list: On a genuine client-side tool (like WebUtil), ZERO Fetch/XHR network requests will appear. If you see HTTP POST requests sending your input string, the tool is transmitting your data to an external server."
      },
      {
        heading: "5. Content Security Policy (CSP) and Sandbox Isolation",
        body: "Modern browser security relies heavily on Content Security Policy (CSP) headers. A strong CSP restricts what domains a web page can communicate with, preventing unauthorized exfiltration of user data even in the presence of compromised third-party scripts. By isolating processing to client-side Web Workers and sandboxed frames, developers can guarantee data isolation."
      },
      {
        heading: "6. Privacy Compliance: GDPR, HIPAA, and WebUtil's Guarantee",
        body: "WebUtil was founded on the fundamental principle that utility tools should respect developer privacy. All 30+ tools on WebUtil—from JSON formatting to PDF merging and cryptographic hashing—run 100% locally in your browser. Nothing is ever sent to a server, nothing is tracked, and nothing is stored."
      },
    ]
  },
  "hash-generator-guide": {
    title: "Cryptographic Hash Generator Guide: MD5, SHA-1, SHA-256, and SHA-512",
    description: "Learn how cryptographic hash functions work: mathematical one-way guarantees, collision vulnerabilities (SHAttered), integrity checksums, and Web Crypto API.",
    date: new Date("2026-03-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Mathematical Foundations of One-Way Cryptographic Hash Functions",
        body: "A cryptographic hash function is a mathematical algorithm that transforms an arbitrary amount of data (from a single character to a multi-gigabyte video file) into a fixed-length string of bits, known as a digest or hash. Cryptographic hashes must satisfy three core security guarantees:\n\n- Pre-image resistance (One-way): Given a hash value H, it is computationally infeasible to find the original input X such that Hash(X) = H.\n- Second pre-image resistance: Given an input X, it is infeasible to find a different input Y such that Hash(X) = Hash(Y).\n- Collision resistance: It is infeasible to find any two different inputs that produce the exact same hash output."
      },
      {
        heading: "2. The Fall of Legacy Hashes: Why MD5 and SHA-1 Are Broken",
        body: "Both MD5 (Message Digest 5, 128-bit) and SHA-1 (Secure Hash Algorithm 1, 160-bit) were once security standards, but have been completely broken cryptographically:\n\n- MD5: In 2004, researchers demonstrated practical collision attacks where two different files produce identical MD5 hashes in seconds. MD5 should NEVER be used for digital certificates or security verification.\n- SHA-1: In 2017, Google and CWI Amsterdam published the 'SHAttered' attack, generating two distinct PDF documents with identical SHA-1 hashes. Major browsers and Git repositories have migrated to SHA-256."
      },
      {
        heading: "3. SHA-256 and SHA-512 (The SHA-2 Family)",
        body: "Standardized by NIST under FIPS PUB 180-4, the SHA-2 family includes SHA-224, SHA-256, SHA-384, and SHA-512. Designed by the NSA, SHA-256 processes data in 512-bit message blocks through 64 iterative transformation rounds using bitwise operations, modular additions, and compression functions.\n\nSHA-256 produces a 256-bit (64-character hexadecimal) digest and remains the global benchmark for TLS certificates, blockchain proof-of-work, and software signature verification."
      },
      {
        heading: "4. Integrity Verification: Checksums for Downloads and Packages",
        body: "Software distributors publish cryptographic hash checksums alongside installer files so users can verify that the downloaded package was not corrupted in transit or tampered with by an attacker:\n\n```bash\n# Verify a downloaded file against published checksum in Bash\necho \"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  package.tar.gz\" | sha256sum --check\n```"
      },
      {
        heading: "5. Hashes vs Encryption vs Password KDFs",
        body: "- Hashes: One-way, deterministic, fixed-length digests designed to verify integrity.\n- Encryption (AES, RSA): Two-way mathematical transformation designed to hide confidentiality, reversible only with a private key.\n- Password KDFs (Argon2id, bcrypt): Deliberately slow, memory-intensive hashing designed to protect passwords against GPU brute-forcing."
      },
      {
        heading: "6. Computing Hashes in the Browser with Web Crypto API",
        body: "Modern browsers can compute SHA-256 and SHA-512 hashes natively at hardware speeds without third-party libraries:\n\n```javascript\nasync function computeSHA256(text) {\n  const msgBuffer = new TextEncoder().encode(text);\n  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);\n  const hashArray = Array.from(new Uint8Array(hashBuffer));\n  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');\n}\n\ncomputeSHA256('WebUtil').then(console.log);\n```\n\nWebUtil's Hash Generator supports instant client-side calculation of MD5, SHA-1, SHA-256, and SHA-512 with 100% data privacy."
      },
    ]
  },
  "sql-formatting-guide": {
    title: "SQL Formatting Guide: Clean Queries, Performance, and Readability Standards",
    description: "Learn how to format complex SQL queries: keyword capitalization, CTE indentation, JOIN formatting, window functions, and SQLFluff style standards.",
    date: new Date("2026-03-20T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Why Clean SQL Formatting Prevents Costly Production Outages",
        body: "SQL queries power data pipelines, business intelligence dashboards, and application persistence layers. In fast-paced software teams, unformatted, minified, or inconsistently written SQL queries are a major cause of production outages—hiding unindexed table scans, accidental Cartesian joins (`CROSS JOIN`), or inverted WHERE filters.\n\nFormatting SQL according to industry style guides (such as Mozilla, GitLab, or SQLFluff standards) turns dense walls of code into easily scanable, maintainable database logic."
      },
      {
        heading: "2. Reserved Keyword Capitalization and Identifier Quoting",
        body: "A universal standard across modern SQL style guides is writing all SQL reserved keywords in UPPERCASE, while writing table names, column names, and aliases in lowercase or snake_case:\n\n```sql\n-- AVOID: Inconsistent casing\nselect u.id, u.email, o.total from users u left join orders o on u.id = o.user_id where u.active = true;\n\n-- RECOMMENDED: Clean uppercase keywords and structured clauses\nSELECT\n  u.id,\n  u.email,\n  o.total_amount\nFROM users AS u\nLEFT JOIN orders AS o\n  ON u.id = o.user_id\nWHERE u.is_active = TRUE;\n```"
      },
      {
        heading: "3. Indenting JOIN Clauses and Complex Boolean Filters",
        body: "Indentation provides immediate visual clarity regarding table relationships:\n\n- Place each JOIN clause on a new line indented by 2 or 4 spaces.\n- Place the `ON` condition directly under the JOIN clause, further indented.\n- In complex `WHERE` filters containing multiple `AND` / `OR` conditions, place each condition on a separate line and explicitly wrap `OR` logic in parentheses to prevent logical precedence errors."
      },
      {
        heading: "4. Common Table Expressions (CTEs) vs Nested Subqueries",
        body: "Deeply nested subqueries inside `FROM` and `WHERE` clauses are notoriously difficult to read and debug. Modern SQL engines optimize Common Table Expressions (`WITH` queries) into equivalent execution plans while providing superior modularity:\n\n```sql\nWITH active_customers AS (\n  SELECT user_id, date_joined\n  FROM users\n  WHERE status = 'active'\n),\nq1_orders AS (\n  SELECT user_id, SUM(price) AS quarterly_spend\n  FROM transactions\n  WHERE created_at >= '2026-01-01'\n  GROUP BY user_id\n)\nSELECT\n  c.user_id,\n  COALESCE(o.quarterly_spend, 0) AS total_spend\nFROM active_customers AS c\nLEFT JOIN q1_orders AS o\n  ON c.user_id = o.user_id;\n```"
      },
      {
        heading: "5. Formatting Window Functions and Aggregate Partitioning",
        body: "Window functions (`ROW_NUMBER()`, `DENSE_RANK()`, `LAG()`) should be split across multiple lines when their `OVER` clause contains both `PARTITION BY` and `ORDER BY` parameters, ensuring long calculations do not cause horizontal scrolling."
      },
      {
        heading: "6. Automated Linting with SQLFluff and WebUtil's SQL Formatter",
        body: "Integrate SQL linters like SQLFluff into your CI/CD pipelines to enforce indentation rules automatically. For immediate formatting during daily database administration, paste your queries into WebUtil's SQL Formatter to beautify PostgreSQL, MySQL, and SQLite statements in one click."
      },
    ]
  },
  "xml-formatting-guide": {
    title: "XML Formatting and Validation Guide: Prologs, Namespaces, and Clean Syntax",
    description: "Master XML formatting: W3C well-formedness rules, prolog declarations, namespace management, CDATA blocks, and preventing XXE vulnerabilities.",
    date: new Date("2026-03-25T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Strict Syntax Rules of Well-Formed XML",
        body: "Unlike HTML, which web browsers historically parsed using forgiving, error-tolerant algorithms, XML enforces strict 'well-formedness'. If a single closing tag is omitted, tags overlap improperly (<b><i></b></i>), or an attribute value is unquoted, XML parsers are mandated by W3C specifications to halt execution and report a fatal parsing error.\n\nEvery XML document must possess exactly one root element that encapsulates all other elements. Empty tags must be explicitly self-closed (<br />), element names are case-sensitive (<User> is distinct from <user>), and attribute values must always be enclosed in double or single quotes."
      },
      {
        heading: "2. XML Prolog, Character Encodings, and DTD Declarations",
        body: "A production XML document begins with an optional but strongly recommended XML declaration prolog:\n\n```xml\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<configuration>\n  <environment name=\"production\">\n    <timeout unit=\"ms\">5000</timeout>\n    <retry-policy max-attempts=\"3\" backoff-factor=\"1.5\" />\n  </environment>\n</configuration>\n```\n\nThe prolog declares the XML specification version (typically 1.0) and character encoding (UTF-8). Avoid using legacy encodings like ISO-8859-1 or Windows-1252 to ensure international characters serialize without corruption across operating systems."
      },
      {
        heading: "3. Handling XML Namespaces (xmlns) and Element Prefixes",
        body: "XML namespaces prevent element name collisions when combining vocabularies from different schemas in a single document:\n\n```xml\n<root\n  xmlns:inv=\"https://webutil.tech/schema/invoice\"\n  xmlns:cust=\"https://webutil.tech/schema/customer\">\n  <inv:transaction id=\"TX-1049\">\n    <inv:amount currency=\"USD\">250.00</inv:amount>\n    <cust:client id=\"C-882\">\n      <cust:name>Acme Corporation</cust:name>\n    </cust:client>\n  </inv:transaction>\n</root>\n```\n\nPrefixes (inv:, cust:) map to unique URI identifiers, allowing automated tools, compilers, and XML Schema (XSD) validators to parse and validate each sub-element against its authoritative schema without namespace ambiguity."
      },
      {
        heading: "4. The 5 Predefined XML Entity References and CDATA Blocks",
        body: "XML reserves 5 special characters that must be escaped when written inside text elements or attribute values:\n\n- Ampersand (&): &amp;\n- Less than (<): &lt;\n- Greater than (>): &gt;\n- Double quote (\"): &quot;\n- Apostrophe ('): &apos;\n\nWhen including large blocks of unescaped text (such as raw JavaScript code, HTML snippets, or complex SQL queries), wrap the content in a CDATA (Character Data) block:\n\n```xml\n<script-payload>\n  <![CDATA[\n    function validateUser(age) {\n      return age >= 18 && age <= 120;\n    }\n  ]]>\n</script-payload>\n```\n\nInside a CDATA block, parsers treat all characters as raw text without attempting to parse tags or entity references."
      },
      {
        heading: "5. Security Risks: Preventing XXE (XML External Entity) Attacks",
        body: "XML External Entity (XXE) attacks exploit legacy DTD parsers to force servers to read local operating system files (/etc/passwd, win.ini) or execute internal network requests (Server-Side Request Forgery / SSRF).\n\n```javascript\n// In Node.js (libxmljs / xmldom): Always disable external entities\nconst parser = new DOMParser();\n// Ensure entity expansion and DTD processing are disabled\n```\n\nAlways disable external DTD resolution and entity expansion in your XML parsing libraries to prevent malicious payloads from exfiltrating data."
      },
      {
        heading: "6. Instant Client-Side XML Beautification with WebUtil",
        body: "WebUtil's XML Formatter parses and reconstructs XML documents with clean 2-space or 4-space indentation, syntax highlighting, and syntax validation entirely within your browser memory. Because no data is sent to external cloud servers, your sensitive XML configurations, SOAP payloads, and feeds remain 100% confidential."
      },
    ]
  },
  "yaml-converter-guide": {
    title: "YAML to JSON Converter Guide: Indentation Rules, Types, and Pitfalls",
    description: "Learn how to convert between YAML and JSON: strict 2-space indentation rules, the Norway problem, anchors/aliases, and safe client-side parsing.",
    date: new Date("2026-04-10T00:00:00.000Z"),
    sections: [
      {
        heading: "1. YAML: Human-Friendly Data Serialization for Modern DevOps",
        body: "YAML (YAML Ain't Markup Language) is the de facto standard format for modern configuration management, DevOps pipelines, and container orchestration. It powers Kubernetes manifests, Docker Compose services, GitHub Actions CI/CD workflows, GitLab CI, and Ansible playbooks.\n\nDesigned to be clean and human-readable, YAML relies on indentation rather than brackets or closing tags to denote hierarchical structure, minimizing syntactic visual noise for engineers."
      },
      {
        heading: "2. The Strict Tab Taboo: Why Tabs Break YAML Parsing",
        body: "The single most common cause of YAML parsing failures is the accidental inclusion of tab characters (\\t). The YAML specification strictly forbids tabs for indentation because different text editors, IDEs, and terminal emulators display tabs as anywhere from 2 to 8 visual spaces, destroying the semantic tree hierarchy.\n\n```yaml\n# BROKEN YAML (Tab character detected)\nservices:\n\tweb: # Syntax error: tabs are not allowed for indentation\n\n# VALID YAML (Consistent 2 soft spaces)\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      - \"80:80\"\n```\n\nAlways configure your code editor (VS Code, JetBrains) to insert soft spaces when pressing the Tab key."
      },
      {
        heading: "3. The Infamous 'Norway Problem' and Type Coercion Gotchas",
        body: "In YAML 1.1, unquoted strings like y, yes, n, no, true, false, on, and off were automatically parsed as booleans! For instance, if you specified a country code list:\n\n```yaml\n# The Norway Bug in YAML 1.1\ncountries:\n  - CA  # Parsed as string \"CA\"\n  - US  # Parsed as string \"US\"\n  - NO  # Parsed as boolean FALSE instead of Norway!\n```\n\nThis caused severe production bugs when applications expected country codes but received boolean values. Always quote string values that could resemble booleans, numbers, or dates: - 'NO'."
      },
      {
        heading: "4. DRY Configuration with YAML Anchors (&) and Aliases (*)",
        body: "YAML supports internal references to avoid repeating configuration blocks across multiple microservice definitions:\n\n```yaml\ndefault_logging: &logging_config\n  driver: \"json-file\"\n  options:\n    max-size: \"10m\"\n    max-file: \"3\"\n\nservices:\n  auth_service:\n    image: \"auth:latest\"\n    logging: *logging_config\n\n  billing_service:\n    image: \"billing:latest\"\n    logging:\n      <<: *logging_config\n      options:\n        max-file: \"5\" # Override specific value\n```\n\nThe anchor &logging_config marks the reusable block, and the alias *logging_config with merge key <<: unpacks those properties into the child service."
      },
      {
        heading: "5. Converting Between YAML and JSON in Fullstack Pipelines",
        body: "Because YAML is a formal superset of JSON (any valid JSON document is technically valid YAML 1.2), converting between the two is straightforward. In JavaScript, libraries like yaml or js-yaml handle conversion:\n\n```javascript\nimport YAML from 'yaml';\n\nconst yamlString = `\napp: WebUtil\nversion: 2.0\n`;\nconst jsonObject = YAML.parse(yamlString);\nconst outputYaml = YAML.stringify({ name: 'WebUtil', clientSide: true });\n```"
      },
      {
        heading: "6. Client-Side YAML Conversion on WebUtil",
        body: "WebUtil's YAML Converter allows you to convert YAML to JSON and JSON to YAML instantly in your browser with zero server roundtrips, ensuring proprietary server configurations, API keys, and deployment manifests remain completely private."
      },
    ]
  },
  "html-entities-guide": {
    title: "HTML Entities Guide: Named Entities, Decimal, Hex, and XSS Prevention",
    description: "Complete guide to HTML entities: character encoding, named vs numeric entities, preventing Cross-Site Scripting (XSS), and typography symbols.",
    date: new Date("2026-04-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Why HTML Entities Exist: Escaping Reserved Markup Delimiters",
        body: "HTML uses angle brackets (< and >) to denote element tags and ampersands (&) to denote character references. When web developers want to display a literal less-than or greater-than sign on a web page, typing < directly causes the browser's HTML parser to interpret the character as the beginning of a tag, corrupting the document layout.\n\nHTML entities are standardized character references used to display reserved characters, invisible formatting spaces, and symbols outside the document's character encoding. Using entities guarantees that your content renders predictably across all operating systems, screen readers, and web browsers."
      },
      {
        heading: "2. The Big Five Essential Entities and Their Encoding",
        body: "- &amp; -> & (Ampersand: the character reference prefix)\n- &lt; -> < (Less than: prevents tag injection)\n- &gt; -> > (Greater than: prevents tag closure injection)\n- &quot; -> \" (Double quotation mark: prevents attribute breakout)\n- &apos; -> ' (Single quote / apostrophe)\n\nIn standard XML and strict XHTML documents, only these five entities are predefined. All other characters must be specified using numeric character references or declared in an explicit DTD."
      },
      {
        heading: "3. Named Entities vs Decimal and Hexadecimal References",
        body: "Characters can be represented in three distinct ways in HTML:\n\n- Named Entity: &copy; for the copyright symbol (easy for humans to remember).\n- Decimal Code: &#169; using the Unicode code point in base-10.\n- Hexadecimal Code: &#xA9; using the Unicode code point in base-16.\n\nWhile named entities are popular for common symbols, numeric character references (decimal and hex) support every single character across the entire Unicode standard, including emojis (&#x1F680; for 🚀) and mathematical symbols (&#8734; for ∞)."
      },
      {
        heading: "4. Cross-Site Scripting (XSS) Prevention: Context-Aware Escaping",
        body: "Failing to escape user-generated input before rendering it in HTML is the root cause of Cross-Site Scripting (XSS) vulnerabilities. If an attacker inputs <script>stealCookies()</script>, converting < to &lt; neutralizes the script, rendering it as harmless visible text.\n\nContext matters: escaping for an HTML body (&lt;) is different from escaping inside an HTML attribute (where quotes must be escaped), which is different from escaping inside a <script> block where HTML entities are not parsed and can lead to code execution."
      },
      {
        heading: "5. Encoding vs Decoding in Vanilla JavaScript and Frameworks",
        body: "Modern frameworks like React and Vue automatically escape strings rendered inside JSX templates {userText}. When manipulating raw DOM elements in vanilla JavaScript, follow these rules:\n\n```javascript\n// VULNERABLE TO XSS ATTACKS\nelement.innerHTML = userComment;\n\n// SECURE: Browser automatically encodes text to safe entities\nelement.textContent = userComment;\n\n// Helper to encode arbitrary HTML entities in modern browser\nfunction escapeHtml(str) {\n  const div = document.createElement('div');\n  div.textContent = str;\n  return div.innerHTML;\n}\n```"
      },
      {
        heading: "6. Handling Typography, Whitespace, and Symbols",
        body: "HTML entities also control micro-typography:\n\n- Non-breaking space (&nbsp;): Prevents an automatic line break between two words (e.g. '10&nbsp;USD' or 'Chapter&nbsp;4').\n- Em dash (&mdash;) and En dash (&ndash;): Used for grammatical parenthetical statements and number ranges (1990&ndash;2026).\n- Quotation marks (&ldquo; and &rdquo;): Curly smart quotes for professional typography.\n\nWebUtil's HTML Entities Encoder allows you to encode and decode entire documents and text snippets with 1-click presets for minimal escaping, named entities, or full hexadecimal references."
      },
    ]
  },
  "case-converter-guide": {
    title: "Case Converter Guide: camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE",
    description: "Master programming naming conventions: camelCase, PascalCase, snake_case, kebab-case, and SCREAMING_SNAKE_CASE across JavaScript, Python, Go, and SQL.",
    date: new Date("2026-04-25T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Naming Conventions Across Programming Ecosystems",
        body: "In software engineering, consistent naming conventions improve code readability and maintainability. Different programming languages, frameworks, and database engines enforce distinct casing conventions to differentiate variables, classes, constants, API endpoints, and database columns. Understanding when and why to apply each casing standard is essential for fullstack developers."
      },
      {
        heading: "2. camelCase vs PascalCase: Variables, Methods, and Classes",
        body: "- camelCase: The first letter is lowercase, with subsequent words capitalized (userProfileData, calculateTotalRevenue). Standard for JavaScript/TypeScript variables, functions, and JSON keys.\n- PascalCase (UpperCamelCase): Every word starts with a capital letter (UserProfile, PaymentGatewayService). Standard for classes, React components, and TypeScript interfaces.\n\nIn React and modern UI libraries, PascalCase is mandatory for component names (<HeaderNav />) to distinguish custom components from native HTML elements (<header />)."
      },
      {
        heading: "3. snake_case vs kebab-case: Databases, Endpoints, and CSS",
        body: "- snake_case: Words separated by underscores (user_account_id, created_at). Standard in Python (PEP 8), Ruby, and SQL database columns. Many databases are case-insensitive, making snake_case the most reliable format for column names.\n- kebab-case (lisp-case): Words separated by hyphens (user-profile-card, btn-primary). Standard for URL slugs, REST API path segments, and CSS class names because browsers are optimized for hyphen-delimited selectors."
      },
      {
        heading: "4. CONSTANT_CASE / SCREAMING_SNAKE_CASE",
        body: "All uppercase letters separated by underscores (API_BASE_URL, MAX_RETRIES, DATABASE_CONNECTION_TIMEOUT). Used globally across virtually all languages for compile-time constants, global configurations, and environment variables defined in .env files."
      },
      {
        heading: "5. The Acronym Dilemma: Handling Words Like ID, XML, and URL",
        body: "Handling multi-letter acronyms often divides engineering teams: should you write parseXml or parseXML? Go and C# guidelines favor keeping acronyms capitalized (userID), whereas modern TypeScript style guides generally favor camelCase capitalization (userId, xmlParser) to simplify automated regex converters and prevent confusing sequences like parseXMLHTTPRequest."
      },
      {
        heading: "6. Writing High-Performance Case Conversion Algorithms",
        body: "In JavaScript, converting between cases requires splitting on word boundaries, uppercase transitions, and delimiters:\n\n```javascript\nfunction toKebabCase(str) {\n  return str\n    .replace(/([a-z])([A-Z])/g, '$1-$2')\n    .replace(/[\\s_]+/g, '-')\n    .toLowerCase();\n}\n\nfunction toCamelCase(str) {\n  return str\n    .toLowerCase()\n    .replace(/[-_\\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));\n}\n\nconsole.log(toKebabCase('userProfileData')); // user-profile-data\nconsole.log(toCamelCase('user-profile-data')); // userProfileData\n```\n\nWebUtil's Case Converter tool allows you to convert text blocks between camelCase, PascalCase, snake_case, kebab-case, and Title Case in real-time with zero server latency."
      },
    ]
  },
  "markdown-guide": {
    title: "Markdown Guide: CommonMark, GitHub Flavored Markdown (GFM), and Syntax",
    description: "A complete developer guide to Markdown: CommonMark standards, GitHub Flavored Markdown (GFM) tables, task lists, code blocks, and AST rendering.",
    date: new Date("2026-05-01T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Evolution of Markdown: From Gruber's Spec to CommonMark",
        body: "Created in 2004 by John Gruber and Aaron Swartz, Markdown was designed to allow writers to compose rich text using an easy-to-read, easy-to-write plain text format that converts cleanly into valid HTML. As Markdown became the default format for technical documentation, README files, and static site generators, ambiguous edge cases in the original syntax led to the development of CommonMark—a rigorous, unambiguous standard.\n\nToday, CommonMark and GitHub Flavored Markdown (GFM) are supported by virtually every code editor, chat platform (Discord, Slack), documentation generator (Astro, Next.js, VitePress), and issue tracker."
      },
      {
        heading: "2. Essential Syntax: Headings, Emphasis, Blockquotes, and Lists",
        body: "- Headings: Prefix lines with # for H1 through ###### for H6. Always leave a blank line before and after headings to ensure standard parsers recognize them.\n- Emphasis: Wrap text in *italic* or **bold**, or combine them with ***bold italic***.\n- Blockquotes: Prefix lines with > for callouts and quotes. You can nest blockquotes with >>.\n- Lists: Use 1. 2. 3. for ordered lists and - or * for unordered lists. Indent sub-lists with 2 or 4 spaces."
      },
      {
        heading: "3. Code Blocks: Inline Backticks vs Fenced Blocks",
        body: "Use single backticks for inline code `const x = 10;`. For multi-line code blocks, use triple backticks (```) followed by the language identifier (````javascript, ````python, ````bash) to enable syntax highlighting in modern renderers.\n\nFenced code blocks eliminate the old, confusing 4-space indentation rule from legacy Markdown and allow specifying line highlighting, diff blocks, and copy-to-clipboard buttons."
      },
      {
        heading: "4. GitHub Flavored Markdown (GFM) Extensions",
        body: "GFM adds essential features for software engineering:\n\n- Tables: Created using pipes | and hyphens - with optional colon alignment (:--- left, :---: center, ---: right).\n- Task Lists: - [x] Completed task and - [ ] Pending task.\n- Strikethrough: Wrap text in ~~strikethrough~~.\n- Autolinks: URLs like https://webutil.tech are automatically turned into clickable links without explicit anchor tags."
      },
      {
        heading: "5. Safe HTML Rendering and AST Processing with Unified / Remark",
        body: "When rendering user-generated Markdown in web applications, always sanitize the output HTML using libraries like DOMPurify or sanitize-html to prevent malicious XSS attacks from injected <script> or onload handlers:\n\n```javascript\nimport { unified } from 'unified';\nimport remarkParse from 'remark-parse';\nimport remarkHtml from 'remark-html';\n\nconst file = await unified()\n  .use(remarkParse)\n  .use(remarkHtml, { sanitize: true })\n  .process('# Hello World');\n```"
      },
      {
        heading: "6. Real-Time In-Browser Markdown Preview with WebUtil",
        body: "WebUtil's Markdown Preview tool provides instant split-screen editing and live HTML rendering with full GFM support running 100% locally in your browser. It includes word counting, copy-as-HTML, and export options."
      },
    ]
  },
  "text-diff-guide": {
    title: "Text Diff Guide: Understanding Myers Diff, Patching, and Code Comparisons",
    description: "Learn how diff tools compare code: Eugene Myers' diff algorithm, unified diff format, side-by-side vs inline views, and client-side privacy.",
    date: new Date("2026-05-05T00:00:00.000Z"),
    sections: [
      {
        heading: "1. How Text Diff Algorithms Work: The Myers Algorithm",
        body: "Text diff algorithms solve the classic Longest Common Subsequence (LCS) computer science problem: given two text sequences, what is the smallest number of insertions and deletions required to transform the original text into the updated text? Published in 1986 by Eugene Myers, the Myers diff algorithm is the mathematical foundation powering Git, Unix diff, and code review tools worldwide.\n\nThe algorithm computes an edit graph where diagonal movements represent matching characters (zero cost) and horizontal/vertical movements represent insertions and deletions (cost of 1), greedily searching for the shortest path."
      },
      {
        heading: "2. Unified Diff Format Explained: Hunks and Header Symbols",
        body: "The unified diff format standardizes changes into concise blocks called hunks:\n\n```diff\n--- original.txt\n+++ updated.txt\n@@ -1,4 +1,4 @@\n function calculateTax(amount) {\n-  return amount * 0.05;\n+  return amount * 0.08;\n }\n```\n\nLines starting with - denote deletions, + denotes additions, and lines without a prefix denote unchanged context. The @@ header specifies the starting line number and hunk length in both files."
      },
      {
        heading: "3. Granularity Comparisons: Character, Word, and Line-Level Diffs",
        body: "- Line-level diffs: Standard in Git commits; highlights entire lines that changed. Fast to compute, but can obscure small single-character typo fixes.\n- Word-level diffs: Highlights specific modified words within a sentence (ideal for legal contracts, blog prose, and markdown).\n- Character-level diffs: Highlights single character or whitespace modifications, essential for spotting subtle trailing space or punctuation bugs."
      },
      {
        heading: "4. Side-by-Side Split View vs Inline Unified View",
        body: "Split view displays original and modified documents in parallel side-by-side columns, making structural re-arrangements easy to track. Inline view interleaves changes chronologically, making it compact on laptop and mobile screens."
      },
      {
        heading: "5. Using Git Diff and Patch Files in Production CI/CD",
        body: "Developers frequently apply patches directly to production repositories using git apply:\n\n```bash\n# Generate a patch file\ngit diff > hotfix.patch\n\n# Apply the patch on a remote machine\ngit apply hotfix.patch\n```"
      },
      {
        heading: "6. Zero-Server Text Comparison on WebUtil",
        body: "Comparing proprietary source code, legal contracts, or customer data on cloud diff websites poses privacy risks. WebUtil's Text Diff Checker computes instant character-level and line-level diffs 100% inside your browser memory with zero server uploads."
      },
    ]
  },
  "image-converter-guide": {
    title: "Image Converter Guide: PNG vs JPEG vs WebP vs AVIF Comparison & Conversion",
    description: "Comprehensive guide to web image formats: JPEG lossy compression, PNG alpha transparency, WebP & AVIF bandwidth savings, and canvas transcoding.",
    date: new Date("2026-05-10T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Modern Web Image Formats: Architectural Strengths and Tradeoffs",
        body: "Images account for over 50% of total page weight on modern websites. Choosing the appropriate image format directly determines your site's Core Web Vitals (specifically Largest Contentful Paint / LCP), user bounce rates, and bandwidth infrastructure costs. Knowing when to choose JPEG, PNG, WebP, or AVIF is a core frontend competency."
      },
      {
        heading: "2. JPEG: Discrete Cosine Transform & Lossy Quality",
        body: "JPEG (Joint Photographic Experts Group) uses lossy compression based on the Discrete Cosine Transform (DCT) and human color perception (chroma subsampling). It excels at compressing complex continuous-tone photographs with smooth color gradients, but creates visible compression artifacts around sharp text or vector lines. JPEG does not support transparency."
      },
      {
        heading: "3. PNG: DEFLATE Compression & Alpha Transparency",
        body: "PNG (Portable Network Graphics) uses lossless DEFLATE compression. It supports true 8-bit alpha transparency and pixel-perfect rendering for logos, icons, screenshots, and diagrams with high-contrast edges, but produces large file sizes for photographs."
      },
      {
        heading: "4. WebP & AVIF: Next-Generation Compression",
        body: "- WebP: Developed by Google, WebP provides 25% to 35% smaller file sizes than JPEG at equivalent visual quality while supporting both lossy and lossless compression with transparency.\n- AVIF: Derived from the AV1 video codec, AVIF provides 50% smaller sizes than JPEG and superior high-dynamic-range (HDR) color fidelity.\n\nModern browsers support both formats natively. Using the HTML <picture> tag allows serving AVIF with WebP and JPEG fallbacks."
      },
      {
        heading: "5. Client-Side Browser Transcoding Using HTML5 Canvas",
        body: "Modern browsers can transcode images between formats locally without uploading files to a cloud server using the native Canvas API:\n\n```javascript\nfunction convertImage(file, format = 'image/webp') {\n  return new Promise((resolve) => {\n    const img = new Image();\n    img.onload = () => {\n      const canvas = document.createElement('canvas');\n      canvas.width = img.naturalWidth;\n      canvas.height = img.naturalHeight;\n      const ctx = canvas.getContext('2d');\n      ctx.drawImage(img, 0, 0);\n      canvas.toBlob((blob) => resolve(blob), format, 0.9);\n    };\n    img.src = URL.createObjectURL(file);\n  });\n}\n```"
      },
      {
        heading: "6. Fast Image Conversion on WebUtil",
        body: "WebUtil's Image Converter enables instantaneous drag-and-drop conversion between PNG, JPEG, and WebP entirely in your browser with customizable quality settings and complete user privacy."
      },
    ]
  },
  "lorem-ipsum-guide": {
    title: "Lorem Ipsum Guide: History, Modern Mockups, and Realistic Dummy Content",
    description: "Explore the history of Lorem Ipsum from Cicero's 45 BC treatise, why designers use dummy text, cognitive bias avoidance, and modern Faker data.",
    date: new Date("2026-05-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. The Classical Origins: Cicero's De Finibus Bonorum et Malorum",
        body: "Lorem Ipsum has been the printing industry's standard placeholder text since the 1500s. In 1914, Latin scholar Richard McClintock discovered that the nonsensical passage originates from sections 1.10.32 and 1.10.33 of Cicero's philosophical work 'De Finibus Bonorum et Malorum' ('On the Extremes of Good and Evil'), written in 45 BC. A 16th-century typesetter scrambled the Latin words to create a type specimen book."
      },
      {
        heading: "2. Why UI/UX Designers Use Placeholder Text",
        body: "When presenting a new web layout or prototype to clients, using real readable text causes stakeholders to focus on spelling, wording, and copy rather than evaluating the visual design, typography hierarchy, button placement, and whitespace. Dummy text keeps feedback centered on user experience and information architecture."
      },
      {
        heading: "3. The Psychology of Scannability and Letter Distribution",
        body: "Lorem Ipsum mimics natural English letter frequency and word length variation much better than repeated placeholder phrases like 'Content goes here content goes here'. This allows typography designers to evaluate realistic text rag, kerning, line breaks, and responsive text reflow across mobile and desktop viewports."
      },
      {
        heading: "4. Modern Alternatives: Realistic Domain Mockups",
        body: "While Lorem Ipsum is great for editorial designs, modern application UI (dashboards, e-commerce cards) benefits from realistic fake data: real-sounding names, addresses, product titles, and currency values to accurately test responsive overflow and string truncation."
      },
      {
        heading: "5. Best Practices for Implementing Dummy Text in Prototypes",
        body: "- Test edge cases: Include unusually long names or strings to verify flexbox and grid wrapping.\n- Never ship to production: Always audit your code prior to launch with automated linters to prevent 'Lorem ipsum' from appearing on live marketing pages."
      },
      {
        heading: "6. Instant Dummy Text Generation with WebUtil",
        body: "WebUtil's Lorem Ipsum Generator provides customizable generation of paragraphs, sentences, words, and list items with 1-click clipboard copying and zero tracking."
      },
    ]
  },
  "jwt-authentication-explained": {
    title: "JWT Authentication Explained: How JSON Web Tokens Work",
    description: "A complete guide to JWT authentication — learn how JSON Web Tokens work, their structure, how they secure APIs, and best practices for implementation.",
    date: new Date("2026-06-01T00:00:00.000Z"),
    sections: [
      {
        heading: "What is JWT Authentication?",
        body: "JWT (JSON Web Token) authentication is a token-based authentication method where a server issues a signed JSON token that clients include in subsequent requests. The token contains encoded claims about the user (identity, permissions, expiration) and is digitally signed to prevent tampering. Unlike session-based auth, JWT is stateless — the server doesn't need to store session data, making it ideal for distributed systems and microservices architectures. JWTs are widely used in OAuth 2.0, OpenID Connect, and REST API authentication. Our JWT Decoder and JWT Expiration Checker tools help you inspect and debug your tokens during development."
      },
      {
        heading: "JWT Structure: Header, Payload, and Signature",
        body: "A JWT consists of three Base64URL-encoded parts separated by dots: Header, Payload, and Signature. The header typically contains the token type (JWT) and signing algorithm (HS256, RS256). The payload contains claims — registered claims (iss, sub, exp, iat, nbf), public claims, and private custom claims. The signature is computed by signing the header + payload with a secret key (HMAC) or private key (RSA/ECDSA). Use our JWT Decoder to inspect each part of your tokens."
      },
      {
        heading: "How JWT Works in API Authentication",
        body: "The authentication flow: 1) User logs in with credentials. 2) Server validates credentials and returns a JWT (access token) plus optional refresh token. 3) Client stores the token and includes it in the Authorization header as Bearer <token> for subsequent API requests. 4) Server verifies the token's signature and expiration on each request without querying a database. 5) When the access token expires, the client uses the refresh token to get a new one. This stateless flow scales horizontally because any server instance can verify any token independently."
      },
      {
        heading: "JWT Security Best Practices",
        body: "Always use HTTPS to prevent token interception. Set short expiration times (15-60 minutes) for access tokens. Use refresh tokens with longer lifetimes stored securely. Never store JWTs in localStorage — use httpOnly cookies for browser apps. Validate the signature, expiration (exp), not-before (nbf), issuer (iss), and audience (aud) on every request. Use RS256 (asymmetric) instead of HS256 (symmetric) in microservice environments so services can verify without knowing the signing key. Rotate signing keys regularly."
      },
      {
        heading: "Common JWT Pitfalls to Avoid",
        body: "Storing sensitive data in the payload (JWTs are encoded, not encrypted). Not validating the expiration claim, allowing expired tokens to be reused. Using a weak or leaked signing secret. Setting excessively long expiration times. Not implementing a token revocation strategy (JWT is stateless — revocation requires a blocklist). Missing the audience (aud) claim validation allows token reuse across different services. Forgetting that JWTs increase request size — keep claims minimal for performance."
      },
    ]
  },
  "json-vs-yaml-for-apis": {
    title: "JSON vs YAML for APIs: Choosing the Right Data Format",
    description: "Compare JSON and YAML for API development — learn when to use each format, their strengths and weaknesses, and best practices for API design.",
    date: new Date("2026-06-05T00:00:00.000Z"),
    sections: [
      {
        heading: "JSON vs YAML for APIs: Key Differences",
        body: "JSON (JavaScript Object Notation) and YAML (YAML Ain't Markup Language) are both data serialization formats used in API development, but they serve different primary purposes. JSON is the dominant format for REST and GraphQL API payloads because it is compact, natively parsable by browsers, and has strict syntax that prevents ambiguity. YAML excels in configuration files (Docker Compose, Kubernetes, CI/CD) where human readability is prioritized over machine efficiency. JSON uses braces and brackets with explicit syntax; YAML uses indentation with minimal punctuation. Our JSON Formatter and YAML Converter tools help you work with both formats interchangeably."
      },
      {
        heading: "When to Use JSON for APIs",
        body: "JSON should be your default choice for API request/response bodies. It is the standard for REST APIs, GraphQL queries, and webhook payloads. JSON's native support in JavaScript means no parsing overhead in browsers. Every major programming language has built-in JSON libraries. JSON is also the required format for many cloud services, serverless functions, and NoSQL databases (MongoDB, Firebase). If you're building a public API, JSON is the expected format. Our JSON Formatter helps you prepare and validate JSON payloads during API development."
      },
      {
        heading: "When to Use YAML for APIs",
        body: "YAML shines in API documentation (OpenAPI/Swagger specifications are YAML by default), configuration-driven APIs, and infrastructure-as-code. If your API is primarily consumed by developers writing configuration files (like deployment pipelines or internal tools), YAML provides better readability. YAML supports comments, which JSON does not — a significant advantage for configuration files that need inline documentation. Tools like Docker Compose, Kubernetes, Ansible, and GitHub Actions all use YAML. Our YAML Converter helps you convert between YAML and JSON when needed."
      },
      {
        heading: "Performance Comparison",
        body: "JSON parsing is generally 2-5x faster than YAML parsing because JSON has simpler syntax rules and no indentation-based structure. JSON payloads are typically 10-30% smaller than equivalent YAML. For high-throughput APIs serving millions of requests, JSON's parsing speed advantage matters. YAML's parser needs to track indentation levels, handle anchors/aliases, and support multiple document types, adding overhead. For low-traffic internal configuration APIs, YAML's readability may outweigh the performance cost."
      },
      {
        heading: "Converting Between JSON and YAML",
        body: "Conversion between JSON and YAML is straightforward because both represent hierarchical data structures. When converting JSON to YAML, objects become mappings, arrays become sequences, and values maintain their types. When converting YAML to JSON, mappings become objects, sequences become arrays, and YAML-specific features (comments, anchors, multi-document files) are lost. Our free YAML to JSON Converter handles both directions with live preview, making it easy to work across both formats."
      },
    ]
  },
  "uuid-v4-vs-uuid-v7": {
    title: "UUID v4 vs UUID v7: Choosing the Right UUID for Your Application",
    description: "Compare UUID v4 and UUID v7 — understand the differences between random and time-ordered UUIDs, database performance implications, and when to use each version.",
    date: new Date("2026-06-10T00:00:00.000Z"),
    sections: [
      {
        heading: "UUID v4 vs UUID v7: The Core Difference",
        body: "UUID v4 (RFC 4122) generates identifiers using 122 random bits, producing IDs that are uniformly distributed across the entire keyspace. UUID v7 (RFC 9562) embeds a Unix millisecond timestamp in the first 48 bits, with the remaining 74 bits being random. This seemingly small change has profound implications for database performance: UUID v4 causes random insertions into B-tree indexes (page splits, fragmentation), while UUID v7 appends new IDs sequentially, matching auto-increment performance. Our UUID Generator (v4) and UUID v7 Generator let you create and compare both formats."
      },
      {
        heading: "Database Performance: UUID v4 vs UUID v7",
        body: "UUID v4's random distribution causes each new row to be inserted at a random index position, forcing the B-tree to split pages and reorganize frequently. This increases write latency, bloats index size, and degrades cache locality. UUID v7's time-prefixed design appends new rows near the end of the index, reducing page splits by 80-90% and improving insert throughput by 2-5x on PostgreSQL and MySQL benchmarks. For tables with millions of rows, the performance gap widens significantly. UUID v7 also improves range queries — SELECT * FROM users WHERE id BETWEEN ? AND ? benefits from sequential storage."
      },
      {
        heading: "When to Use UUID v4",
        body: "UUID v4 remains the better choice when you need unpredictability — for example, generating opaque public identifiers for API resources, creating session tokens, or preventing sequential ID enumeration by users. UUID v4 is also the most widely supported UUID version across languages, libraries, and databases. If you have an existing system using UUID v4, the migration cost to v7 often outweighs the performance benefit for small-to-medium databases (under 10 million rows). For distributed tracing and event sourcing where ID order is irrelevant, v4's simplicity wins."
      },
      {
        heading: "When to Use UUID v7",
        body: "UUID v7 is ideal for primary keys in OLTP databases, time-ordered event streams, chat message IDs, financial transaction IDs, time-series data, and any use case where insert performance and B-tree index health matter. PostgreSQL users benefit most — CockroachDB has adopted UUID v7 as its default key encoding. If you're starting a new project with a relational database, UUID v7 should be your default choice for primary keys. The time component also enables chronological sortability without a separate created_at column."
      },
      {
        heading: "UUID v7 Implementation and Support",
        body: "UUID v7 support is growing rapidly. Python 3.14+ includes uuid.uuid7() in the standard library. Go's google/uuid package supports v7 via uuid.NewV7(). Node.js needs a polyfill (uuidv7 npm package). PostgreSQL doesn't natively generate UUID v7 but can use extensions or application-layer generation. MySQL 8.0+ accepts UUID v7 values in BINARY(16) columns. Most UUID libraries still default to v4, so you may need to explicitly request v7. Our UUID v7 Generator provides client-side v7 generation that works in any browser."
      },
    ]
  },
  "regex-tutorial": {
    title: "Regex Tutorial for Developers: Pattern Matching, Lookarounds, and Performance",
    description: "A comprehensive developer tutorial on regular expressions: character classes, greedy vs lazy quantifiers, lookahead/lookbehind assertions, and preventing ReDoS.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Regular Expressions Demystified: Character Classes and Wildcards",
        body: "Regular expressions (regex) are formal sequences of characters defining search patterns for string matching, search-and-replace, and data validation across every major programming language.\n\n- . matches any single character except newlines.\n- \\d matches any digit (0-9); \\D matches any non-digit.\n- \\w matches any alphanumeric word character plus underscore; \\W matches non-word characters.\n- \\s matches whitespace (spaces, tabs, newlines); \\S matches non-whitespace.\n- [abc] matches any character in the bracket set; [^abc] negates the set."
      },
      {
        heading: "2. Quantifiers: Greedy vs Lazy Matches",
        body: "- Greedy (default): * (0 or more), + (1 or more), ? (0 or 1). Matches as many characters as possible.\n- Lazy (reluctant): Appending ? (*?, +?) forces the engine to match as few characters as possible.\n\n```javascript\nconst html = '<div>First</div><div>Second</div>';\nhtml.match(/<div>.*<\\/div>/);  // Greedy: matches '<div>First</div><div>Second</div>'\nhtml.match(/<div>.*?<\\/div>/); // Lazy: matches '<div>First</div>'\n```"
      },
      {
        heading: "3. Anchors and Boundaries: Start, End, and Word Boundaries",
        body: "- ^: Asserts start of string (or start of line in multiline mode /m).\n- $: Asserts end of string (or end of line).\n- \\b: Asserts a word boundary position between a word character and non-word character (e.g. \\bcat\\b matches 'cat' but not 'catch' or 'scat')."
      },
      {
        heading: "4. Advanced Grouping, Named Groups, and Lookarounds",
        body: "- Capturing groups (abc) vs Non-capturing groups (?:abc).\n- Named Capturing Groups: (?<year>\\d{4})-(?<month>\\d{2})\n- Positive Lookahead (?=...): Matches if followed by pattern.\n- Negative Lookahead (?!...): Matches if NOT followed by pattern.\n- Positive Lookbehind (?<=...) and Negative Lookbehind (?<!...)."
      },
      {
        heading: "5. Catastrophic Backtracking (ReDoS) Prevention",
        body: "Regular Expression Denial of Service (ReDoS) occurs when nested quantifiers (like (a+)+$) cause the NFA regex engine to evaluate exponential permutations on non-matching strings, causing CPU utilization to spike to 100%. Always avoid overlapping nested quantifiers in production authentication patterns."
      },
      {
        heading: "6. Interactive Real-Time Regex Testing on WebUtil",
        body: "WebUtil's Regex Tester provides instant interactive regex evaluation with syntax highlighting, capture group inspection, and explanation running 100% locally in your browser."
      },
    ]
  },
  "css-units-guide": {
    title: "CSS Units Guide: px, rem, em, vh, vw, and More Explained",
    description: "A complete guide to CSS units. Learn the difference between px, rem, em, vh, vw, and other CSS units. Understand when to use each unit for responsive web design.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    sections: [
      {
        heading: "Why CSS Units Matter",
        body: "CSS units determine how elements are sized and positioned on the web. Choosing the right unit affects responsiveness, accessibility, and maintainability. Absolute units (px, cm, in) have fixed sizes. Relative units (rem, em, vh, vw, %) adapt to the viewport, parent element, or root font size. Modern responsive design relies primarily on relative units so layouts work across devices of all sizes. Use our px to rem Converter to translate between absolute and relative units easily."
      },
      {
        heading: "px: The Pixel Unit",
        body: "The px (pixel) unit is the most common absolute unit in CSS. One pixel equals one dot on the screen. Pixels are reliable for precise layouts like borders (1px solid), box shadows, and fine details. However, px units do not scale when users change their browser's default font size for accessibility. This makes px problematic for font sizes and spacing in accessible design. Use px for visual details that must stay sharp — borders, outlines, and media queries for specific breakpoints."
      },
      {
        heading: "rem and em: Relative Font Units",
        body: "rem (root em) is relative to the root element's font size (default 16px in browsers). 1rem = 16px, 2rem = 32px. rem units respect user accessibility settings — if a user increases their base font size, everything scales proportionally. em is relative to the parent element's font size, which can compound (a 2em child inside a 2em parent is 4x the base). Use rem for most sizing (fonts, spacing, padding, margins) and em sparingly for components that should scale relative to their own font size, like buttons with padding that grows with text size. Our px to rem Converter helps you transition from px to rem."
      },
      {
        heading: "vw, vh, vmin, vmax: Viewport Units",
        body: "Viewport units are relative to the browser viewport: vw (1% of viewport width), vh (1% of viewport height), vmin (1% of the smaller dimension), vmax (1% of the larger dimension). Use 100vw for full-width elements, 100vh for full-height hero sections, and vmin/vmax for responsive font sizes that adapt to both portrait and landscape orientations. Caution: 100vw includes scrollbar width, which may cause horizontal overflow. Combine vw with clamp() for fluid typography: font-size: clamp(1rem, 2.5vw, 3rem) creates text that scales smoothly between min and max sizes."
      },
      {
        heading: "Percentage, ch, and Other CSS Units",
        body: "Percentage (%) is relative to the parent element's same property — width: 50% takes half the parent's width. The ch unit equals the width of the '0' character, useful for setting max-width on text containers (max-width: 60ch improves readability). The ex unit equals the x-height of the font. The fr unit in CSS Grid distributes available space (grid-template-columns: 1fr 2fr gives the second column twice the space). For modern responsive design, use rem for sizing and spacing, vw for full-width layouts, % for flexible layouts, ch for text containers, and px only for borders and fine details. Our CSS px to rem Converter helps you migrate legacy px values to rem."
      },
    ]
  },
  "docker-compose-tutorial": {
    title: "Docker Compose Tutorial for Beginners: Define and Run Multi-Container Apps",
    description: "Learn Docker Compose from scratch. Define multi-container applications, manage services, networks, and volumes with docker-compose.yml files.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    sections: [
      {
        heading: "What is Docker Compose?",
        body: "Docker Compose is a tool for defining and running multi-container Docker applications. With a single docker-compose.yml file, you define your application's services, networks, and volumes. One command — docker compose up — starts everything. Compose eliminates the need to memorize complex docker run commands and ensures consistent environments across development, testing, and production. Use our Docker Compose Validator to check your YAML syntax before deploying."
      },
      {
        heading: "Docker Compose File Structure",
        body: "A docker-compose.yml file starts with version (optional in modern Compose), then defines services, networks, and volumes. The services section is required — each service defines a container with an image (from Docker Hub) or build context (local Dockerfile). Key service fields: image (nginx:alpine), build (./app), ports (80:80), environment (NODE_ENV=production), volumes (./data:/data), depends_on (db), and restart (always). Networks connect services, volumes persist data. Example: a basic LAMP stack defines web (Apache), db (MySQL), and php (PHP-FPM) services with appropriate connections."
      },
      {
        heading: "Common Docker Compose Commands",
        body: "docker compose up -d starts all services in detached mode. docker compose down stops and removes containers, networks, and default volumes. docker compose logs -f follows all service logs. docker compose ps shows running containers. docker compose exec service_name bash opens a shell inside a running container. docker compose build rebuilds service images. docker compose pull fetches latest images. docker compose restart service_name restarts a specific service. docker compose config validates your YAML and shows the resolved configuration — use our Docker Compose Validator for quick client-side checks."
      },
      {
        heading: "Docker Compose for Development vs Production",
        body: "For development, Compose provides hot-reloading by mounting code as volumes (./app:/app), using environment files (.env), and exposing debug ports. Override files (docker-compose.override.yml) add development-specific config without modifying the base file. For production, use docker compose -f docker-compose.yml -f docker-compose.prod.yml to layer configurations. Production adjustments include removing volume mounts for code (use image builds instead), adding restart policies, configuring resource limits, using named volumes, and setting up health checks. Always validate your production config with our Docker Compose Validator before deployment."
      },
      {
        heading: "Docker Compose Best Practices",
        body: "Use specific image tags (not :latest) to ensure reproducible builds. Keep services small and focused — one process per container. Use depends_on with condition: service_healthy to control startup order. Set resource limits with deploy.resources for production. Use .env files for environment-specific variables. Define custom networks instead of relying on the default bridge network. Use named volumes for persistent data (databases) and bind mounts for development. Validate your YAML files with our Docker Compose Validator before every deployment to catch syntax errors early."
      },
    ]
  },
  "rest-api-design": {
    title: "REST API Design Best Practices: Build Better Web APIs in 2026",
    description: "Learn REST API design best practices including resource naming, HTTP methods, status codes, pagination, error handling, and versioning strategies.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    sections: [
      {
        heading: "What Makes a Good REST API?",
        body: "A well-designed REST API is intuitive, consistent, and predictable. Good API design reduces development time, minimizes integration errors, and creates a developer experience that people enjoy working with. Key principles: resource-oriented URLs, proper HTTP method usage, meaningful status codes, consistent error formats, and comprehensive documentation. Whether you're building a public API or internal microservice, following REST conventions makes your API easier to adopt. Use our JSON Formatter to inspect and debug API responses during development."
      },
      {
        heading: "Resource Naming Conventions",
        body: "Use nouns for resources, not verbs: /users instead of /getUsers. Use plural nouns for collections: /users, /orders, /products. Use nested routes for relationships: /users/123/orders, /orders/456/items. Keep URLs lowercase with hyphens: /order-items not /orderItems. Use query parameters for filtering, sorting, and pagination: /users?role=admin&sort=created_at&order=desc. Avoid deep nesting — limit to two levels, then use query parameters or dedicated endpoints. Consistent naming is the foundation of a usable API."
      },
      {
        heading: "HTTP Methods and Status Codes",
        body: "GET for retrieval (200 OK), POST for creation (201 Created), PUT for full replacement (200 OK), PATCH for partial updates (200 OK), DELETE for removal (204 No Content). Common status codes: 400 Bad Request (invalid input), 401 Unauthorized (missing auth), 403 Forbidden (insufficient permissions), 404 Not Found (resource doesn't exist), 409 Conflict (duplicate resource), 422 Unprocessable Entity (validation failed), 429 Too Many Requests (rate limited), 500 Internal Server Error (server fault). Always return the most specific status code — it helps client developers debug integration issues."
      },
      {
        heading: "Error Handling and Pagination",
        body: "Standardized error responses: return a consistent JSON structure with error code, message, and optional details. Example: { error: 'validation_error', message: 'Email is required', details: [{ field: 'email', issue: 'required' }] }. For pagination, support cursor-based pagination for large datasets (cursor-based is more reliable than offset-based when data changes). Response format: { data: [...], pagination: { cursor: 'abc123', has_more: true, total: 1000 } }. Include rate limiting headers (X-RateLimit-Remaining, X-RateLimit-Reset) so clients can self-regulate. Our JSON Formatter helps you prettify API responses during development."
      },
      {
        heading: "API Versioning and Documentation",
        body: "Version your API from day one. Use URL-based versioning (/v1/users, /v2/users) for simplicity, or accept-header versioning (Accept: application/vnd.api+json;version=2) for cleaner URLs. Document versions clearly and maintain migration guides. Use OpenAPI/Swagger (YAML format) for API documentation — it generates interactive docs, client SDKs, and server stubs automatically. Include request/response examples, authentication requirements, and error codes. Deprecate old versions with clear timelines and Sunset HTTP headers. Our URL Encoder tool helps you properly encode query parameters and API URLs."
      },
    ]
  },
  "how-qr-codes-work": {
    title: "How QR Codes Work: A Complete Guide to QR Code Technology",
    description: "Learn how QR codes work — from error correction and data encoding to structure and generation. Understand the technology behind every QR code you scan.",
    date: new Date("2026-06-14T00:00:00.000Z"),
    sections: [
      {
        heading: "What Is a QR Code?",
        body: "A QR Code (Quick Response Code) is a two-dimensional barcode invented by Denso Wave in 1994. Unlike traditional barcodes that store data in one dimension (width of bars), QR codes store data in two dimensions using black and white squares arranged in a grid. This allows QR codes to hold significantly more data — up to 3KB versus 20-25 bytes for a standard barcode. QR codes can encode numeric data, alphanumeric characters, bytes/binary data, and Japanese Kanji/Kana characters. Use our QR Code Generator to create your own codes instantly in your browser."
      },
      {
        heading: "QR Code Structure and Components",
        body: "A QR code has several structural elements: the finder patterns (three large squares in corners) let scanners detect position and orientation. Timing patterns (alternating black/white lines) help the scanner determine module size. Alignment patterns (smaller squares) aid scanning on curved or angled surfaces. The format information encodes error correction level and mask pattern. The data area stores the actual content. The quiet zone (white border) separates the QR code from surrounding text. Understanding this structure helps when printing QR codes — never crop the quiet zone or alter the finder patterns."
      },
      {
        heading: "Error Correction in QR Codes",
        body: "QR codes use Reed-Solomon error correction, allowing them to be read even when partially damaged or obscured. Four levels: L (Low, 7% recovery), M (Medium, 15%), Q (Quartile, 25%), H (High, 30%). Higher error correction means more redundant data is stored, resulting in a denser QR code. For maximum scan reliability, use level H — logos and designs can cover up to 30% of the code while remaining scannable. For simple black-and-white QR codes on stable surfaces (business cards, posters), level M provides good balance between density and durability. Our QR Code Generator creates codes optimized for reliable scanning."
      },
      {
        heading: "QR Code Data Capacity and Encoding Modes",
        body: "QR codes support four encoding modes: numeric (up to 7,089 characters), alphanumeric (up to 4,296 characters — includes digits, uppercase letters, and symbols), byte/binary (up to 2,953 bytes — supports UTF-8 text and URLs), and Kanji/Kana (up to 1,817 characters for Japanese text). QR codes automatically select the most efficient encoding mode based on the data. Version determines the grid size — version 1 is 21x21 modules, version 40 is 177x177 modules. Higher versions hold more data but require higher printing resolution. For most URLs, version 2-4 (25x25 to 33x33) is sufficient."
      },
      {
        heading: "QR Code Use Cases and Best Practices",
        body: "Common use cases: URLs (link to websites, app stores), vCard contacts (scan to save to phone), Wi-Fi credentials (scan to connect), payment links (scan to pay), event check-in (tickets with QR codes), and product packaging (scan for info). Best practices: always test your QR code with multiple devices and apps. Ensure minimum print size of 2cm x 2cm (0.8 inches) for reliable scanning. Maintain high contrast between modules and background. Test with your QR Code Generator before mass printing — verify the data is correct and all URLs use HTTPS for security."
      },
    ]
  },
  "common-jwt-errors": {
    title: "Common JWT Errors and How to Debug Them",
    description: "A practical guide to debugging JWT parsing errors — base64 decoding issues, Bearer prefix problems, signature mismatches, and how to fix them.",
    date: new Date("2026-06-28T00:00:00.000Z"),
    sections: [
      {
        heading: "Why JWT Parsing Fails",
        body: "JWT parsing errors are some of the most frustrating issues in API development. The error messages are often cryptic — 'illegal base64 data at input byte 0', 'signature is invalid', or 'token contains an invalid number of segments'. Most of these errors have simple causes: including the Bearer prefix in the token string, using the wrong signing key, or passing an expired token. Understanding what each error means saves hours of debugging. Use our JWT Decoder to inspect token parts and spot issues instantly."
      },
      {
        heading: "The Bearer Prefix Problem",
        body: "The most common JWT error is passing 'Bearer <token>' instead of just '<token>' to the parser. When you extract the Authorization header, it contains 'Bearer eyJhbGci...'. If you pass this whole string to jwt.ParseWithClaims (Go), jwt.verify (Node.js), or any parser, the library tries to base64-decode 'Bearer ' as the header segment, which fails with 'illegal base64 data at input byte 0'. Always strip the prefix: tokenString = strings.TrimPrefix(tokenString, 'Bearer ') in Go, or token = authHeader.replace('Bearer ', '') in JavaScript. Our JWT Decoder accepts tokens with or without the prefix and shows you the decoded parts."
      },
      {
        heading: "Signature Validation Errors",
        body: "'Signature is invalid' or 'token signature does not match' means the token was signed with a different secret or key than what you're using to verify. Common causes: using HS256 (symmetric) signing but passing an RSA public key for verification, rotating the signing secret without accounting for tokens issued under the old secret, or environment mismatch (development vs production secret). For Go's jwt.ParseWithClaims, check that your token's signing method matches the expected method in the callback. The error 'unexpected signing method' fires when the token uses a different algorithm than your code expects. Always verify the algorithm in your parser: if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok { return nil, errors.New('unexpected signing method') }."
      },
      {
        heading: "Expiration and Claim Validation",
        body: "'Token is expired' is straightforward — the exp (expiration) claim has passed. But 'invalid claims' or structural errors often mean missing required claims. If your parser expects custom claims (like a UserClaims struct), but the token only contains standard registered claims (iss, sub, exp, iat), parsing fails. Always log the raw error from the parser. For Go: _, err := jwt.ParseWithClaims(...) — the err contains the specific failure reason. Validate all standard claims: iss (issuer) should match your auth server URL, aud (audience) should match your service name, exp must be in the future. Our JWT Expiration Checker decodes and displays all claims so you can verify expiration and payload structure at a glance."
      },
      {
        heading: "Multi-Secret Key Rotation Strategy",
        body: "When rotating JWT signing keys, tokens issued under the old key will fail validation after rotation. The solution: maintain a list of valid keys and try each one. In Go, collect all valid secrets in a slice and attempt parsing with each. In the jwt.ParseWithClaims key function, iterate over keys and return the first one that matches the token's key ID (kid header). Include a grace period where both old and new keys are accepted. Store the kid in the JWT header so your parser can select the correct key without trying all possibilities. Use our JWT Decoder to inspect the kid header and verify which key was used to sign. This pattern lets you rotate keys without invalidating existing sessions."
      },
    ]
  },
  "json-compact-pretty-print": {
    title: "JSON Compact Pretty-Print: Smart Formatting Between Minified and Expanded",
    description: "Learn how smart JSON formatting works — keeping small objects on one line while expanding large ones. A practical guide to compact pretty-print techniques.",
    date: new Date("2026-06-30T00:00:00.000Z"),
    sections: [
      {
        heading: "What Is Compact Pretty-Print?",
        body: "Standard JSON formatters offer two modes: minified (everything on one line) or pretty-printed (everything expanded with indentation). Compact pretty-print (also called smart formatting) is a middle ground — small objects and arrays stay on one line while large structures are expanded. This preserves readability for shallow data while keeping deep structures navigable.\n\nPython's json module doesn't support this natively, but you can achieve it with a custom encoder or by using tools that offer format/compact toggle options like our JSON Formatter. The key insight is that JSON readability is not binary — different data shapes benefit from different formatting strategies. A configuration object with three keys is perfectly readable on one line, while a list of 100 user records needs vertical space.\n\nCompact formatting solves the problem that developers face daily: API responses that mix small metadata with large datasets. When you curl an endpoint and get back a wall of text, you toggle to pretty-print and suddenly a 10-line response becomes 300 lines. Compact formatting prevents this by being smart about what to expand and what to keep inline."
      },
      {
        heading: "When to Use Compact Formatting",
        body: "Compact formatting is ideal for log output where you need to see structure quickly without excessive line count. Development API responses become significantly more readable when small config objects stay inline but large data arrays are expanded for browsing. Configuration files benefit from compact formatting because it reduces vertical scrolling while preserving the structural understanding.\n\nDebug output with mixed-depth data is where compact formatting truly shines. Consider a response containing a small metadata object alongside a large items array. In standard pretty-print, the metadata takes 15 lines for 3 keys. In compact mode, it takes 1 line. This difference compounds across hundreds of API calls during a debugging session.\n\nOur JSON Formatter lets you toggle between expanded, compact, and minified views with one click. This means you can choose the right view for your task without switching tools. Compact mode is particularly useful when you need to share JSON snippets in documentation or chat messages where space is limited."
      },
      {
        heading: "Implementing Compact Pretty-Print in Python",
        body: "To implement compact formatting in Python, subclass json.JSONEncoder and override the encode method. Set a max_inline_length threshold (e.g., 80 characters) to determine what qualifies as compact. Use regex to detect small objects and arrays that can safely be inlined.\n\nHere is the core approach: first serialize your data with standard pretty-print (indent=2). Then post-process the output with regular expressions. For objects: re.sub(r'\\{([^}]+)\\}', lambda m: '{' + m.group(1).strip() + '}' if len(m.group(0)) <= threshold else m.group(0), s). For arrays: re.sub(r'\\[([^\\]]+)\\]', lambda m: '[' + m.group(1).strip() + ']' if len(m.group(0)) <= threshold else m.group(0), s).\n\nThe threshold determines the behavior: lower values produce more expanded output, higher values produce more compact output. A threshold of 80 characters works well for terminal-width output. For code documentation, you might want a tighter threshold of 60 characters to avoid horizontal scrolling. This approach requires no external dependencies and gives you fine-grained control over the formatting behavior."
      },
      {
        heading: "Compact Formatting in Other Languages",
        body: "JavaScript developers can achieve compact formatting by using JSON.stringify with a replacer function and post-processing the output with regex, similar to the Python approach. Node.js has the `json-stringify-pretty-compact` npm package that provides this behavior out of the box with customizable options including maxLength, indent, and arrayProcessor.\n\nGo's encoding/json package doesn't support compact mode natively, but you can implement custom MarshalJSON methods on your structs. The approach is to marshal the struct normally, then run a post-processing step that inlines short values. Alternatively, you can use the jsonparser or ffjson libraries that give you more control over serialization.\n\nRust's serde_json library has both PrettyFormatter and CompactFormatter. You can write a custom formatter that switches between them based on the depth or size of the current value. This requires implementing the serde_json::ser::Formatter trait, which gives you hooks at every stage of serialization.\n\nFor developers who need compact formatting occasionally without writing code, our JSON Formatter is the fastest path. It supports all three modes — expanded, compact, and minified — with instant switching and no setup required."
      },
      {
        heading: "Comparing JSON Formatting Modes",
        body: "The three formatting modes serve different purposes and understanding their tradeoffs helps you choose the right one for each task. Minified mode removes all whitespace, producing the smallest possible output. This is ideal for API responses where bandwidth matters, for storing JSON in databases, and for machine-to-machine communication. A typical API response with 100 items is about 3KB minified.\n\nPretty-printed mode adds full indentation with each level getting its own line. This is the most readable format for humans browsing data structures. It makes nested relationships visually obvious and simplifies debugging. The same 100-item response is about 6KB pretty-printed — double the size of minified but far more readable.\n\nCompact mode strikes the balance between the two. Structure is indented so you can see the hierarchy, but leaf nodes — small objects and arrays — stay on one line. For the same 100-item response, compact mode produces about 4KB. This is ideal for development workflows because it is readable enough to inspect at a glance while being compact enough to fit in terminal output and log files.\n\nTry all three modes on our JSON Formatter to see which works best for your specific data. The right choice depends on your context: use minified for production APIs, pretty-printed for deep debugging, and compact for daily development work."
      },
    ]
  },
  "json-to-csv-guide": {
    title: "JSON to CSV Conversion: The Complete Developer's Guide",
    description: "Learn how to convert JSON to CSV in JavaScript, Python, and online tools. Handle nested objects, arrays, and large datasets efficiently.",
    date: new Date("2026-07-01T00:00:00.000Z"),
    sections: [
      {
        heading: "Why Convert JSON to CSV?",
        body: "JSON and CSV serve different purposes in the data ecosystem. JSON excels at representing hierarchical data with nested objects and arrays, making it ideal for APIs and configuration files. CSV, on the other hand, is the universal format for spreadsheets, data analysis tools, and database imports. Converting between them is a common task for developers working with data pipelines.\n\nThe most frequent use cases for JSON to CSV conversion include exporting API data to Excel or Google Sheets for business analysis, preparing data for machine learning training sets, migrating data between systems that use different formats, and generating reports from JSON log files. CSV's simplicity makes it the preferred format for non-technical stakeholders who need to work with data in spreadsheet applications.\n\nOur JSON to CSV Converter handles this conversion automatically with support for nested objects, custom delimiters, and BOM for Excel compatibility. The tool runs entirely in your browser, ensuring sensitive data never leaves your machine."
      },
      {
        heading: "JSON to CSV Conversion Rules",
        body: "Converting JSON to CSV requires flattening hierarchical data into a tabular structure. The basic rule is that each JSON object becomes one row in the CSV, and each key becomes a column header. Simple flat JSON objects convert directly — keys become column headers, values become cells. The order of columns is determined by the first object in the array, with additional keys from subsequent objects appended as new columns.\n\nNested objects present a challenge because CSV cannot represent hierarchy. The standard approach is to flatten nested keys using dot notation: a nested object like {\"user\": {\"name\": \"Alice\", \"email\": \"alice@example.com\"}} becomes columns user.name and user.email. This preserves the structural information while fitting into the tabular format. Our tool automatically flattens nested objects this way.\n\nArrays within JSON objects are more complex. Simple arrays of primitive values (strings, numbers) can be joined into a single cell with a separator. Arrays of objects require different handling — each object in the array can create additional columns (user.addresses[0].street, user.addresses[1].street) or the array can be serialized as a JSON string within the cell. Our JSON to CSV Converter offers configurable array handling to match your needs."
      },
      {
        heading: "JSON to CSV in JavaScript",
        body: "JavaScript provides several approaches for JSON to CSV conversion, from manual implementation to library-based solutions. For simple flat JSON, you can extract keys from the first object, map each object to a CSV row, and join everything with newlines. The core logic is straightforward: const headers = Object.keys(data[0]); const rows = data.map(obj => headers.map(h => JSON.stringify(obj[h] ?? '')).join(',')); const csv = [headers.join(','), ...rows].join('\\n').\n\nFor production use, the PapaParse library is the most popular choice for CSV parsing and generation in JavaScript. It handles edge cases like values containing commas, line breaks within cells, and proper escaping. For Node.js environments, the csv-stringify package from the csv project provides stream-based CSV generation that handles large datasets without loading everything into memory.\n\nBrowser-based conversion has the advantage of keeping data local. Our JSON to CSV Converter uses the File API and Blob downloads to generate CSV files without any server upload. This makes it suitable for sensitive data that cannot be sent to external services. The conversion happens entirely in JavaScript, using the techniques described above, with optimizations for handling arrays of hundreds of thousands of rows."
      },
      {
        heading: "JSON to CSV in Python",
        body: "Python offers excellent libraries for JSON to CSV conversion through the standard library and pandas. The simplest approach uses the built-in json and csv modules: load JSON with json.loads(), open a CSV file with csv.writer(), write the header row from the keys of the first object, then iterate and write each row. For flat JSON, this is about 10 lines of code and requires no external dependencies.\n\nFor complex JSON with nested structures, pandas provides the most convenient path. Use pd.json_normalize() to flatten nested JSON into a DataFrame, then df.to_csv() to export. The json_normalize function handles nested objects with dot notation, nested arrays with record_path, and custom separators. It also deals with missing values gracefully by filling with NaN or a specified fill value.\n\nFor very large JSON files that don't fit in memory, use ijson for streaming JSON parsing combined with csv streaming writer. This processes the JSON incrementally without loading the entire file into memory, making it suitable for multi-gigabyte datasets. The tradeoff is more complex code — you need to know the structure of your JSON in advance to define the streaming paths. Our online JSON to CSV Converter handles files up to 50MB in the browser using streaming chunked processing."
      },
      {
        heading: "Using WebUtil's JSON to CSV Converter",
        body: "Our free JSON to CSV Converter provides a simple interface for converting JSON data into CSV format. Paste your JSON array, configure the conversion options, and download the result as a CSV file. The tool supports several options to handle different JSON structures and output requirements.\n\nKey features include BOM insertion for Excel compatibility — Excel often misinterprets UTF-8 CSV files without a Byte Order Mark, especially when they contain non-ASCII characters. The tool also supports custom delimiter selection (comma, semicolon, tab, pipe) for regional Excel variants that expect semicolons. Nested object flattening is automatic using dot notation, and you can choose how arrays are handled.\n\nAll processing runs client-side using your browser's JavaScript engine. No data is uploaded to any server — your JSON stays on your machine. This is critical for developers working with sensitive data like customer records, financial data, or proprietary information. The converter handles arrays of up to 50,000 rows efficiently, with larger datasets processed in chunks to keep the browser responsive."
      },
    ]
  },
  "kubernetes-yaml-guide": {
    title: "Kubernetes YAML: Writing Production-Grade Manifests",
    description: "A complete guide to writing Kubernetes YAML manifests — Pods, Deployments, Services, ConfigMaps, and validation best practices.",
    date: new Date("2026-07-02T00:00:00.000Z"),
    sections: [
      {
        heading: "What Is Kubernetes YAML?",
        body: "Kubernetes uses YAML files to define the desired state of your cluster resources. Every object in Kubernetes — Pods, Deployments, Services, ConfigMaps, Secrets, Ingresses — is created from a YAML manifest that describes what you want and how it should run. Understanding Kubernetes YAML is essential for anyone working with container orchestration.\n\nA Kubernetes YAML manifest follows a consistent structure across all resource types. Every manifest has four required top-level fields: apiVersion (which API version to use), kind (the resource type), metadata (name, namespace, labels, annotations), and spec (the desired state configuration). This consistency means once you understand one resource type, learning others is a matter of learning their specific spec fields.\n\nThe challenge most developers face is getting the YAML syntax correct. Kubernetes is strict about indentation — an extra space can cause your entire manifest to be rejected. Common mistakes include using tabs instead of spaces, incorrect nesting of fields, and missing required spec properties. Our Kubernetes YAML Validator helps catch these errors before you apply manifests to your cluster, saving time and preventing accidental misconfiguration."
      },
      {
        heading: "Writing Pod and Deployment Manifests",
        body: "Pods are the smallest deployable units in Kubernetes, representing one or more containers that share storage and network resources. A simple Pod manifest includes containers with their image, ports, environment variables, and resource requests. Pods are typically not created directly in production — you use higher-level resources like Deployments to manage them.\n\nDeployments are the standard way to run stateless applications in Kubernetes. A Deployment manages a ReplicaSet, which in turn manages the Pods. Key spec fields include replicas (how many Pod instances to run), selector (which Pods to manage via labels), and template (the Pod template defining containers, volumes, and other settings). Deployments support rolling updates with configurable strategies like maxSurge and maxUnavailable for zero-downtime deployments.\n\nProduction-grade Deployments should include resource requests and limits for CPU and memory, liveness and readiness probes for health checking, pod disruption budgets for maintenance windows, and horizontal pod autoscaling for dynamic scaling. These configuration details transform a basic deployment into a resilient production service. Our Kubernetes YAML Validator checks for these best practices and flags missing configurations."
      },
      {
        heading: "Services, ConfigMaps, and Secrets",
        body: "Services provide stable networking for Pods, which are ephemeral and get new IP addresses when they restart. The most common Service types are ClusterIP (internal cluster access, default), NodePort (external access via node port), and LoadBalancer (cloud provider load balancer). Services use label selectors to determine which Pods receive traffic, decoupling the network endpoint from the actual Pod instances.\n\nConfigMaps and Secrets store configuration data separately from container images. ConfigMaps hold non-sensitive configuration in key-value pairs or structured data like YAML files. They can be exposed to Pods as environment variables, command-line arguments, or mounted as volumes. The advantage is that you can change configuration without rebuilding container images.\n\nSecrets work like ConfigMaps but are intended for sensitive data like passwords, API keys, and certificates. Values in Secrets are base64-encoded (not encrypted — encryption at rest requires additional configuration like KMS). For production environments, consider external secret management tools like HashiCorp Vault, AWS Secrets Manager, or Sealed Secrets for GitOps workflows."
      },
      {
        heading: "Common Kubernetes YAML Errors",
        body: "The most frequent errors in Kubernetes YAML manifests are indentation mistakes. YAML uses spaces for indentation, and Kubernetes is strict about the exact nesting structure required by the API spec. A common example is placing spec fields at the wrong level, like putting containers directly under spec instead of under spec.template.spec. These errors produce cryptic messages from kubectl apply that can be hard to debug.\n\nAPI version mismatches are another common issue. Kubernetes deprecates API versions across releases — for example, apps/v1beta1 was removed in Kubernetes 1.16. Using a deprecated API version causes apply failures. Always check the Kubernetes API versioning documentation for your cluster version. The kubectl explain command shows the correct API version and field structure for any resource.\n\nMissing required fields is the third category of common errors. Every resource has required fields that must be present. A Deployment requires spec.selector.matchLabels and spec.template.metadata.labels to overlap. An Ingress requires spec.rules. Our Kubernetes YAML Validator checks for these structural requirements and provides clear error messages to help you fix issues before deployment."
      },
      {
        heading: "YAML Validation Best Practices",
        body: "Validating Kubernetes YAML before applying it to a cluster is a critical part of any deployment pipeline. Manual validation steps include using kubectl apply --dry-run=client to check syntax locally, kubectl explain to verify field structures, and schema validation tools to check against the OpenAPI spec that Kubernetes publishes for each version.\n\nFor CI/CD pipelines, integrate validation at multiple stages. Run syntax checks in pre-commit hooks, schema validation in pull request checks, and dry-run applies against a staging cluster before production. Tools like kubeconform, kubeval, and our Kubernetes YAML Validator can be integrated into GitHub Actions, GitLab CI, or any pipeline that runs containerized jobs.\n\nOur free Kubernetes YAML Validator provides instant client-side validation of your manifests. It checks YAML syntax, Kubernetes schema compliance, and common configuration issues. Paste your manifest and get immediate feedback without needing a cluster connection. All validation runs in your browser — your manifests never leave your machine, making it safe for confidential configurations."
      },
    ]
  },
  "github-actions-guide": {
    title: "GitHub Actions CI/CD: From Zero to Production Pipeline",
    description: "Learn GitHub Actions from scratch — workflow syntax, build/test/deploy pipelines, matrix builds, and YAML validation.",
    date: new Date("2026-07-03T00:00:00.000Z"),
    sections: [
      {
        heading: "What Are GitHub Actions?",
        body: "GitHub Actions is GitHub's built-in CI/CD platform that automates software workflows directly from your repository. You can build, test, and deploy your code right from GitHub with workflows triggered by events like pushes, pull requests, issue creation, or scheduled intervals. Actions supports all major languages and platforms with a marketplace of over 10,000 pre-built actions.\n\nThe core concept is a workflow — a YAML file in the .github/workflows directory that defines a series of jobs to run when triggered. Each job runs in a fresh runner environment (Ubuntu, Windows, or macOS) and consists of steps that can run commands or use actions from the marketplace. Workflows can be as simple as running tests on every push or as complex as multi-environment deployment pipelines with approval gates.\n\nGitHub Actions uses YAML syntax with specific keywords for workflow configuration. The most important keywords are name, on (trigger events), jobs (parallel units of work), steps within each job, and actions within steps. Understanding these building blocks lets you construct any CI/CD pipeline you need. Our GitHub Actions Validator helps you check your workflow syntax before committing."
      },
      {
        heading: "Workflow Syntax and Structure",
        body: "A GitHub Actions workflow file starts with the workflow name and trigger events. The on keyword specifies what events start the workflow — push, pull_request, schedule, workflow_dispatch (manual trigger), or repository_dispatch (external trigger). You can filter triggers by branch, path, or tags using the branches, paths, and tags keywords under each event.\n\nThe jobs section defines what work to perform. Jobs run in parallel by default but you can create dependencies with the needs keyword: job2: needs: job1 ensures job2 waits for job1 to complete. Each job specifies a runs-on (runner type), optional services (Docker containers for dependencies like databases), and a sequence of steps that execute commands or actions.\n\nSteps are the smallest unit of work. A step uses either the run keyword (to execute shell commands) or the uses keyword (to invoke a marketplace action). Common actions include actions/checkout (check out your repository), actions/setup-node (install Node.js), and actions/upload-artifact (save build outputs). Steps can access environment variables and previous step outputs through the steps context. Our GitHub Actions Validator checks your YAML syntax and catches common structural errors."
      },
      {
        heading: "Building a Complete CI/CD Pipeline",
        body: "A production CI/CD pipeline typically has four stages: lint, test, build, and deploy. The lint stage runs code quality tools like ESLint, Prettier, or RuboCop. The test stage runs unit tests, integration tests, and possibly end-to-end tests. The build stage compiles your application and creates artifacts. The deploy stage pushes the built artifacts to your hosting environment.\n\nDependencies between stages use the needs keyword to ensure they run in order. For example, the test job needs needs: lint, and the deploy job needs needs: [test, build]. This creates a pipeline where code quality is verified before testing, tests must pass before building, and building must succeed before deployment.\n\nMatrix builds multiply your test matrix across combinations of operating systems and language versions. Define a matrix strategy with os and version variables, and GitHub Actions automatically creates a job for each combination. For example, testing on ubuntu-latest, windows-latest, and macos-latest across Node.js 18, 20, and 22 generates 9 parallel jobs. This verifies compatibility across all target environments without writing separate workflows."
      },
      {
        heading: "Environment Management and Secrets",
        body: "GitHub Actions provides environment management through environments, secrets, and variables. Environments group related configuration for deployment targets like staging and production. Each environment can have approval reviewers — requiring manual approval before deployment proceeds. Environments also track deployment history with timestamps and commit references.\n\nSecrets store sensitive values like API keys, cloud credentials, and tokens. Organization secrets are available to all repositories in the organization, repository secrets are scoped to one repository, and environment secrets override repository secrets for specific environments. Secrets are encrypted with libsodium and are not visible in logs — they are masked when accidentally printed.\n\nBest practices for secrets include using OpenID Connect (OIDC) instead of long-lived credentials where possible, rotating secrets regularly, using short-lived tokens, and never hardcoding secrets in workflow files. GitHub's OIDC integration with AWS, Azure, GCP, and HashiCorp Vault lets workflows request temporary credentials directly without storing any cloud secrets."
      },
      {
        heading: "Workflow Validation and Debugging",
        body: "Workflow files are YAML, and YAML errors are the most common cause of workflow failures. Missing spaces, incorrect indentation, and tabs instead of spaces all cause parse errors that prevent the workflow from starting. GitHub shows these errors on the Actions tab but the messages can be cryptic. Always validate your YAML before pushing.\n\nFor debugging, enable diagnostic logging by setting the ACTIONS_STEP_DEBUG secret to true. This adds verbose output for runner diagnostics, action resolution, and step execution. You can also use the tmate action to SSH into a running runner for interactive debugging, though this should only be used in development repositories for security reasons.\n\nOur GitHub Actions Validator checks your workflow YAML syntax, validates action references against the marketplace, and catches common mistakes like incorrect indentation, invalid trigger syntax, and missing required fields. Paste your workflow file and get immediate feedback. All validation runs client-side in your browser — no data is uploaded."
      },
    ]
  },
  "jwt-refresh-tokens": {
    title: "JWT Refresh Token Rotation: Implementation Guide",
    description: "A practical guide to JWT refresh tokens — token rotation, expiration strategies, secure storage, and preventing replay attacks.",
    date: new Date("2026-07-04T00:00:00.000Z"),
    sections: [
      {
        heading: "Why Refresh Tokens?",
        body: "JWT access tokens have a fundamental limitation: they expire. Short expiration times (15-60 minutes) limit the damage if a token is stolen, but require the user to re-authenticate frequently. Long expiration times are convenient but increase security risk. Refresh tokens solve this by providing a long-lived credential that can request new short-lived access tokens without requiring the user to log in again.\n\nThe refresh token pattern improves security through separation of concerns. Access tokens are sent with every API request and have a short lifespan. Refresh tokens are stored securely and used only to obtain new access tokens. If an access token is stolen, its short expiration limits the window of vulnerability. If a refresh token is stolen, the original can be rotated and invalidated.\n\nOur JWT Expiration Checker helps you inspect both access and refresh tokens to verify their claims, expiration times, and structure. This is invaluable during development when you need to debug token lifecycle issues or verify that your authentication flow is working correctly."
      },
      {
        heading: "Access Token vs Refresh Token Architecture",
        body: "The standard JWT authentication flow uses two tokens with different lifetimes and purposes. The access token is short-lived (typically 15 minutes to 1 hour) and contains claims about the user's identity and permissions. It is sent in the Authorization header of every API request. The refresh token is long-lived (typically 7-30 days) and is used exclusively to obtain new access tokens.\n\nWhen the access token expires, the client sends the refresh token to a dedicated endpoint (POST /auth/refresh) which validates the refresh token and returns a new access token. This happens transparently to the user — the client intercepts 401 responses, refreshes the token, and retries the original request. The user only needs to log in when the refresh token itself expires.\n\nThe key architectural decision is where to store each token. Access tokens can be stored in memory (JavaScript variable) or in an httpOnly cookie. Refresh tokens should always be stored in an httpOnly cookie with Secure and SameSite=Strict flags. Never store refresh tokens in localStorage — they are accessible to any JavaScript running on your domain, making them vulnerable to XSS attacks."
      },
      {
        heading: "Refresh Token Rotation Strategy",
        body: "Refresh token rotation is a security pattern where each refresh request invalidates the old refresh token and issues a new one. This means a refresh token can only be used once. If an attacker steals a refresh token and the legitimate user also uses it, one of them will attempt to use an already-rotated token, triggering a security alert.\n\nImplementation of rotation requires a database or cache to track active refresh tokens. When a refresh request arrives, look up the token, verify it's still valid, issue a new access token AND a new refresh token, then invalidate the old refresh token by removing it from the database. If a rotated token is presented again, this indicates token theft — revoke all tokens for that user and require re-authentication.\n\nReplay detection is the companion to rotation. Maintain a family of tokens — a chain linking each new token back to its original. If a token from outside the current family is presented, the entire family is compromised. This prevents an attacker who steals a single token from maintaining access indefinitely. Our JWT Decoder helps you inspect the claims in your tokens to verify family identifiers and rotation status."
      },
      {
        heading: "Common Refresh Token Implementation Mistakes",
        body: "The most common mistake is storing refresh tokens in the same database table as access tokens without distinguishing their purpose. Refresh tokens need different storage considerations — they must be revocable, support rotation, and have configurable lifetimes independent of access token policies. Always use separate storage or at minimum a type field to distinguish them.\n\nAnother frequent error is not validating the refresh token's association with the user. When a refresh request comes in, verify that the token belongs to the requesting user (match sub claim against authenticated user ID). Also validate that the token hasn't been revoked due to password change, account suspension, or administrative action.\n\nFailing to implement absolute expiration is another critical mistake. Even with rotation, refresh tokens should have a hard maximum lifetime (typically 30-90 days) after which the user must re-authenticate regardless of rotation activity. This limits the window of exposure if an attacker maintains access through a compromised family of tokens. Use our JWT Expiration Checker to verify your token expiration policies during development and testing."
      },
      {
        heading: "JWT Refresh Token Best Practices",
        body: "Use httpOnly, Secure, SameSite=Strict cookies for refresh token storage. This prevents XSS attacks from reading the token and CSRF attacks from using it. Set the cookie path to /auth/refresh so it is only sent to the refresh endpoint, not to every API request. This reduces the attack surface if an attacker finds a way to make requests from the user's browser.\n\nImplement token rotation with a rolling expiration window. Each refresh resets the refresh token's expiration, but cap the total lifetime. For example, refresh tokens expire 7 days from the last refresh, but never more than 30 days from initial issuance. This balances security with user convenience — active users rarely need to log in, but inactive sessions are cleaned up automatically.\n\nMonitor and alert on unusual refresh patterns. Multiple refresh attempts from different IP addresses, refreshes for revoked tokens, and refresh attempts outside normal geographic regions all indicate potential compromise. Log refresh token operations with enough detail to investigate incidents. Use our JWT Decoder during development to inspect token claims and verify your implementation is correct before deploying to production."
      },
    ]
  },
  "wi-fi-qr-codes": {
    title: "Wi-Fi QR Codes: Generate and Share Network Access",
    description: "Learn how Wi-Fi QR codes work, how to generate them for WPA2 and WPA3 networks, and best practices for secure sharing.",
    date: new Date("2026-07-05T00:00:00.000Z"),
    sections: [
      {
        heading: "What Is a Wi-Fi QR Code?",
        body: "A Wi-Fi QR code is a special type of QR code that stores Wi-Fi network credentials in a standardized format. When scanned with a smartphone camera, the phone automatically recognizes the Wi-Fi configuration and prompts the user to connect — no need to type SSIDs or passwords manually. This makes Wi-Fi QR codes ideal for guest networks, cafes, hotels, and offices.\n\nThe Wi-Fi QR code format is defined by the WiFi Alliance and encoded as a string starting with WIFI:. The format includes the authentication type (WPA, WPA2, WPA3, or nopass), the SSID (network name), the password, and whether the network is hidden. A complete string looks like: WIFI:T:WPA;S:MyNetwork;P:MyPassword;;\n\nOur Wi-Fi QR Code Generator creates these codes instantly in your browser. Enter your network details and get a downloadable QR code image in SVG format. All generation happens client-side — your network credentials never leave your computer. This is important because a Wi-Fi password is a permanent credential that should not be transmitted to third-party services."
      },
      {
        heading: "Wi-Fi QR Code Format Specification",
        body: "The Wi-Fi QR code format follows a strict syntax that all modern smartphones understand. The format string has five possible fields, each separated by semicolons. T specifies the authentication type: WPA, WPA2, WPA3, or nopass (open network). S specifies the SSID (network name). P specifies the password. H specifies whether the network is hidden (true or false). The string ends with two semicolons.\n\nEach field value must be escaped according to specific rules. Backslashes are escaped as double backslashes, semicolons as backslash-semicolon, commas as backslash-comma, and colons as backslash-colon. This escaping ensures that special characters in SSIDs or passwords don't break the format. For example, a network named \"Guest: Free\" becomes S:Guest\\: Free in the QR code string.\n\nAuthentication type determines what security protocol the phone uses to connect. WPA2 is the most widely supported type and works with virtually all devices manufactured since 2006. WPA3 is the current standard but newer devices only. For mixed environments, WPA2/WPA3 transitional mode provides the broadest compatibility. Open networks use nopass — use these cautiously as traffic is unencrypted."
      },
      {
        heading: "Generating Wi-Fi QR Codes",
        body: "Generating a Wi-Fi QR code requires two steps: constructing the WIFI: formatted string and encoding it into a QR code image. The format string must exactly match the specification — any syntax error causes the phone to reject the code. Common mistakes include omitting the trailing semicolons, using wrong authentication type codes, and not escaping special characters in SSIDs.\n\nOur Wi-Fi QR Code Generator handles all formatting automatically. Enter your network name (SSID), select the security type, enter the password, and optionally mark the network as hidden. The tool constructs the correct format string and generates a QR code. You can download the result as an SVG file that prints cleanly at any size — ideal for printing on labels, posters, or business cards.\n\nThe QR code size affects scan reliability. A code printed at 3x3 cm (1.2 inches) scans reliably from 30 cm (12 inches). For larger viewing distances like wall posters, make the code proportionally larger — 10x10 cm scans from about 1 meter away. Always test your printed QR code with multiple phones before mass production."
      },
      {
        heading: "Wi-Fi QR Code Security Considerations",
        body: "Wi-Fi QR codes present a unique security challenge: the network password is encoded in plain text within the QR code. Anyone who can photograph the code has the password permanently. Treat printed Wi-Fi QR codes like printed passwords — limit distribution and consider rotating the password periodically.\n\nFor business environments, create separate guest network SSIDs with their own QR codes. This keeps the main corporate network password private while providing convenient guest access. Set guest networks to use client isolation so guests cannot see each other's traffic. Most enterprise access points support multiple SSIDs with different security policies.\n\nWPA3 provides forward secrecy — even if someone captures the QR code and the encrypted Wi-Fi traffic, they cannot decrypt past sessions after the password is changed. Consider rotating guest Wi-Fi passwords monthly and reprinting QR codes. Our Wi-Fi QR Code Generator makes regeneration quick — just enter the new password and download a fresh code."
      },
      {
        heading: "Using WebUtil's Wi-Fi QR Code Generator",
        body: "Our free Wi-Fi QR Code Generator creates QR codes for any Wi-Fi network type. The interface is straightforward: enter your SSID, select authentication type (WPA, WPA2, WPA3, or none), enter the password, and optionally mark the network as hidden. The QR code updates in real-time as you type.\n\nThe generator outputs SVG files that scale infinitely without quality loss. This is important for printing — a PNG QR code at 300 DPI works for small prints, but SVG guarantees sharp results at any size. You can print the code on a standard printer, upload to a print service for professional signs, or embed it in digital documents.\n\nAll processing runs entirely in your browser using the Canvas API and QR code generation library. Your network credentials never leave your device. The tool works offline after the initial page load, making it suitable for air-gapped environments where network credentials cannot be transmitted over the internet."
      },
    ]
  },
  "word-counter-guide": {
    title: "Word Counter Guide: Track Writing Metrics Like a Pro",
    description: "A complete guide to word counting — why word count matters for SEO, technical writing, and content creation. Learn reading time estimation.",
    date: new Date("2026-07-06T00:00:00.000Z"),
    sections: [
      {
        heading: "Why Word Count Matters",
        body: "Word count is one of the most fundamental metrics in writing, yet it is surprisingly important across many professional contexts. For SEO and content marketing, search engines use content length as a quality signal — comprehensive articles that thoroughly cover a topic tend to rank higher than short, superficial content. Studies consistently show that the average first-page result on Google contains at least 1,500 words.\n\nFor technical writers and documentation authors, word count helps estimate reading time and documentation coverage. API documentation with comprehensive coverage naturally contains more words but also communicates more information. Reading time estimates help readers decide whether they have time to consume the content now or should bookmark it for later.\n\nFor students and academics, word count is often a strict requirement — essays, papers, and theses must fall within specified ranges. A reliable word counter helps writers hit these targets precisely without the distraction of manual counting. Our Word & Character Counter provides instant word, character, sentence, and paragraph counts with reading time estimates."
      },
      {
        heading: "Word Count vs Character Count vs Other Metrics",
        body: "Different metrics serve different purposes. Word count measures the number of whitespace-delimited tokens in a text. It is the standard metric for content length in publishing, education, and SEO. Character count measures every character including spaces and punctuation. Social media platforms like Twitter (X) use character counts to enforce post length limits.\n\nReading time is derived from word count using an average reading speed of 200-250 words per minute for technical content. This estimates how long it takes someone to read the text. Speaking time is similar but uses a slower rate of 130-160 words per minute for spoken delivery. Sentence count helps assess readability — very long sentences reduce comprehension, while very short sentences can feel choppy.\n\nParagraph count helps evaluate document structure. A healthy ratio is 3-5 sentences per paragraph. Paragraphs that are too long discourage reading on screens, while single-sentence paragraphs can indicate insufficient development of ideas. Our Word & Character Counter provides all these metrics simultaneously, giving you a comprehensive view of your text's structure and readability."
      },
      {
        heading: "Using Word Count for SEO Content Strategy",
        body: "Content length directly correlates with search engine ranking for informational queries. Analysis of millions of search results shows that content length is one of the top ranking factors for non-commercial queries. However, padding content with filler words hurts both readability and rankings — Google's algorithms detect thin or repetitive content and may penalize it.\n\nThe sweet spot for blog posts depends on the topic depth. How-to guides and tutorials perform well at 1,500-2,500 words. Comprehensive guides and cornerstone content should target 3,000-5,000 words. News and update posts can be shorter at 500-1,000 words. The key is matching content length to the depth required by the topic — a short post about a simple topic ranks fine if it fully answers the user's question.\n\nReadability is as important as length. Content written at a grade 8-10 reading level performs best for general developer audiences. Use shorter sentences, active voice, and clear transitions between sections. Your word count target should be driven by comprehensive topic coverage, not by hitting an arbitrary number. Our Word & Character Counter helps you monitor both length and reading level."
      },
      {
        heading: "Word Counting in Different Languages",
        body: "Word counting algorithms vary across languages. In English and most European languages, words are separated by spaces, making whitespace-based counting straightforward. CJK languages (Chinese, Japanese, Korean) do not use spaces between words, requiring dictionary-based or statistical segmentation for accurate word counts. Character counts are often used instead for these languages.\n\nUnicode normalization matters for accurate counting. Characters with combining marks (like accented characters or emoji sequences) can be represented in multiple ways — as a single composed character or as a base character plus combining marks. Normalization to NFC or NFD form ensures consistent counting across different input methods.\n\nLine endings and special characters also affect counts. CRLF vs LF line endings, tabs, non-breaking spaces, and zero-width characters should all be handled correctly. Our Word Counter handles these edge cases by normalizing input before counting, ensuring consistent results regardless of how the text was entered or copied from other applications."
      },
      {
        heading: "Using WebUtil's Word & Character Counter",
        body: "Our free Word & Character Counter provides instant text analysis as you type or paste. The counter displays word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading time. All metrics update in real-time as you edit the text.\n\nThe tool handles edge cases automatically. URLs, email addresses, and code snippets are counted correctly without breaking the word count. Non-printing characters are filtered out for accurate counting. The reading time estimate uses 200 words per minute for English text, which is appropriate for average reading comprehension.\n\nAll processing happens client-side in your browser. No text is uploaded to any server — your content remains private. This is essential for writers working on confidential documents, drafts, or proprietary content. The tool works offline after the initial page load and can handle large documents of 100,000+ words without performance issues."
      },
    ]
  },
  "remove-duplicate-lines-guide": {
    title: "Remove Duplicate Lines: Complete Developer's Guide",
    description: "Learn how to remove duplicate lines from text — deduplication strategies, sorting, command-line alternatives, and online tools.",
    date: new Date("2026-07-07T00:00:00.000Z"),
    sections: [
      {
        heading: "Why Remove Duplicate Lines?",
        body: "Duplicate lines in text files are a common problem that causes data analysis errors, inflated file sizes, and processing inefficiencies. Log files accumulate repeated error messages that make identifying new issues harder. CSV exports from databases often contain duplicate rows due to join operations or multiple data sources. Configuration files can have duplicate entries after repeated modifications or merges.\n\nRemoving duplicates is essential for data cleaning workflows. Deduplicated data produces accurate statistics — duplicate entries skew counts, averages, and other aggregations. Clean data is also more compressible, reducing storage and bandwidth costs. For log analysis, deduplication highlights unique events that need attention rather than repeating the same message thousands of times.\n\nOur Remove Duplicate Lines tool provides instant deduplication with sorting options. The tool runs entirely in your browser, making it suitable for sensitive data that cannot be shared with external services. Whether you are cleaning a data export, preparing a mailing list, or deduplicating log files, the tool handles files of any size efficiently."
      },
      {
        heading: "Deduplication Strategies",
        body: "There are several approaches to removing duplicate lines, each suited to different use cases. The simplest strategy is exact line matching — if two lines are identical, keep only the first occurrence. This works well for most text files and preserves the original order of unique lines. It is the default behavior of most deduplication tools including ours.\n\nCase-insensitive deduplication treats lines that differ only in capitalization as duplicates. 'ERROR: Timeout' and 'error: timeout' would be considered the same line. This is useful for log files where the same message might appear in different cases depending on the logging system. Our tool supports case-insensitive mode for these scenarios.\n\nWhitespace-tolerant deduplication normalizes spaces before comparing, treating 'ERROR  Connection refused' and 'ERROR Connection refused' as duplicates. This helps when files have inconsistent spacing due to different editors or copy-paste from formatted sources. Combined with sorting, these strategies give you fine-grained control over what counts as a duplicate."
      },
      {
        heading: "Command-Line Alternatives",
        body: "Unix and Linux systems provide several command-line tools for removing duplicate lines. The classic approach uses sort and uniq: sort input.txt | uniq > output.txt. The sort command orders lines alphabetically, and uniq removes adjacent duplicates. This is fast and efficient for large files but changes the line order, which may not be acceptable for some use cases.\n\nTo preserve the original order of unique lines, use awk: awk '!seen[$0]++' input.txt > output.txt. This uses an associative array to track seen lines and only prints the first occurrence. It is slower than sort | uniq for very large files but preserves the file's original sequence, which matters for logs and chronological data.\n\nFor files where specific fields determine uniqueness, use awk with field-based deduplication: awk '!seen[$1]++' input.txt removes lines where the first field has been seen before. This field-aware approach is useful for CSV files where the same ID might appear in multiple rows with different data. Our Remove Duplicate Lines online tool provides these options through a simple interface without requiring command-line expertise."
      },
      {
        heading: "Handling Large Datasets",
        body: "Deduplicating very large files requires memory-efficient approaches. For files that fit in memory (typically under 500MB on modern systems), the hash-based approach works well — store a hash of each line in a Set and skip duplicates. This is O(n) time complexity and requires memory proportional to the number of unique lines.\n\nFor files larger than available memory, external sorting is required. Split the file into chunks, sort each chunk, then perform a merge pass that deduplicates while merging. This is the same approach used by the Unix sort command with the -u flag. Our tool processes files in the browser using streaming chunked operations that handle files up to 100MB without freezing the interface.\n\nBrowser-based deduplication has limitations compared to native tools for very large files. The browser's memory limit and single-threaded JavaScript mean that files over 500MB should be processed with command-line tools. For most common use cases — log files, CSV exports, configuration files — the browser-based approach is fast, convenient, and keeps your data private."
      },
      {
        heading: "Using WebUtil's Remove Duplicate Lines Tool",
        body: "Our free Remove Duplicate Lines tool provides instant text deduplication with customizable options. Paste your text, choose your deduplication strategy, and get cleaned output immediately. The tool supports case-sensitive and case-insensitive matching, whitespace normalization, and optional sorting alphabetically or by line length.\n\nThe interface shows original line count and deduplicated line count side by side, giving you immediate feedback on how many duplicates were removed. You can download the result as a text file or copy it to your clipboard. For lists where order matters, preserve the original sequence. For logs, sort alphabetically to group related messages.\n\nAll processing runs client-side in your browser. Your data never leaves your machine, making the tool safe for sensitive information like password lists, customer data, or proprietary logs. No sign-up required, no usage limits, and no data retention. The tool works offline and handles text of any length efficiently."
      },
    ]
  },
  "pdf-merger-guide": {
    title: "How to Merge PDF Files Privately in Your Browser (No Server Uploads)",
    description: "Learn how to combine and merge multiple PDF documents into a single file directly in your browser with zero server uploads, no file size limits, and 100% privacy.",
    date: new Date("2026-10-15T00:00:00.000Z"),
    sections: [
      {
        heading: "1. Why Traditional Cloud PDF Converters Threaten Your Privacy",
        body: "PDF documents commonly contain society's most sensitive information: signed legal contracts, corporate financial statements, tax filings, medical histories, and mortgage applications. When individuals and office workers search for 'merge PDF online', the top search engine results consist of commercial web services like Smallpdf or iLovePDF.\n\nAlmost all of these services operate by uploading your confidential, unencrypted PDF documents to remote cloud servers. Once on those servers, your files are stored, processed, and subject to data retention policies, potential cloud data breaches, and third-party scanning. Furthermore, these sites impose frustrating paywalls, capping free users at 2 files per hour."
      },
      {
        heading: "2. How Client-Side PDF Merging Works Using pdf-lib and WebAssembly",
        body: "Modern web browsers are equipped with powerful JavaScript and WebAssembly execution engines capable of parsing binary file structures directly inside computer memory. Using modern libraries like pdf-lib, WebUtil reads your PDF files as local ArrayBuffer objects, extracts page dictionaries, reconstructs cross-reference (xref) tables, and streams a combined PDF document into a fresh downloadable blob.\n\nNot a single byte of your document is ever transmitted across the internet. The processing happens in your device's RAM sandbox, providing complete privacy compliance with GDPR, HIPAA, and corporate confidentiality agreements."
      },
      {
        heading: "3. Step-by-Step Guide: Combining Multiple PDF Files on WebUtil",
        body: "1. Navigate to WebUtil's PDF Merger & Combiner tool.\n2. Drag and drop your PDF files into the upload area, or click 'Select PDF Files'.\n3. Review your uploaded documents: each file displays its exact page count and file size.\n4. Use the Up and Down arrow buttons to arrange your documents in the exact sequence you want them to appear in the final merged file.\n5. Click 'Merge PDFs Now' to combine the documents instantly.\n6. Click 'Download Merged PDF' to save your new single document."
      },
      {
        heading: "4. Quality Retention: Vector Typography and Image Clarity",
        body: "A common concern when merging PDFs is whether visual quality degrades. Because WebUtil performs binary stream copying rather than re-rasterizing pages to images, all original vector typography, font definitions, and high-resolution images are preserved byte-for-byte with zero quality loss."
      },
      {
        heading: "5. Compliance Benefits: Meeting GDPR, HIPAA, and NDA Standards",
        body: "In regulated industries like legal and healthcare, employees are legally prohibited from uploading unencrypted patient or client files to third-party consumer sites. Using WebUtil ensures strict compliance with HIPAA and GDPR data minimization rules because data never leaves the local machine."
      },
      {
        heading: "6. Offline Capability and Mobile Compatibility",
        body: "Because all PDF merging logic runs client-side, the tool functions even if you disconnect from Wi-Fi once the page is loaded. It is fully responsive and compatible with Safari on iOS and Chrome on Android, allowing you to combine documents on your smartphone."
      },
    ]
  },
  "remove-exif-data-guide": {
    title: "How to Remove GPS Location and EXIF Metadata from Photos Before Sharing",
    description: "Learn how to inspect and strip hidden EXIF metadata, camera settings, and GPS location coordinates from photos before uploading to marketplaces and social media.",
    date: new Date("2026-10-16T00:00:00.000Z"),
    sections: [
      {
        heading: "1. What is EXIF Metadata and Why Does Your Smartphone Record Your Location?",
        body: "Whenever you take a photo with a smartphone (iPhone or Android) or a modern digital camera, the device automatically embeds Exchangeable Image File Format (EXIF) metadata into the header of the JPEG file (standardized under JEITA CP-3451).\n\nThis hidden metadata includes your precise geographical GPS coordinates (latitude, longitude, and altitude), the exact timestamp (date, hour, minute, second), the camera model, lens specifications, exposure settings, and sometimes unique device identifiers."
      },
      {
        heading: "2. The Danger of Selling Online: How Stalkers and Burglars Exploit Photo GPS",
        body: "When selling items online—such as listing furniture on Craigslist, Facebook Marketplace, or eBay—taking a picture of the item inside your home or driveway inadvertently embeds your exact residential home address into the photo file.\n\nAnyone who downloads the original photo can inspect the EXIF data, extract your latitude and longitude, paste those coordinates into Google Maps or OpenStreetMap, and locate your front door. Burglars and stalkers actively utilize photo metadata to locate high-value items and track individuals."
      },
      {
        heading: "3. How to Inspect What Metadata Is Currently Embedded in Your Photos",
        body: "On Mac, you can right-click an image in Finder, select 'Get Info', and expand 'More Info' to view EXIF tags. On Windows, right-click, select 'Properties', and view the 'Details' tab. On smartphones, viewing the photo info in Apple Photos or Google Photos reveals the map thumbnail.\n\nWebUtil's Photo EXIF & GPS Location Stripper provides an instant browser-based inspection: drop any photo to see all embedded camera tags and a direct map link if GPS coordinates are found."
      },
      {
        heading: "4. How WebUtil Cleans Photos 100% Locally with HTML5 Canvas",
        body: "WebUtil strips metadata without sending your private photos to an external cloud server. The tool loads your image into an off-screen HTML5 <canvas> element and exports a fresh, clean JPEG or PNG image container. Because the canvas API only extracts the raw RGB pixel data, all EXIF tags, GPS coordinates, camera serial numbers, and thumbnail caches are permanently removed."
      },
      {
        heading: "5. How to Disable Camera Location Services on iOS and Android",
        body: "- iPhone (iOS): Go to Settings -> Privacy & Security -> Location Services -> Camera -> Select 'Never'.\n- Android: Open the Camera app -> tap Settings (gear icon) -> Toggle off 'Save location' or 'Location tags'."
      },
      {
        heading: "6. Best Practices for Sharing Photos on Marketplaces and Forums",
        body: "Always run photos through WebUtil's Photo EXIF & GPS Location Stripper prior to posting listings on classified forums, marketplace sites, or public community chat groups."
      },
    ]
  },
};

export const blogToolMapping: Record<string, string> = {
  "json-formatting-guide": "json-formatter",
  "common-json-errors": "json-formatter",
  "url-encoding-decoding": "url-encoder",
  "base64-encoding-methods": "base64-encoder",
  "password-security-best-practices": "password-generator",
  "color-converter-guide": "color-converter",
  "uuid-guide": "uuid-generator",
  "online-tools-security": "jwt-decoder",
  "json-vs-xml": "json-formatter",
  "json-schema-guide": "json-formatter",
  "how-apis-use-json": "json-formatter",
  "hash-generator-guide": "hash-generator",
  "sql-formatting-guide": "sql-formatter",
  "xml-formatting-guide": "xml-formatter",
  "yaml-converter-guide": "yaml-converter",
  "html-entities-guide": "html-entities",
  "case-converter-guide": "case-converter",
  "markdown-guide": "markdown-preview",
  "text-diff-guide": "text-diff",
  "image-converter-guide": "image-converter",
  "lorem-ipsum-guide": "lorem-ipsum",
  "jwt-authentication-explained": "jwt-expiration-checker",
  "json-vs-yaml-for-apis": "yaml-converter",
  "uuid-v4-vs-uuid-v7": "uuid-v7-generator",
  "regex-tutorial": "regex-tester",
  "css-units-guide": "px-to-rem",
  "docker-compose-tutorial": "docker-compose-validator",
  "rest-api-design": "json-formatter",
  "how-qr-codes-work": "qr-code-generator",
  "common-jwt-errors": "jwt-decoder",
  "json-compact-pretty-print": "json-formatter",
  "json-to-csv-guide": "json-to-csv",
  "kubernetes-yaml-guide": "kubernetes-yaml-validator",
  "github-actions-guide": "github-actions-validator",
  "jwt-refresh-tokens": "jwt-expiration-checker",
  "wi-fi-qr-codes": "wi-fi-qr-code-generator",
  "word-counter-guide": "word-counter",
  "remove-duplicate-lines-guide": "remove-duplicate-lines",
  "pdf-merger-guide": "pdf-merger",
  "remove-exif-data-guide": "exif-remover"
};

export function getBlogPost(slug: string): BlogContent | undefined {
  return blogContent[slug];
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getToolLink(slug: string): string {
  return blogToolMapping[slug] || slug;
}

export function getBlogPostsForTool(toolId: string): BlogPost[] {
  const matchingSlugs = Object.entries(blogToolMapping)
    .filter(([_, id]) => id === toolId)
    .map(([slug]) => slug);
  return blogPosts.filter((p) => matchingSlugs.includes(p.slug));
}
