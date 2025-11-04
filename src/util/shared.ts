export const json = <T>(value: string | null = "", defaultValue?: any) => {
  try {
    if (!value) return defaultValue as T;
    return JSON.parse(value) as T;
  } catch {
    return defaultValue as T;
  }
};