const getObjectKeys = <K extends PropertyKey>(obj: Record<K, any>): K[] => {
  return Object.keys(obj).map(key => key as keyof typeof obj);
};

export default getObjectKeys;
