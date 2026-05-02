import { getCollection } from "astro:content";
import config from "@/config/config.json";
import { marked } from "marked";

export async function GET(context) {
    const posts = await getCollection("blog");

    // Filter out drafts and index files (ids starting with '-')
    const filteredPosts = posts.filter(post => 
        !post.data.draft && 
        !post.id.startsWith('-') &&
        post.id !== '-index'
    );

    // Sort posts by date descending
    const sortedPosts = filteredPosts.sort((a, b) => {
        const dateA = a.data.date ? new Date(a.data.date).valueOf() : 0;
        const dateB = b.data.date ? new Date(b.data.date).valueOf() : 0;
        return dateB - dateA;
    });

    const siteUrl = context.site || "https://juan.lupion.net";
    const feedUrl = `${siteUrl}/feed.atom`;
    
    // Build Atom entries
    const entries = await Promise.all(sortedPosts.map(async (post) => {
        const postUrl = `${siteUrl}/blog/${post.id.replace(/\.mdx?$/, '')}/`;
        const youtubeId = post.data.youtube_id;
        const baseDescription = post.data.description || "";
        
        // Build content: include YouTube embed + description + rendered body
        let content;
        if (youtubeId) {
            const embedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`;
            const parts = [];
            if (baseDescription) parts.push(baseDescription);
            parts.push(embedHtml);
            if (post.body) parts.push(marked.parse(post.body));
            content = parts.join("\n\n");
        } else {
            // Convert Markdown body to HTML
            const rawContent = post.body || baseDescription || "Read more on the site...";
            content = marked.parse(rawContent);
        }
        
        const postDate = post.data.date ? new Date(post.data.date) : new Date();
        
        return `
    <entry>
      <title>${escapeXml(post.data.title)}</title>
      <link href="${postUrl}" rel="alternate" type="text/html" />
      <id>${postUrl}</id>
      <updated>${postDate.toISOString()}</updated>
      <content type="html">${escapeXml(content)}</content>
    </entry>`;
    }));
    
    const entriesXml = entries.join('\n');

    const buildDate = new Date().toISOString();

    const atomFeed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(config.site.title || "Juan Lupión's Blog")}</title>
  <subtitle>${escapeXml(config.metadata.meta_description || "Blog and texts by Juan Lupión")}</subtitle>
  <link href="${feedUrl}" rel="self" type="application/atom+xml" />
  <link href="${siteUrl}/" rel="alternate" type="text/html" />
  <updated>${buildDate}</updated>
  <id>${siteUrl}/</id>
  <author>
    <name>${escapeXml(config.metadata.meta_author || "Juan Lupión")}</name>
  </author>
  <generator uri="https://astro.build/">Astro</generator>
  <logo>https://juan.lupion.net/images/juan-transparent.png</logo>
  <icon>https://juan.lupion.net/images/favicon.png</icon>
${entriesXml}
</feed>`;

    return new Response(atomFeed, {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
        },
    });
}

function escapeXml(unsafe) {
    if (!unsafe) return '';
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&apos;';
        }
    });
}
