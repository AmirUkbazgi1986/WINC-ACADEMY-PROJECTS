import { createContext, useContext, useEffect, useState } from "react";

const ContextEvents = createContext();

function ContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("http://localhost:3000/events");
        if (!res.ok) throw new Error("Could not fetch!");
        const data = await res.json();

        setEvents(data);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <ContextEvents.Provider value={{ events, loading, error }}>
      {children}
    </ContextEvents.Provider>
  );
}

function useEvents() {
  const context = useContext(ContextEvents);
  if (context === "undefined")
    throw new Error("the context is being used outside of the provider!");
  return context;
}
export { ContextProvider, useEvents };
