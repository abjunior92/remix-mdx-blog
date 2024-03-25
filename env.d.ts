import "@remix-run/node";
/// <reference types="vite/client" />

// declare module "*.mdx" {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   let MDXComponent: (props: any) => JSX.Element;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   export const frontmatter: any;
//   export default MDXComponent;
// }

declare module "virtual:remix/server-build" {
  import { ServerBuild } from "@remix-run/node";
  export const routes: ServerBuild["routes"];
}
