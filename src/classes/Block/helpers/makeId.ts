export const makeId = (letterCount: number) => {
  let result = '';
  const characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let counter = 0;

  while (counter < letterCount) {
    result += characterList.charAt(Math.floor(Math.random() * characterList.length));
    counter += 1;
  }

  return result;
};
