export async function postListLoader() {
  try {
    const [eventsResponse, categoriesResponse] = await Promise.all([
      fetch("http://localhost:3000/events"),
      fetch("http://localhost:3000/categories"),
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

    return eventsWithCategories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function postLoader({ params }) {
  try {
    const [eventResponse, categoriesResponse] = await Promise.all([
      fetch(`http://localhost:3000/events/${params.eventId}`),
      fetch(`http://localhost:3000/categories`),
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
