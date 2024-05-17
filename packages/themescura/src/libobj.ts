
// Function to generate a nested object of a Type that has string values at leafs
// Take function f to generate type y and replace the string value with y
// Ex: { palette: { primary: "#FF5370" } } => { palette: { primary: f(keys, values) } }
export const forObjectReplace =
  <T extends Record<string, any>, Y>
    (obj: T, replace: (keys: string[], value: any) => Y): T => {
    // Nested
    const generatedObject: Record<string, any> = JSON.parse(JSON.stringify(obj))

    const generate = (obj: Record<string, any>, prefix: string[]) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          generate(obj[key], [...prefix, key])
        } else {
          obj[key] = replace([...prefix, key], obj[key])
        }
      })
    }

    generate(generatedObject, [])

    return generatedObject as T
  }


// Flattens a nested object of a theme to a flat object of css variables
// Ex: { palette: { primary: "#FF5370" } } => { "--palette-primary": "#FF5370" }
export const flattenObject =
  <T extends Record<string, any>>
    (
      theme: T,
      newKey: (keys: string[], value: any) => [string, any],
    ): { [key: string]: any } => {
    const flattenedObject: Record<string, string> = {}

    const flatten = (obj: Record<string, any>, prefix: string[]) => {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          flatten(obj[key], [...prefix, key])
        } else {
          const newItem = newKey([...prefix, key], obj[key])
          flattenedObject[newItem[0]] = newItem[1]
        }
      })
    }

    flatten(theme, [])

    return flattenedObject
  }


function isObject<T>(item: T) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export const deepMerge = <T extends Record<string, any>, U extends Record<string, any>>(theme1: T, theme2: U): T & U => {
  // Deep merge as deep object
  let output = Object.assign({}, theme1) as T & U;
  if (isObject(theme1) && isObject(theme2)) {
    Object.keys(theme2).forEach(key => {
      if (isObject(theme2[key])) {
        if (!(key in theme1))
          Object.assign(output, { [key]: theme2[key] });
        else
          output[key as keyof T & U] = deepMerge(theme1[key], theme2[key]);
      } else {
        Object.assign(output, { [key]: theme2[key] });
      }
    });
  }
  return output;
}
