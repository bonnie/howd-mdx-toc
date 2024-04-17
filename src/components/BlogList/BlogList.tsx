import Link from "next/link";
import React from "react";

import { getBlogPostList } from "@/helpers/file-helpers";

import styles from "./BlogList.module.css";

async function BlogHome() {
  const blogPosts = await getBlogPostList();

  return (
    <ul>
      {blogPosts.map((post) => (
        <li className={styles.post} key={post.slug}>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default BlogHome;
