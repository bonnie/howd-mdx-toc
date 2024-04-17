import dynamic from "next/dynamic";

// load dynamically every time to make sure the mdx COMPONENT_MAP
//   import doesn't get bloated by loading every component for every
//   blog post.
export default dynamic(() => import("./BlogTitleList"));
