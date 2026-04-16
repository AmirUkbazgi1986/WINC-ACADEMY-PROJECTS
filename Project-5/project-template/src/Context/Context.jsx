import { createContext, useContext, useState, useEffect } from "react";

const ContextEvents = createContext();

function ContextProvider({ children, initialEvents }) {
  const [events, setEvents] = useState(initialEvents);
  const [isloading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setEvents(initialEvents);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [initialEvents]);

  return (
    <ContextEvents.Provider
      value={{
        events,
        setEvents,
        open,
        setOpen,
        edit,
        setEdit,
        selectedEvent,
        setSelectedEvent,
        isloading,
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
