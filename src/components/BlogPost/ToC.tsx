import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

import { HeadingData, headingToId } from "@/helpers/headings-helpers";

import styles from "./ToC.module.css";

type ToCProps = { headings: Array<HeadingData> };

function ToC({ headings }: ToCProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Contents</h2>
      <nav className={styles.nav}>
        {headings.map(({ id, title, level }) => {
          return (
            // a `span` for now. Will become an `a` later.
            <a
              // this key assumes no duplicate heading titles
              key={id}
              href={`#${id}`}
              className={styles[`heading${level}`]}
            >
              <MDXRemote source={title} />
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default ToC;
