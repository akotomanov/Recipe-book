const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}
