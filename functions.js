export const filterObject = (obj: object, callback: (_val: any, _key: string) => boolean): object => {
  return Object.fromEntries(Object.entries(obj).filter(([key, val]) => callback(val, key)));
}

export const convertBase64 = async (file: File) => {
  return new Promise((resolver) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => resolver(fileReader.result)
  })
}
