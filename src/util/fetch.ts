const customFetch = async <T>(url: string, options?: RequestInit, body?: any): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Fetch error: ${response.status} - ${text}`);
  }

  const result = await response.json() as T;

  return result;
};

export default customFetch;