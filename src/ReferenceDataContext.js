import { createContext, useState } from "react";

const [card, setCard] = useState(undefined);

ReferenceDataContext = createContext({ card, setCard });

const ReferenceDataContextProvider = ({ children }) => {
  return (
    <ReferenceDataContext.Provider value={{ card, setCard }}>
      {...children}
    </ReferenceDataContext.Provider>
  );
};

export { ReferenceDataContext, ReferenceDataContextProvider };
