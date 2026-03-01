import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import config from "@/config/config.json";

export async function GET(context) {
    const posts = await getCollection("blog");

    // Filter out drafts and any null/undefined posts
    const filteredPosts = posts.filter(post => !post.data.draft && post.id !== '-index.md');

    // Sort posts by date descending
    const sortedPosts = filteredPosts.sort((a, b) => {
        return new Date(b.data.date || new Date()).valueOf() - new Date(a.data.date || new Date()).valueOf();
    });

    return rss({
        title: config.site.title || "Juan Lupión's Blog",
        description: config.metadata.meta_description || "Blog and texts by Juan Lupión",
        site: context.site || "https://juan.lupion.net",
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date ? new Date(post.data.date) : new Date(),
            description: post.data.description || "Read more on the site...",
            link: `/blog/${post.slug || post.id.replace(/\.mdx?$/, '')}/`,
        })),
        customData: `<language>es-es</language>`,
    });
}
