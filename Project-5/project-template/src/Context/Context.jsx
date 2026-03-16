import { createContext, useContext, useState, useEffect } from "react";

const ContextEvents = createContext();

function ContextProvider({ children, initialEvents }) {
  const [events, setEvents] = useState(initialEvents);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setEvents(initialEvents);
  }, [initialEvents]);

  return (
    <ContextEvents.Provider value={{ events, setEvents, open, setOpen }}>
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
