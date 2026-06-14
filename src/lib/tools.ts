export interface ToolDefinition {
  id: string;
  title: string;
  description: string;
  category: ToolCategory;
  icon: string;
  metaDescription: string;
  keywords: string[];
  relatedTools: string[];
}

export type ToolCategory =
  | "formatters"
  | "encoders"
  | "generators"
  | "converters"
  | "text"
  | "images"
  | "security"
  | "web";

export interface ToolCategoryInfo {
  id: ToolCategory;
  name: string;
  description: string;
  icon: string;
}

export const categories: ToolCategoryInfo[] = [
  {
    id: "formatters",
    name: "Formatters",
    description: "Format and beautify your code and data",
    icon: "format_align_left",
  },
  {
    id: "encoders",
    name: "Encoders & Decoders",
    description: "Encode and decode data in various formats",
    icon: "lock",
  },
  {
    id: "generators",
    name: "Generators",
    description: "Generate passwords, UUIDs, and more",
    icon: "auto_awesome",
  },
  {
    id: "converters",
    name: "Converters",
    description: "Convert between different formats and units",
    icon: "swap_horiz",
  },
  {
    id: "text",
    name: "Text Tools",
    description: "Manipulate and analyze text content",
    icon: "text_fields",
  },
  {
    id: "images",
    name: "Image Tools",
    description: "Process and convert images in your browser",
    icon: "image",
  },
  {
    id: "security",
    name: "Security",
    description: "Hash, encrypt, and analyze security data",
    icon: "shield",
  },
  {
    id: "web",
    name: "Web Tools",
    description: "Utilities for web development and debugging",
    icon: "travel_explore",
  },
];

