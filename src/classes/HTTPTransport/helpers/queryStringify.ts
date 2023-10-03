function concatArray(key: string, arr: any[]) {
  let result = '';

  arr.forEach((item, index) => {
    result += `${key}[${index}]=${item}&`;
  });
  return result;
}

function concatObject(parameter: string, value: any) {
  let result = '';

  if (typeof value !== 'object') {
    return (result = `${parameter}=${value}&`);
  }

  if (typeof value === 'object') {
    Object.keys(value).forEach((key: string) => {
      result = concatObject(`${parameter}[${key}]`, value[key]);
    });
  }

  return result.replace(/\&$/g, '');
}

export function queryStringify(data: Record<string, any>): string | never {
  if (data === null || typeof data !== 'object') {
    throw 'input must be an object';
  }

  let resultString = '?';

  for (const key of Object.keys(data)) {
    const value = data[key];

    if (value instanceof Array) {
      resultString += concatArray(key, value);
      continue;
    }

    if (value instanceof Object) {
      resultString += '&' + concatObject(key, value);
      continue;
    }

    resultString += `${key}=${value}&`;
  }

  return resultString.replace(/\&\&/g, '&');
}
