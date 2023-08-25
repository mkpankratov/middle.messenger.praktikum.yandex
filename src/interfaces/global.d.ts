declare global {
  type TIterable = {
    [key: string]: string | TIterable;
  };
}
