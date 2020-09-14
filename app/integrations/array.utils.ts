type ARRAY = readonly any[];

export function ConcatArray<T extends ARRAY, U extends ARRAY>(ArrayA: T, ArrayB: U): [ ...T, ...U ] {
  return [ ...ArrayA, ...ArrayB ];
};