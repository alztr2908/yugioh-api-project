import { createContext, useState } from "react";

const [loading, setLoading] = useState(true);

ReferenceDoneLoading = createContext({ loading, setLoading });

const ReferenceDoneLoadingProvider = ({ children }) => {
  return (
    <ReferenceDoneLoading.Provider value={{ loading, setLoading }}>
      {...children}
    </ReferenceDoneLoading.Provider>
  );
};

export { ReferenceDoneLoading, ReferenceDoneLoadingProvider };
