import clsx from "clsx";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

import { HeadingData } from "@/helpers/headings-helpers";

import styles from "./ToC.module.css";

type ToCProps = { headings: Array<HeadingData> };

function ToC({ headings }: ToCProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Contents</h2>
      <nav className={styles.nav}>
        {headings.map(({ title, level }) => {
          return (
            // a `span` for now. Will become an `a` later.
            <span
              // this key assumes no duplicate heading titles
              key={title}
              className={clsx(styles.heading, styles[`heading${level}`])}
            >
              <MDXRemote source={title} />
            </span>
          );
        })}
      </nav>
    </div>
  );
}

export default ToC;
