export function sortGlobUrlsByNumericStem(
  entries: [string, string][],
): string[] {
  const numericStem = (path: string) =>
    Number.parseInt(path.match(/(\d+)\.[a-zA-Z]+$/)?.[1] ?? "0", 10);
  return [...entries]
    .sort(([pathA], [pathB]) => numericStem(pathA) - numericStem(pathB))
    .map(([, url]) => url);
}
