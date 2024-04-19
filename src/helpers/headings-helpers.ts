export interface MdxHeading {
  title: string;
  level: number;
}

// adapted from https://github.com/kaf-lamed-beyt/extract-md-headings/blob/master/src/index.ts
export function extractMdxHeadings(mdxContent: string): Array<MdxHeading> {
  const headings: Array<MdxHeading> = [];

  // match the `#` syntax for headings
  const headingMatcher = /^(#+)\s(.+)$/gm;

  let match = headingMatcher.exec(mdxContent);
  while (match !== null) {
    const level = match[1].length;
    const title = match[2].trim();

    if (level === 2 || level === 3) {
      // record this heading
      headings.push({ title, level });

      // get next match
      match = headingMatcher.exec(mdxContent);
    }
  }

  return headings;
}
