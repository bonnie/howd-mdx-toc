// adapted from https://github.com/kaf-lamed-beyt/extract-md-headings/blob/master/src/index.ts
export interface MdxHeading {
  title: string;
  level: number;
}

/**
 * @description gets all the heading-text from a markdown file
 * @param {string} filePath  a valid relative path, as a string to where the markdown file is located.
 * @returns an array of objects containing the heading information like the `id`, `title`, `slug`, and `level`
 * @see [Documentation](https://github.com/kaf-lamed-beyt/extract-md-headings#usage)
 */

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
