import reactToText from "react-to-text";

export const headingToId = (heading: string | React.ReactNode) => {
  const headingText = reactToText(heading);
  return (
    headingText
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      // replace any underscores for markdown italics,
      // since underscores are included in \w
      .replace(/_/g, "")
      .replace(/\s+/g, "-")
  );
};

export interface HeadingData {
  title: string;
  level: number;
  id: string;
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
      // get the id for the heading
      const id = headingToId(title);

      // record this heading
      headings.push({ title, level, id });
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
