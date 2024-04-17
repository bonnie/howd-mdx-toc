import React from "react";

import styles from "./postSlug.module.css";

async function BlogPostLoading() {
  return (
    <div className={styles.loadingWrapper} style={{ opacity: 0 }}>
      Loading...
    </div>
  );
}
export default BlogPostLoading;
