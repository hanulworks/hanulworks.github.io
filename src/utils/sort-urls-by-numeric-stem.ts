/** Sort `[globPath, url][]` by the numeric stem before the file extension (e.g. `12.JPG` → 12). */
export function sortUrlsByNumericStem(entries: [string, string][]): string[] {
  const numericStem = (path: string) =>
    Number.parseInt(path.match(/(\d+)\.[a-zA-Z]+$/)?.[1] ?? "0", 10);
  return [...entries]
    .sort(([pathA], [pathB]) => numericStem(pathA) - numericStem(pathB))
    .map(([, url]) => url);
}
