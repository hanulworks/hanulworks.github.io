/**
 * Sort Vite `import.meta.glob` entries (e.g. `/public/photos/foo/3.JPEG`)
 * by numeric filename stem so gallery order matches shot order.
 */
export function sortGlobUrlsByNumericStem(
  entries: [string, string][],
): string[] {
  const numericStem = (path: string) =>
    Number.parseInt(path.match(/(\d+)\.[a-zA-Z]+$/)?.[1] ?? "0", 10);
  return [...entries]
    .sort(([pathA], [pathB]) => numericStem(pathA) - numericStem(pathB))
    .map(([, url]) => url);
}
