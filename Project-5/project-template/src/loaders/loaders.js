import { VITE_API_BASE_URL } from "../utils/env";
export async function postListLoader() {
  const [eventsResponse, categoriesResponse] = await Promise.all([
    fetch(`${VITE_API_BASE_URL}/events`),
    fetch(`${VITE_API_BASE_URL}/categories`),
  ]);

  if (!eventsResponse.ok || !categoriesResponse.ok)
    throw new Error("Could not fetch!");
  const events = await eventsResponse.json();
  const categories = await categoriesResponse.json();

  const eventsWithCategories = events.map((event) => {
    const categoryNames = event.categoryIds.map((id) => {
      const category = categories.find((cat) => cat.id === String(id));
      return category?.name;
    });

    return {
      ...event,
      categoryNames,
    };
  });

  return { eventsWithCategories, categories };
}

export async function postLoader(id) {
  try {
    const [eventResponse, categoriesResponse] = await Promise.all([
      fetch(`${VITE_API_BASE_URL}/events/${id}`),
      fetch(`${VITE_API_BASE_URL}/categories`),
    ]);

    if (!eventResponse.ok || !categoriesResponse.ok)
      throw new Error("Could not fetch!");
    const event = await eventResponse.json();
    const categories = await categoriesResponse.json();
    const categoryNames = event.categoryIds.map((id) => {
      const category = categories.find((cat) => cat.id === String(id));
      return category?.name;
    });
    return {
      ...event,
      categoryNames,
    };
  } catch (error) {
    console.error(error);
  }
}
