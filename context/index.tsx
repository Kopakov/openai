'use client';
import { ReactNode, createContext, useContext, useState } from 'react';
import { ModeType } from 'types';

// Types
type AppState = {
  input: string;
  response: string;
  loading: boolean;
  mode: ModeType;
};

type AppContextProps = {
  state: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
};

// Create context
const AppContext = createContext<AppContextProps | undefined>(undefined);

// Initial app state
const initialState = {
  input: '',
  response: '',
  loading: false,
  mode: 'text' as ModeType,
};

type Props = {
  children: ReactNode;
};

// Provider
const ContextProvider = ({ children }: Props) => {
  const [state, setAppState] = useState<AppState>(initialState);

  // Context values to access in components
  const contextValue = {
    state,
    setAppState,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use in components
const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  };

  return context;
};

export { ContextProvider, useAppContext };
