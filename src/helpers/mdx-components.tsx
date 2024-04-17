import React from "react";

import BlogHeading from "@/components/BlogHeading";

const COMPONENT_MAP = {
  h2: (props: React.ComponentProps<"h2">) => (
    <BlogHeading level={2} {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <BlogHeading level={3} {...props} />
  ),
};

export default COMPONENT_MAP;
