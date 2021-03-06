function solution(strings, n) {
  return strings.sort((prev, next) =>
    prev[n] === next[n] ? prev.localeCompare(next) : prev[n].localeCompare(next[n])
  );
}