export const tools: ToolDefinition[] = [
  {
    id: "jwt-decoder",
    title: "JWT Decoder",
    description: "Decode and inspect JWT tokens — view header, payload, and signature information instantly.",
    category: "security",
    icon: "lock",
    metaDescription: "Free online JWT decoder. Decode JSON Web Tokens and inspect header, payload, and signature. 100% client-side, no token data sent to any server.",
    keywords: ["jwt decoder", "jwt token decoder", "decode jwt", "jwt payload viewer", "jwt inspector"],
    relatedTools: ["base64-encoder", "json-formatter", "uuid-generator"],
  },
  {
    id: "hash-generator",
    title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input. Fast, secure, and browser-based.",
    category: "security",
    icon: "fingerprint",
    metaDescription: "Free online hash generator. Generate MD5, SHA-1, SHA-256, and SHA-512 cryptographic hashes instantly in your browser. 100% client-side, no data upload.",
    keywords: ["hash generator", "md5 generator", "sha256 generator", "sha1 generator", "sha512 hash"],
    relatedTools: ["jwt-decoder", "base64-encoder", "uuid-generator"],
  },
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate, and beautify your JSON data with syntax highlighting and error detection.",
    category: "formatters",
    icon: "data_object",
    metaDescription: "Free online JSON formatter and validator. Beautify, minify, and validate JSON data with syntax highlighting and detailed error messages. No server uploads, 100% client-side.",
    keywords: ["json formatter", "json validator", "json beautifier", "format json", "json pretty print"],
    relatedTools: ["base64-encoder", "yaml-converter", "xml-formatter"],
  },
  {
    id: "base64-encoder",
    title: "Base64 Encoder / Decoder",
    description: "Encode or decode text and files to and from Base64 format instantly.",
    category: "encoders",
    icon: "lock",
    metaDescription: "Free online Base64 encoder and decoder. Convert text and files to/from Base64 encoding. 100% client-side, no server uploads, privacy guaranteed.",
    keywords: ["base64 encoder", "base64 decoder", "base64 encode", "base64 decode", "base64 converter"],
    relatedTools: ["json-formatter", "url-encoder", "html-entities"],
  },
  {
    id: "url-encoder",
    title: "URL Encoder / Decoder",
    description: "Encode or decode URLs and query parameters for proper web transmission.",
    category: "encoders",
    icon: "link",
    metaDescription: "Free online URL encoder and decoder. Encode or decode URLs, query strings, and URI components. Perfect for web development and debugging.",
    keywords: ["url encoder", "url decoder", "url encode", "url decode", "percent encoding"],
    relatedTools: ["base64-encoder", "html-entities", "json-formatter"],
  },
  {
    id: "html-entities",
    title: "HTML Entities Encoder",
    description: "Convert special characters to HTML entities and vice versa for safe web rendering.",
    category: "encoders",
    icon: "code",
    metaDescription: "Free online HTML entities encoder and decoder. Escape or unescape HTML special characters to prevent XSS and ensure proper rendering.",
    keywords: ["html entities", "html encoder", "html escape", "html unescape", "special characters"],
    relatedTools: ["url-encoder", "base64-encoder", "markdown-preview"],
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description: "Generate strong, secure passwords with customizable length and character sets.",
    category: "generators",
    icon: "vpn_key",
    metaDescription: "Free online secure password generator. Create strong random passwords with customizable length, symbols, numbers, and uppercase letters. 100% client-side.",
    keywords: ["password generator", "secure password", "random password", "strong password", "password creator"],
    relatedTools: ["uuid-generator", "base64-encoder", "lorem-ipsum"],
  },
  {
    id: "uuid-generator",
    title: "UUID Generator",
    description: "Generate UUID v4 identifiers for databases, APIs, and distributed systems.",
    category: "generators",
    icon: "tag",
    metaDescription: "Free online UUID generator. Generate random UUID v4 identifiers instantly. Perfect for database keys, API identifiers, and distributed systems. No server-side processing.",
    keywords: ["uuid generator", "uuid v4", "generate uuid", "guid generator", "unique id"],
    relatedTools: ["password-generator", "json-formatter", "base64-encoder"],
  },
  {
    id: "lorem-ipsum",
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your designs, mockups, and layouts.",
    category: "generators",
    icon: "article",
    metaDescription: "Free Lorem Ipsum generator. Create placeholder text in paragraphs, sentences, or words for your designs, mockups, and wireframes.",
    keywords: ["lorem ipsum", "placeholder text", "dummy text", "text generator", "filler text"],
    relatedTools: ["password-generator", "uuid-generator", "case-converter"],
  },
  {
    id: "yaml-converter",
    title: "YAML to JSON Converter",
    description: "Convert YAML data to JSON format and vice versa with live preview.",
    category: "converters",
    icon: "swap_horiz",
    metaDescription: "Free online YAML to JSON converter. Convert YAML to JSON and JSON to YAML with live preview, syntax highlighting, and error detection. 100% client-side.",
    keywords: ["yaml to json", "json to yaml", "yaml converter", "yaml formatter", "yaml validator"],
    relatedTools: ["json-formatter", "xml-formatter", "sql-formatter"],
  },
  {
    id: "color-converter",
    title: "Color Converter",
    description: "Convert between HEX, RGB, HSL, and named CSS colors with live preview.",
    category: "converters",
    icon: "palette",
    metaDescription: "Free online color converter. Convert between HEX, RGB, HSL, and named CSS colors with live color preview and accessibility contrast checking.",
    keywords: ["color converter", "hex to rgb", "rgb to hex", "color picker", "hex color converter"],
    relatedTools: ["image-converter", "json-formatter", "case-converter"],
  },
  {
    id: "case-converter",
    title: "Case Converter",
    description: "Convert text between camelCase, snake_case, kebab-case, and more.",
    category: "text",
    icon: "text_fields",
    metaDescription: "Free online case converter. Convert text between camelCase, PascalCase, snake_case, kebab-case, UPPER CASE, lower case, and Title Case instantly.",
    keywords: ["case converter", "camel case", "snake case", "kebab case", "text converter"],
    relatedTools: ["json-formatter", "markdown-preview", "text-diff"],
  },
  {
    id: "markdown-preview",
    title: "Markdown Preview",
    description: "Write and preview Markdown in real-time with syntax highlighting and HTML output.",
    category: "text",
    icon: "description",
    metaDescription: "Free online Markdown previewer and editor. Write Markdown with live HTML preview, syntax highlighting, and copy output. Perfect for developers and writers.",
    keywords: ["markdown preview", "markdown editor", "markdown to html", "md editor", "markdown viewer"],
    relatedTools: ["html-entities", "case-converter", "text-diff"],
  },
  {
    id: "text-diff",
    title: "Text Diff Checker",
    description: "Compare two texts side by side and highlight the differences between them.",
    category: "text",
    icon: "difference",
    metaDescription: "Free online text diff checker. Compare two texts side-by-side and highlight additions, deletions, and changes. Perfect for code reviews and document comparison.",
    keywords: ["text diff", "diff checker", "compare text", "text comparison", "code diff"],
    relatedTools: ["json-formatter", "markdown-preview", "case-converter"],
  },
  {
    id: "image-converter",
    title: "Image Converter",
    description: "Convert images between formats using your browser's Canvas API. No uploads needed.",
    category: "images",
    icon: "image",
    metaDescription: "Free online image converter. Convert images between PNG, JPEG, WebP, and GIF formats using your browser's Canvas API. 100% client-side, no uploads.",
    keywords: ["image converter", "convert image", "png to jpg", "jpg to png", "image format converter"],
    relatedTools: ["color-converter", "base64-encoder", "json-formatter"],
  },
  {
    id: "sql-formatter",
    title: "SQL Formatter",
    description: "Format and beautify SQL queries for better readability and maintainability.",
    category: "formatters",
    icon: "storage",
    metaDescription: "Free online SQL formatter and beautifier. Format SQL queries, procedures, and scripts with customizable indentation for better readability.",
    keywords: ["sql formatter", "sql beautifier", "format sql", "sql pretty print", "sql formatter online"],
    relatedTools: ["json-formatter", "yaml-converter", "xml-formatter"],
  },
  {
    id: "regex-tester",
    title: "Regex Tester",
    description: "Test regular expressions in real-time with match highlighting, group capture, and flag controls.",
    category: "text",
    icon: "manage_search",
    metaDescription: "Free online regex tester. Test regular expressions in real-time with match highlighting, group capture, and replace functionality. 100% client-side, no data sent to servers.",
    keywords: ["regex tester", "regular expression tester", "regex checker", "regex playground", "regex match test"],
    relatedTools: ["json-formatter", "case-converter", "text-diff"],
  },
  {
    id: "xml-formatter",
    title: "XML Formatter",
    description: "Format, validate, and beautify XML data with syntax highlighting.",
    category: "formatters",
    icon: "data_array",
    metaDescription: "Free online XML formatter and validator. Beautify, minify, and validate XML data with syntax highlighting. 100% client-side processing.",
    keywords: ["xml formatter", "xml validator", "xml beautifier", "format xml", "xml pretty print"],
    relatedTools: ["json-formatter", "yaml-converter", "sql-formatter"],
  },
  {
    id: "json-to-csv",
    title: "JSON to CSV for Excel",
    description: "Convert JSON arrays into CSV files ready for Excel. Handles nested objects, arrays, and Unicode with BOM.",
    category: "converters",
    icon: "table_chart",
    metaDescription: "Free online JSON to CSV converter for Excel. Convert JSON arrays to Excel-ready CSV with BOM, proper escaping, and nested object flattening. 100% client-side.",
    keywords: ["json to csv", "json to excel", "csv converter", "json to csv excel", "convert json to csv"],
    relatedTools: ["json-formatter", "yaml-converter", "sql-formatter"],
  },
  {
    id: "px-to-rem",
    title: "CSS px to rem Converter",
    description: "Convert pixel values to rem units instantly. Includes a reference table for common values at any base font size.",
    category: "converters",
    icon: "straighten",
    metaDescription: "Free online CSS px to rem converter. Instantly convert pixel values to rem units with a reference table. Set any base font size (default 16px). 100% client-side.",
    keywords: ["px to rem", "rem converter", "css units", "px to rem converter", "rem calculator"],
    relatedTools: ["color-converter", "case-converter", "regex-tester"],
  },
  {
    id: "kubernetes-yaml-validator",
    title: "Kubernetes YAML Validator",
    description: "Validate Kubernetes YAML manifests — check pods, deployments, services, and more for correct structure and required fields.",
    category: "web",
    icon: "deployed_code",
    metaDescription: "Free online Kubernetes YAML validator. Validate K8s manifests for pods, deployments, services, configmaps, and more. Check required fields, structure, and syntax. 100% client-side.",
    keywords: ["kubernetes validator", "k8s yaml validator", "kubernetes yaml lint", "k8s manifest validator", "kubernetes config validator"],
    relatedTools: ["yaml-converter", "docker-compose-validator", "github-actions-validator"],
  },
  {
    id: "docker-compose-validator",
    title: "Docker Compose Validator",
    description: "Validate docker-compose.yml files for correct syntax, structure, and required fields like services, images, and ports.",
    category: "web",
    icon: "deployed_code",
    metaDescription: "Free online Docker Compose validator. Validate docker-compose.yml files for correct YAML syntax, service structure, image references, port mappings, and volume configurations. 100% client-side.",
    keywords: ["docker compose validator", "docker-compose lint", "docker compose yaml validator", "docker compose check", "compose file validator"],
    relatedTools: ["kubernetes-yaml-validator", "yaml-converter", "github-actions-validator"],
  },
  {
    id: "github-actions-validator",
    title: "GitHub Actions Validator",
    description: "Validate GitHub Actions workflow YAML files — check triggers, jobs, steps, and required action syntax.",
    category: "web",
    icon: "deployed_code",
    metaDescription: "Free online GitHub Actions workflow validator. Validate .github/workflows YAML files for correct triggers, jobs, steps, action references, and required syntax. 100% client-side.",
    keywords: ["github actions validator", "github actions yaml", "workflow validator", "github actions lint", "ci yaml validator"],
    relatedTools: ["yaml-converter", "kubernetes-yaml-validator", "docker-compose-validator"],
  },
  {
    id: "jwt-expiration-checker",
    title: "JWT Expiration Checker",
    description: "Check when a JWT token expires. Decode JWT headers and payloads, inspect exp, iat, and other claims in real-time.",
    category: "security",
    icon: "timer",
    metaDescription: "Free online JWT expiration checker. Decode JWT tokens and inspect expiration (exp), issued at (iat), and other claims. Check if your token is expired or valid. 100% client-side.",
    keywords: ["jwt expiration checker", "jwt token expiry", "jwt decode", "check jwt expiration", "jwt expiry check"],
    relatedTools: ["jwt-decoder", "hash-generator", "uuid-v7-generator"],
  },
  {
    id: "uuid-v7-generator",
    title: "UUID v7 Generator",
    description: "Generate time-ordered UUID v7 identifiers. UUID v7 combines a Unix timestamp with random bits for sortable, database-friendly unique IDs.",
    category: "generators",
    icon: "tag",
    metaDescription: "Free online UUID v7 generator. Generate time-ordered UUID v7 identifiers with embedded timestamps for sortable database keys. Copy single or batch IDs. 100% client-side.",
    keywords: ["uuid v7", "uuid v7 generator", "time-ordered uuid", "uuid7", "sortable uuid"],
    relatedTools: ["uuid-generator", "jwt-expiration-checker", "hash-generator"],
  },
];

export function getToolById(id: string): ToolDefinition | undefined {
  return tools.find((t) => t.id === id);
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return tools.filter((t) => t.category === category);
}

export function getRelatedTools(toolId: string): ToolDefinition[] {
  const tool = getToolById(toolId);
  if (!tool) return [];
  return tool.relatedTools
    .map((id) => getToolById(id))
    .filter((t): t is ToolDefinition => t !== undefined);
}

export function getCategoryInfo(id: ToolCategory): ToolCategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}

export function getToolCategoryPairs(): { category: ToolCategoryInfo; tools: ToolDefinition[] }[] {
  return categories
    .map((cat) => ({
      category: cat,
      tools: getToolsByCategory(cat.id),
    }))
    .filter((pair) => pair.tools.length > 0);
}
