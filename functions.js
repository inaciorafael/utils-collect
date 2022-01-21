export const filterObject = (obj: object, callback: (_val: any, _key: string) => boolean): object => {
  return Object.fromEntries(Object.entries(obj).filter(([key, val]) => callback(val, key)));
}
