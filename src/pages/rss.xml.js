import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import config from "@/config/config.json";

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

    return rss({
        title: config.site.title || "Juan Lupión's Blog",
        description: config.metadata.meta_description || "Blog and texts by Juan Lupión",
        site: context.site || "https://juan.lupion.net",
        items: await Promise.all(sortedPosts.map(async (post) => {
            const youtubeId = post.data.youtube_id;
            const baseDescription = post.data.description || "";
            
            // Build content with YouTube embed if video ID exists, otherwise use full post body
            let content;
            if (youtubeId) {
                const embedHtml = `<p><iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>`;
                content = baseDescription ? `${baseDescription}\n\n${embedHtml}` : embedHtml;
            } else {
                // Render the full post body to HTML
                const { Content } = await post.render();
                content = post.body || baseDescription || "Read more on the site...";
            }
            
            return {
                title: post.data.title,
                pubDate: post.data.date ? new Date(post.data.date) : new Date(),
                description: content,
                link: `/blog/${post.id.replace(/\.mdx?$/, '')}/`,
            };
        })),
        customData: `<language>es-es</language><image><url>https://juan.lupion.net/images/juan-transparent.png</url><title>${config.site.title}</title><link>https://juan.lupion.net</link></image>`,
        stylesheet: '/rss/styles.xsl',
    });
}
