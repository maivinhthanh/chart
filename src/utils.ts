export const greatestValue = (values: Array<number>) => {
  return values.reduce(
    (acc: number, cur: number) => (cur > acc ? cur : acc),
    -Infinity
  );
};

export const lessestValue = (values: Array<number>) => {
  return values.reduce(
    (acc: number, cur: number) => (cur < acc ? cur : acc),
    +Infinity
  );
};