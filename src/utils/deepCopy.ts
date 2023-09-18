export function deepCopy<P>(arg: P) {
  return JSON.parse(JSON.stringify(arg));
}
