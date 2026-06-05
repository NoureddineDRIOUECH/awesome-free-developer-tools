export function markdownToHtml(md: string): string {
  let html = md;

  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/`(.+?)`/g, "<code>$1</code>");
  html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");

  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  html = html.replace(/^\- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    const items = match.match(/<li>.*?<\/li>/g)?.join("") || match;
    return `<ul>${items}</ul>`;
  });

  html = html.replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>");
  html = html.replace(/(?:^<li>.*?<\/li>\n?)+/gm, (match) => {
    const items = match.match(/<li>.*?<\/li>/g)?.join("") || match;
    return `<ol>${items}</ol>`;
  });

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  html = html.replace(/^---$/gm, "<hr />");

  html = html.replace(/\n\n/g, "</p><p>");
  html = `<p>${html}</p>`;

  html = html.replace(/<p>\s*<\/p>/g, "");
  html = html.replace(/<\/ul>\s*<p>/g, "</ul>");
  html = html.replace(/<\/ol>\s*<p>/g, "</ol>");
  html = html.replace(/<p>\s*<(ul|ol)/g, "<$1");
  html = html.replace(/<(ul|ol)>\s*<\/p>/g, "<$1>");
  html = html.replace(/<\/h\d>\s*<p>/g, (match) => match.replace("<p>", ""));
  html = html.replace(/<\/blockquote>\s*<p>/g, "</blockquote>");
  html = html.replace(/<p>\s*<(h\d|blockquote|hr)/g, "<$1");
  html = html.replace(/(<(?:ul|ol)>(?:.|\n)*?)<\/p>/g, "$1");
  html = html.replace(/<\/li>\s*<p>/g, "</li>");
  html = html.replace(/<p>\s*<li>/g, "<li>");

  return html;
}
