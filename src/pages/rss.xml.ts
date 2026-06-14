import rss from '@astrojs/rss';
import { getBlogPosts } from '../data/blog';

export const prerender = true;

export async function GET() {
  const posts = getBlogPosts();
  const siteUrl = 'https://webutil.tech';
  return rss({
    title: 'WebUtil Developer Blog',
    description: 'Developer guides and tutorials on JSON formatting, Base64 encoding, URL encoding, password security, color conversion, and more.',
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.date,
      link: `${siteUrl}/blog/${post.slug}`,
      categories: [post.category],
    })),
    customData: '<language>en-us</language>',
  });
}
