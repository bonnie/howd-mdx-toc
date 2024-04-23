import clsx from "clsx";
import React from "react";

import styles from "./BlogHeading.module.css";

export type BlogHeadingProps = {
  level: 2 | 3;
} & React.ComponentProps<"h2">;

function BlogHeading({
  level,
  className,
  children,
  ...delegated
}: BlogHeadingProps) {
  if (level === 2)
    return (
      <h2
        className={clsx(className, styles.level2, styles.heading)}
        {...delegated}
      >
        {children}
      </h2>
    );
  if (level === 3)
    return (
      <h3 className={clsx(styles.level3, styles.heading)} {...delegated}>
        {children}
      </h3>
    );
}

export default BlogHeading;
