/** Sort Vite glob keys like `/public/photos/foo/3.JPEG` by numeric stem */
export function sortGlobUrlsByNumericStem(
  entries: [string, string][],
): string[] {
  const stem = (path: string) =>
    Number.parseInt(path.match(/(\d+)\.[a-zA-Z]+$/)?.[1] ?? "0", 10);
  return [...entries]
    .sort(([a], [b]) => stem(a) - stem(b))
    .map(([, url]) => url);
}
