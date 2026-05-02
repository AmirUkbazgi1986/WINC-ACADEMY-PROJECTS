import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { postListLoader, postLoader } from "../loaders/loaders";
import ErrorPage from "../components/ErrorPage";

const ContextEvents = createContext();

function ContextProvider({ children }) {
  const [events, setEvents] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [post, setPost] = useState(null);

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const fetchEventData = useCallback(async (id) => {
    try {
      setIsLoading(true);
      setError(null); // Reset error before fetching
      const event = await postLoader(id);
      setPost(event);
    } catch (err) {
      // 2. Catch and store the error object
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null); // Reset error before fetching
      const data = await postListLoader();
      setEvents(data);
    } catch (err) {
      // 2. Catch and store the error object
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 5000);
    return () => clearTimeout(timer);
  }, [fetchData]);

  if (error) {
    return <ErrorPage error={error} onRetry={fetchData} />;
  }

  return (
    <ContextEvents.Provider
      value={{
        events,
        setEvents,
        open,
        setOpen,
        edit,
        setEdit,
        fetchData,
        isloading,
        selectedEvent,
        setSelectedEvent,
        post,
        fetchEventData,
      }}
    >
      {children}
    </ContextEvents.Provider>
  );
}

function useEvents() {
  const context = useContext(ContextEvents);
  if (context === undefined)
    throw new Error("the context is being used outside of the provider!");
  return context;
}
export { ContextProvider, useEvents };
