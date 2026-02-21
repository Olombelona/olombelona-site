/**
 *
 * Hook
 * 2023-2023
 * v 0.0.1
 *
 *
 * */

export function useNode(data : any, lang: string | null) {
  const effectiveLang = lang ?? "en";
  const edges = data.allMarkdownRemark.edges;
  return edges.find((e: any) => e.node.frontmatter.lang === effectiveLang)?.node ?? edges[0].node;
}
