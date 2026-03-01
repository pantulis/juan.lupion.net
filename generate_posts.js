import fs from 'fs';
import path from 'path';

const videos = JSON.parse(fs.readFileSync('youtube_videos.json', 'utf8'));
const blogDir = 'src/content/blog/';

if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}

function solveDate(relative) {
    const now = new Date('2026-02-26');
    if (relative.includes('month')) {
        const m = parseInt(relative);
        now.setMonth(now.getMonth() - m);
    } else if (relative.includes('year')) {
        const y = parseInt(relative);
        now.setFullYear(now.getFullYear() - y);
    }
    return now.toISOString().split('T')[0];
}

videos.forEach((video) => {
    const slug = slugify(video.title);
    const filePath = path.join(blogDir, `${slug}.mdx`);

    const content = `---
title: "${video.title.replace(/"/g, '\\"')}"
meta_title: "${video.title.replace(/"/g, '\\"')}"
description: "Video musical: ${video.title.replace(/"/g, '\\"')}"
date: ${solveDate(video.relativeDate)}
youtube_id: "${video.videoId}"
categories: ["Music"]
author: "Juan Lupión"
tags: ["video", "youtube"]
draft: false
---

Nuevo vídeo en mi canal de YouTube: **${video.title}**.
`;

    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${filePath}`);
});
