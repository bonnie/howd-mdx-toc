import reactToText from "react-to-text";

export const headingToId = (heading: string | React.ReactNode) => {
  const headingText = reactToText(heading);
  return headingText
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

export interface HeadingData {
  title: string;
  level: number;
}

// adapted from https://github.com/kaf-lamed-beyt/extract-md-headings/blob/master/src/index.ts
export function extractMdxHeadings(mdxContent: string): Array<HeadingData> {
  const headings: Array<HeadingData> = [];

  // match the `#` syntax for headings
  const headingMatcher = /^(#+)\s(.+)$/gm;

  let match = headingMatcher.exec(mdxContent);
  while (match !== null) {
    const level = match[1].length;
    const title = match[2].trim();

    if (level === 2 || level === 3) {
      // record this heading
      headings.push({ title, level });
    }
    // get next match
    // Note: the following statement must be
    //   *outside* the `if` statement above,
    //   otherwise an infinite loop will occur
    //   for headings of level greater than 3.
    //   Thanks to Alberto for pointing this out!
    //   https://github.com/bonnie/howd-mdx-toc/issues/7
    match = headingMatcher.exec(mdxContent);
  }

  return headings;
}
