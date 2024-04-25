/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import React from "react";

const BLOG_POST_DIR_PATH = "/content";
import { extractMdxHeadings } from "./headings-helpers";

export type BlogPostMetadata = {
  title: string;
  slug: string;
};

export const loadBlogPost = React.cache(async (slug: string) => {
  const rawContent = await readFile(`${BLOG_POST_DIR_PATH}/${slug}.mdx`);
  const { data: frontmatter, content } = matter(rawContent);
  const headings = extractMdxHeadings(content);

  return { frontmatter, content, headings };
});

export const getBlogPostList = async () => {
  const fileNames = await readDirectory(BLOG_POST_DIR_PATH);

  const blogPosts = [];

  for (const fileName of fileNames) {
    const rawContent = await readFile(`${BLOG_POST_DIR_PATH}/${fileName}`);
    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      title: frontmatter.title,
    });
  }

  return blogPosts;
};

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
